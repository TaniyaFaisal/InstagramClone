import React, { Component } from 'react'
import '../../styles/loginPage.css';
import fb from '../../images/fb.png';
import {auth} from '../firebase.js';
import {signInWithEmailAndPassword } from "firebase/auth";
import AlertMessage from '../AlertMessage.js';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: null,
            password: null,
            errorMessage: "",
            displayAlert: false,
        };
    }

    signIn = (e) => {
        e.preventDefault();
        const thisContext = this;
        thisContext.setState({displayAlert: false});
        signInWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
            const user = userCredential.user;
            localStorage.setItem("users", JSON.stringify(user));
            window.location.reload();
            
        })
        .catch((error) => {
            thisContext.setState({ errorMessage: "Invalid username / password. Please try again!"});
            thisContext.setState({displayAlert: true});
        });
    }

    render() {

        let errorMsg = this.state.errorMessage.toString();
        return (
            <>
                <form  onSubmit={this.signIn}>
                <input className="loginPage_textBox" type="text" placeholder="Phone number, username, or email" 
                        onChange={(event)=>{this.setState({emailId:event.currentTarget.value});}} required/>
                <input className="loginPage_textBox" type="password" placeholder="Password" 
                        onChange={(event)=>{this.setState({password:event.currentTarget.value});}} required/>
                        <br/>
                <button className="loginPage_button">Log In</button>
                </form>

                <div className="loginPage_Ordivider">
                    <div className="loginPage_divider"></div>
                    <div className="loginPage_or">OR</div>
                    <div className="loginPage_divider"></div>
                </div>

                <div className="loginPage_fb">
                    <img src={fb} alt="Facebook logo" className="loginPage_fbLogo"></img>
                    Log In with Facebook</div>
                <div className="loginPage_forgotPwd">Forgot password?</div>
                
                {this.state.displayAlert && <AlertMessage message = {errorMsg}/>}
                
            </>
        );
    }
}

export default SignIn;