import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import '../../styles/statusBar.css';
import postIcon from '../../images/pp2.png';
import Badge from '@material-ui/core/Badge';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class StatusBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            statuslist : [            
            {
                "username":"taniya.faisal",
                "path":"../../images/pp2.png"
            },
            {
                "username":"taniya_faisal",
                "path":"../../images/pp2.png"
            },
            {
                "username":"taniya._.faisal",
                "path":"../../images/pp2.png"
            },
            {
                "username":"taniyafaisal",
                "path":"../../images/pp2.png"
            }]
        };
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        // let data = [
        //     {
        //         "username":"taniya.faisal",
        //         "imageURL":"../../images/pp2.png"
        //     },
        //     {
        //         "username":"taniya_faisal",
        //         "imageURL":"../../images/pp2.png"
        //     },
        //     {
        //         "username":"taniya._.faisal",
        //         "imageURL":"../../images/pp2.png"
        //     },
        //     {
        //         "username":"taniyafaisal",
        //         "imageURL":"../../images/pp2.png"
        //     },
        //     {
        //         "username":"taniya.faisal",
        //         "imageURL":"../../images/pp2.png"
        //     },
        //     {
        //         "username":"taniya_faisal",
        //         "imageURL":"../../images/pp2.png"
        //     },
        //     {
        //         "username":"taniya._.faisal",
        //         "imageURL":"../../images/pp2.png"
        //     },
        //     {
        //         "username":"taniyafaisal",
        //         "imageURL":"../../images/pp2.png"
        //     }
        // ]
        fetch("http://localhost:8081/api/v1/status/")
            .then(response => response.json())
            .then(data => {
                this.setState({statusList: data});
        });
    }

    uploadStatus = (event) =>{
        let file = event.target.files[0];
        const thisContext = this;
        if(file == null || file === undefined){
            return;
        }
        const storage = getStorage();
        const metadata = {
            contentType: 'image/jpeg'
        };
        // Upload file and metadata to the object 'images/mountains.jpg'
        const storageRef = ref(storage, 'status/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on('state_changed',
        (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progressBar = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            thisContext.setState({progress:progressBar});
            console.log('Upload is ' + progressBar + '% done');
            switch (snapshot.state) {
            case 'paused':
                console.log('Upload is paused');
                break;
            case 'running':
                console.log('Upload is running');
                break;
            default:
                break;
            }
        }, 
        (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
            case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
            case 'storage/canceled':
                // User canceled the upload
                break;

            // ...

            case 'storage/unknown':
                // Unknown error occurred, inspect error.serverResponse
                break;
            default:
                break;
            }
        }, 
        () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                console.log('------', JSON.parse(localStorage.getItem("users")).uid);
                let payload = {
                    "statusID":JSON.parse(localStorage.getItem("users")).uid+Math.floor(Math.random()*100).toString(),
                    "userId": JSON.parse(localStorage.getItem("users")).uid,
                    "path": downloadURL,
                    "timestamp":new Date().getTime(),
                }

                const requestOptions = {
                    method : "POST",
                    headers: {"Content-Type": "application/json"},
                    body : JSON.stringify(payload)
                }

                fetch("http://localhost:8081/api/v1/status/",requestOptions)
                .then(response => response.json())
                .then(data =>{
                    thisContext.getData();
                })
                .catch(error =>{

                })
            });
        }
        );

    }

    render(){
        return(
            <>
                <div className="statusBar_container">
                    <div className="statusBar_status">
                        <label for="file-upload-status" >
                            <Badge badgeContent="+" color="secondary" 
                                overlap="circular" 
                                anchorOrigin={{vertical: 'bottom', horizontal: 'right',}}
                                className="badge">
                                <Avatar src={postIcon} alt="Status Icon" className="statusBar_upload"></Avatar>
                            </Badge>
                            <div className="statusBar_statusText">Your story</div>
                        </label>
                        <input id="file-upload-status" onChange={this.uploadStatus} type="file"/>
                    </div>                  
                    {
                        this.state.statuslist.map((item, index) => (
                            <div className="statusBar_status">
                                <Avatar src={item.path} alt="Status Icon" className="statusBar_statusIcon"></Avatar>
                                <div className="statusBar_statusText">{item.username}</div>
                            </div>
                        ))
                    }
                    
                </div>
            </>
        );
    }
}

export default StatusBar;