import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import '../../styles/statusBar.css';
import postIcon from '../../images/pp2.png';
import Badge from '@material-ui/core/Badge';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import Modal from '@material-ui/core/Modal';
import LinearProgress from '@material-ui/core/LinearProgress';
import AlertMessage from '../AlertMessage.js';

class StatusBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            statuslist : [],
            open : false,
            progress: 0,
            modalImagePath:'',
            errorMessage: "",
            displayAlert: false,

        };
    }

    componentDidMount(){
        this.getCustomData();
        this.getData();
    }

    getCustomData = () => {
        const thisContext = this;
        fetch("http://localhost:8081/api/v1/status/dlP8Z7PEBmTrJgeeTbcPSYMJ3an1")
            .then(response => response.json())
            .then(data => {
                thisContext.setState({statuslist: data});
            })
            .catch(error =>{
                console.log(error);
            })
    }

    getData = () => {
        const thisContext = this;
        const uid = JSON.parse(localStorage.getItem("users")).uid;
        const uemail = JSON.parse(localStorage.getItem("users")).email; 
        (uemail === "admin@gmail.com") ?
        fetch("http://localhost:8081/api/v1/status/")
            .then(response => response.json())
            .then(data => {
                thisContext.setState({statuslist: data})
            })
            .catch(error =>{
                console.log(error);
            })
        :
        fetch("http://localhost:8081/api/v1/status/"+uid)
            .then(response => response.json())
            .then(data => {
                thisContext.setState({statuslist: [...data, ...this.state.statuslist] });
            })
            .catch(error =>{
                console.log(error);
            })
    }

    uploadStatus = (event) =>{
        let file = event.target.files[0];
        const thisContext = this;
        thisContext.setState({displayAlert: false});

        if(file == null || file === undefined){
            return;
        }
        const storage = getStorage();
        const metadata = {
            contentType: 'image/jpeg'
        };
        const storageRef = ref(storage, 'status/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);

        uploadTask.on('state_changed',
        (snapshot) => {
            const progressBar = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            thisContext.setState({progress:progressBar});
        }, 
        (error) => {
            thisContext.setState({ errorMessage: "An error occured. Please try again!"});
            thisContext.setState({displayAlert: true});
        }, 
        () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
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
                    thisContext.setState({ errorMessage: "An error occured. Please try again!"});
                    thisContext.setState({displayAlert: true});
                })
            });
        }
        );

    }

    handleOpen = (path) => {
        this.setState({open:true,modalImagePath:path});
      };
    
    handleClose = () => {
        this.setState({open:false});
      };

    render(){
        let errorMsg = this.state.errorMessage.toString();
        return(
            <>
                <div className="statusBar_progress">
                    {this.state.progress !== 0 && this.state.progress !== 100 &&    <LinearProgress className="statusBar_progress" variant="determinate" value={this.state.progress} />}
                </div>
                <div className="statusBar_container">
                    <div className="statusBar_status">
                        <label htmlFor="file-upload-status" >
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
                            <div className="statusBar_status" key={index+1}>
                                <Avatar src={item.userImage} alt={item.username} className="statusBar_statusIcon" onClick={()=>this.handleOpen(item.path)}></Avatar>
                                <div className="statusBar_statusText">{item.username}</div>
                                <Modal className="statusBar_modal"
                                    open={this.state.open}
                                    onClose={this.handleClose}
                                >
                                    <div>
                                        <img  src ={this.state.modalImagePath} alt = "Status" className ="statusBar_image"></img>
                                    </div>
                                </Modal>

                            </div>
                        ))
                    }
                    
                </div>
                {this.state.displayAlert && <AlertMessage message = {errorMsg}/>}
            </>
        );
    }
}

export default StatusBar;