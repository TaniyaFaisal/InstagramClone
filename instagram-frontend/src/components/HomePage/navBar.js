import { Grid } from '@material-ui/core';
import React, { Component } from 'react'
import '../../styles/navbar.css';
import inst_logo from '../../images/logoinsta.png';
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import postIcon from '../../images/add.svg';
import pp1 from '../../images/pp2.png';
import find from '../../images/find.svg';
import react from '../../images/love.svg';  
import Avatar from '@material-ui/core/Avatar';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            progress :  "",
        };
    }

    uploadImage = (event) =>{
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
        const storageRef = ref(storage, 'images/' + file.name);
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
                    "postID":JSON.parse(localStorage.getItem("users")).uid+Math.floor(Math.random()*1000).toString(),
                    "userId": JSON.parse(localStorage.getItem("users")).uid,
                    "postPath": downloadURL,
                    "timestamp":new Date().getTime(),
                    "likeCount":0
                }

                const requestOptions = {
                    method : "POST",
                    headers: {"Content-Type": "application/json"},
                    body : JSON.stringify(payload)
                }

                fetch("http://localhost:8081/api/v1/post/",requestOptions)
                .then(response => response.json())
                .then(data =>{
                    console.log(data);
                    window.location.reload();
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
                <div className="navbar_barComp">
                    <Grid container>
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={3}>
                            <img src={inst_logo} className="navBar_instLogo" alt="Instagram Logo"></img>
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" className="navBar_search" placeholder="Search"></input>
                        </Grid>
                        <Grid item xs={3} className="navBar_iconsGrp">
                            <img src={home} className="navBar_icons" alt="Home Icon"></img>
                            <img src={message} className="navBar_icons" alt="Message Icon"></img>
                            <div className = "navBar_post">
                                <label for="file-upload"><img src={postIcon} className="navBar_icons" alt="Post Icon" height="23px"></img></label>
                                <input id="file-upload" type="file" onChange={this.uploadImage}/>
                            </div>
                            <img src={find} className="navBar_icons" alt="Find Icon"></img>
                            <img src={react} className="navBar_icons" alt="Heart Icon"></img>
                            <Avatar className="navBar_iconsAvatar"
                                alt="Remy Sharp"
                                src={pp1}
                                sx={{ width: 20, height: 20 }}
                            />
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                    </Grid>
                </div>
                <div className="navBar_progress">
                    {this.state.progress}
                </div>
            </>
        );
    }
}

export default NavBar;