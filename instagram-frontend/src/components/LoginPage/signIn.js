import React, { Component } from 'react'
import '../../styles/loginPage.css';
import fb from '../../images/fb.png';
import {auth} from '../firebase.js';
import {signInWithEmailAndPassword } from "firebase/auth";


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            password: null
        };
    }

    signIn = () => {
        signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("users", JSON.stringify(user));
            window.location.reload();
            
        })
        .catch((error) => {
            console.log("Error signing in " +error.code +" " +error.messsage);
        });
    }

    render() {
        return (
            <>
                <input className="loginPage_textBox" type="text" placeholder="Phone number, username, or email" 
                        onChange={(event)=>{this.setState({emailId:event.currentTarget.value});}}/>
                <input className="loginPage_textBox" type="password" placeholder="Password" 
                        onChange={(event)=>{this.setState({password:event.currentTarget.value});}}/>
                <button className="loginPage_button" onClick={this.signIn}>Log In</button>

                <div className="loginPage_Ordivider">
                    <div className="loginPage_divider"></div>
                    <div className="loginPage_or">OR</div>
                    <div className="loginPage_divider"></div>
                </div>

                <div className="loginPage_fb">
                    <img src={fb} alt="Facebook logo" className="loginPage_fbLogo"></img>
                    Log In with Facebook</div>
                <div className="loginPage_forgotPwd">Forgot password?</div>
            </>
        );
    }
}

export default SignIn;