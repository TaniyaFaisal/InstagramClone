import React, { Component } from 'react'
import '../../styles/loginPage.css';
import fb from '../../images/fb.png';
import {auth} from '../firebase.js';
import {createUserWithEmailAndPassword } from "firebase/auth";
import AlertMessage from '../AlertMessage.js';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId : null,
            name: null,
            username: null,
            password: null,
            errorMessage: "",
            displayAlert: false,
        };
    }

    signUp = (e) => {
        e.preventDefault();
        const thisContext = this;
        thisContext.setState({displayAlert: false});
        createUserWithEmailAndPassword(auth, this.state.emailId, this.state.password)
        .then((userCredential) => {
            const user = userCredential.user;
            let payload = {
                "userId": user.uid,
                "userName":this.state.username,
                "name":this.state.name,
                "profileImage":"www.google.com"
            }

            const requestOptions = {
                method : "POST",
                headers: {'Content-Type': 'application/json'},
                body : JSON.stringify(payload), 
            }

            fetch("http://localhost:8081/api/v1/users/",requestOptions)
            .then(response => response.json())
            .then(data =>{
                localStorage.setItem("users", JSON.stringify(user));
                window.location.reload();
            })
            .catch(error =>{
                thisContext.setState({ errorMessage: "An error occured. Please try again!"});
                thisContext.setState({displayAlert: true});
            })
        })
        .catch((error) => {
            thisContext.setState({ errorMessage: "An error occured. Please try again!"});
            thisContext.setState({displayAlert: true});
        });
    }

    render() {
        let errorMsg = this.state.errorMessage.toString();

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
                <form onSubmit={this.signUp}>
                    <input className="loginPage_textBox" type="text" placeholder="Email" 
                            onChange={(event)=>{this.setState({emailId:event.currentTarget.value});}} required 
                            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"/>
                    <input className="loginPage_textBox" type="text" placeholder="Full Name"
                            onChange={(event)=>{this.setState({name:event.currentTarget.value});}} required/>
                    <input className="loginPage_textBox" type="text" placeholder="Username"
                            onChange={(event)=>{this.setState({username:event.currentTarget.value});}} required/>
                    <input className="loginPage_textBox" type="password" placeholder="Password (min length 6)"
                            onChange={(event)=>{this.setState({password:event.currentTarget.value});}} required minLength="6"/>
                            <br/>
                    <button className="loginPage_button">Sign Up</button>
                </form>
                <div className="loginPage_signUpPolicyText">By signing up, you agree to our Terms, Data Policy <br/> and Cookie Policy.</div>

                {this.state.displayAlert && <AlertMessage message = {errorMsg}/>}
            </>
        );
    }
}

export default SignUp;