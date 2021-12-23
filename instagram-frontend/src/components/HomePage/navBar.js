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
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { signOut } from "firebase/auth";
import { auth } from '../firebase.js';
import LinearProgress from '@material-ui/core/LinearProgress';
import AlertMessage from '../AlertMessage.js';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress: 0,
            anchorEl: null,
            profileImage: pp1,
            errorMessage: "",
            displayAlert: false,
        };
    }

    uploadImage = (event) => {
        const thisContext = this;
        thisContext.setState({displayAlert: false});
        let file = event.target.files[0];
        if (file == null || file === undefined) {
            return;
        }
        const storage = getStorage();
        const metadata = {
            contentType: 'image/jpeg'
        };
        const storageRef = ref(storage, 'images/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progressBar = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                thisContext.setState({ progress: progressBar });
            },
            (error) => {
                thisContext.setState({ errorMessage: "An error occured. Please try again!"});
                thisContext.setState({displayAlert: true});
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    console.log("Download URL" +downloadURL)
                    let payload = {
                        "postID": JSON.parse(localStorage.getItem("users")).uid + Math.floor(Math.random() * 1000).toString(),
                        "userId": JSON.parse(localStorage.getItem("users")).uid,
                        "postPath": downloadURL,
                        "timestamp": new Date().getTime(),
                        "likeCount": 123
                    }
                    const requestOptions = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload)
                    }

                    fetch("http://localhost:8081/api/v1/post/", requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            window.location.reload();
                        })
                        .catch(error => {
                            thisContext.setState({ errorMessage: "An error occured. Please try again!"});
                            thisContext.setState({displayAlert: true});
                        })
                });
            }
        );

    }

    uploadProfileImage = (event) => {
        let file = event.target.files[0];
        const thisContext = this;
        thisContext.setState({displayAlert: false});
        if (file == null || file === undefined) {
            return;
        }
        const storage = getStorage();
        const metadata = {
            contentType: 'image/jpeg'
        };
        const storageRef = ref(storage, 'profile/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file, metadata);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progressBar = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                thisContext.setState({ progress: progressBar });
            },
            (error) => {
                thisContext.setState({ errorMessage: "An error occured. Please try again!"});
                thisContext.setState({displayAlert: true});
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    let payload = {
                        "userId": JSON.parse(localStorage.getItem("users")).uid,
                        "profileImage": downloadURL,
                    }

                    const requestOptions = {
                        method: "PUT",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(payload)
                    }

                    fetch("http://localhost:8081/api/v1/users/", requestOptions)
                        .then(response => response.json())
                        .then(data => {
                            thisContext.setState({ profileImage: data.profileImage })
                        })
                        .catch(error => {
                            thisContext.setState({ errorMessage: "An error occured. Please try again!"});
                            thisContext.setState({displayAlert: true});
                        })
                });
            }
        );
    }

    signOut = () => {
        signOut(auth).then(() => {
            localStorage.removeItem("users");
            window.location.reload();
        }).catch((error) => {
            console.log("Error signing out" + error);
        });
    }

    handleClick = (event) => {
        this.setState({ anchorEl: event.currentTarget })
    };

    handleClose = () => {
        this.setState({ anchorEl: null })
    };

    render() {
        const open = Boolean(this.state.anchorEl);
        const id = open ? 'simple-popover' : undefined;
        let errorMsg = this.state.errorMessage.toString();
        return (
            <>
                <div className="navbar_barComp" id="navbar_barComp">
                    <Grid container >
                        <Grid item xs={2} id="navbar_hideComp1">

                        </Grid>
                        <Grid item xs={3}>
                            <img src={inst_logo} className="navBar_instLogo" alt="Instagram Logo" id="navBar_instLogo"></img>
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" className="navBar_search" placeholder="Search"></input>
                        </Grid>
                        <Grid item xs={3} className="navBar_iconsGrp" id="navBar_iconsGrp">
                            <img src={home} className="navBar_icons" alt="Home Icon"></img>
                            <img src={message} className="navBar_icons" alt="Message Icon"></img>
                            <div className="navBar_post">
                                <label htmlFor="file-upload"><img src={postIcon} className="navBar_icons navBar_postIcon" alt="Post Icon" height="23px"></img></label>
                                <input id="file-upload" type="file" onChange={this.uploadImage} />
                            </div>
                            <img src={find} className="navBar_icons" alt="Find Icon"></img>
                            <img src={react} className="navBar_icons" alt="Heart Icon"></img>
                            <Avatar className="navBar_iconsAvatar"
                                alt="Remy Sharp"
                                src={this.state.profileImage}
                                sx={{ width: 20, height: 20 }}
                                onClick={this.handleClick}
                            />
                            <Popover
                                id={id}
                                open={open}
                                anchorEl={this.state.anchorEl}
                                onClose={this.handleClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                className="navbar_popover"

                            >
                                <div className="navBar_addProfileImage">
                                    <label htmlFor="profile-upload"><Typography className="navbar_popoverTypography">Add profile image</Typography></label>
                                    <input id="profile-upload" type="file" onChange={this.uploadProfileImage} />
                                </div>

                                <Typography className="navbar_popoverTypography" onClick={this.signOut}>Logout</Typography>
                            </Popover>
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                    </Grid>
                </div>
                <div className="navBar_progress">
                    {this.state.progress !== 0 && this.state.progress !== 100 && <LinearProgress className="statusBar_progress" variant="determinate" value={this.state.progress} />}
                </div>

                {this.state.displayAlert && <AlertMessage message = {errorMsg}/>}
            </>
        );
    }
}

export default NavBar;