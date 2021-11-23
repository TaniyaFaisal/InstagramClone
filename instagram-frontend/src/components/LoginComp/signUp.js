import React, { Component } from 'react'
import '../../styles/loginPage.css';
import fb from '../../images/fb.png';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
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

                <input className="loginPage_textBox" type="text" placeholder="Mobile Number or Email" />
                <input className="loginPage_textBox" type="text" placeholder="Full Name" />
                <input className="loginPage_textBox" type="text" placeholder="Username" />
                <input className="loginPage_textBox" type="password" placeholder="Password" />
                <button className="loginPage_button">Sign Up</button>

                <div className="loginPage_signUpPolicyText">By signing up, you agree to our Terms, Data Policy <br/> and Cookie Policy.</div>
            </>
        );
    }
}

export default SignUp;