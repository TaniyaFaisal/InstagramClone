import React, { Component } from 'react'
import '../../styles/loginPage.css';
import fb from '../../images/fb.png';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <>
                <input className="loginPage_textBox" type="text" placeholder="Phone number, username, or email" />
                <input className="loginPage_textBox" type="password" placeholder="Password" />
                <button className="loginPage_button">Log In</button>

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