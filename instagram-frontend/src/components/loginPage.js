import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import inst_image from '../images/9364675fb26a.svg';
import inst_logo from '../images/logoinsta.png';
import fb from '../images/fb.png';
import appstore from '../images/app.png';
import playstore from '../images/play.png';
import '../styles/loginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div    >
                <Grid container>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={6}>
                        <div className="loginPage_main">
                            <div>
                               <img src={inst_image} width="454px" />
                           </div>
                            <div>
                                <div className="loginPage_rightComp">
                                    <img src={inst_logo} className="loginPage_logo"></img>
                                    <div className="loginPage_signin">
                                        <input className="loginPage_textBox" type="text" placeholder="Phone number, username, or email" />
                                        <input className="loginPage_textBox" type="password" placeholder="Password" />
                                        <button className="loginPage_button">Log In</button>

                                        <div className="loginPage_Ordivider">
                                            <div className="loginPage_divider"></div>
                                            <div className="loginPage_or">OR</div>
                                            <div className="loginPage_divider"></div>
                                        </div>

                                        <div className="loginPage_fb">
                                            <img src={fb} className="loginPage_fbLogo"></img>
                                            Log In with Facebook</div>
                                        <div className="loginPage_forgotPwd">Forgot password?</div>
                                    </div>

                                </div>
                                <div className="loginpage__signupoption">
                                    <div className="loginPage__signin">
                                        Don't have an account? <span className="loginPage_span">Sign up</span>
                                    </div>
                                    {/* <div className="loginPage__signup">
                                        Have an account? <span className="loginPage_span">Sign in</span>
                                    </div> */}
                                </div>

                                <div className="loginPage__downloadSection">
                                    <div>
                                        Get the app.
                                        </div>
                                    <div className="loginPage__option">
                                        <img className="loginPage_dwimg" src={appstore} width="136px" />
                                        <img className="loginPage_dwimg" src={playstore} width="136px" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="loginPage_bottomComp">
                            <div className="loginPage_links">
                                <a href="https://about.facebook.com/meta">Meta</a>
                                <a href="https://about.instagram.com/">About</a>
                                <a href="https://about.instagram.com/blog/">Blog</a>
                                <a href="https://www.instagram.com/about/jobs/">Jobs</a>
                                <a href="https://help.instagram.com/">Help</a>
                                <a href="https://developers.facebook.com/docs/instagram">API</a>
                                <a href="https://www.instagram.com/legal/privacy/">Privacy</a>
                                <a href="https://www.instagram.com/legal/terms/">Terms</a>
                                <a href="https://www.instagram.com/directory/profiles/">Top accounts</a>
                                <a href="https://www.instagram.com/directory/hashtags/">Hashtags</a>
                                <a href="https://www.instagram.com/explore/locations/">Locations</a>
                                <a href="https://www.instagram.com/web/lite/">Instagram Lite</a>
                            </div>
                            <div className="loginPage_links">
                                <a href="https://www.instagram.com/topics/beauty/">Beauty</a>
                                <a href="https://www.instagram.com/topics/dance-and-performance/">Dance</a>
                                <a href="https://www.instagram.com/topics/fitness/">Fitness</a>
                                <a href="https://www.instagram.com/topics/food-and-drink/">Food & Drink</a>
                                <a href="https://www.instagram.com/topics/home-and-garden/">Home & Garden</a>
                                <a href="https://www.instagram.com/topics/home-and-garden/">Music</a>
                                <a href="https://www.instagram.com/topics/visual-arts/">Visual Arts</a>
                            </div>
                            <div className="loginPage_copyright">
                                English (UK) &nbsp;&nbsp;&nbsp;&nbsp; © 2021 Instagram from Meta || Clone by Taniya Faisal                                 
                            </div>
                        </div>
                        
                    </Grid>
                    <Grid item xs={3}></Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;