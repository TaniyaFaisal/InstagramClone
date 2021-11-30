import React, { Component } from 'react'
import '../../styles/loginPage.css';
import fb from '../../images/fb.png';
import {storage, auth} from '../firebase.js';
import {createUserWithEmailAndPassword } from "firebase/auth";
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId : null,
            name: null,
            username: null,
            password: null
        };
    }

    signUp = () => {
        createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
    }

    render() {
        return (
            <>
                <div className="loginPage_signUpText">Sign up to see photos and videos <br/> from your friends.</div>
                <div className="loginPage_fb">
                    <button className="loginPage_button">
                        <img src={fb} alt="Facebook logo" className="loginPage_fbLogo"></img>
                        Log In with Facebook
                    </button>
                </div>

                <div className="loginPage_Ordivider">
                    <div className="loginPage_divider"></div>
                    <div className="loginPage_or">OR</div>
                    <div className="loginPage_divider"></div>
                </div>

                <input className="loginPage_textBox" type="text" placeholder="Mobile Number or Email" 
                        onChange={(event)=>{this.setState({emailId:event.currentTarget.value});}}/>
                <input className="loginPage_textBox" type="text" placeholder="Full Name"
                        onChange={(event)=>{this.setState({name:event.currentTarget.value});}}/>
                <input className="loginPage_textBox" type="text" placeholder="Username"
                        onChange={(event)=>{this.setState({username:event.currentTarget.value});}}/>
                <input className="loginPage_textBox" type="password" placeholder="Password"
                        onChange={(event)=>{this.setState({password:event.currentTarget.value});}}/>
                <button className="loginPage_button" onClick={this.signUp}>Sign Up</button>

                <div className="loginPage_signUpPolicyText">By signing up, you agree to our Terms, Data Policy <br/> and Cookie Policy.</div>
            </>
        );
    }
}

export default SignUp;