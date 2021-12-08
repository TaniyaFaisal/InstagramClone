import React, { Component } from 'react'
import github from '../../images/github.svg';
import insta from '../../images/instaLogo.png';
import linkedin from '../../images/linkedin.svg';
import Avatar from '@material-ui/core/Avatar';
import '../../styles/mainComp.css';

class Suggestions extends Component{
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }

    componentDidMount(){
        
    }

    render(){
        return(
            <>
                <div className="suggest_container">
                    <div className="suggest_header">
                        Suggestions For You
                    </div>
                    <div className="suggest_content">
                        <div className="suggest_contentProfile">
                            <Avatar src={github} className="suggest_contentImage"></Avatar>
                            <div>
                                <a href="https://github.com/TaniyaFaisal" className="suggest_contentUsername" target="_blank" rel="noreferrer">GitHub</a>    
                                <div className="suggest_contentDesc" >Followed by taniya.faisal + 63 more</div>
                            </div>
                        </div>
                        <div className="suggest_contentProfile">
                            <Avatar src={linkedin} className="suggest_contentImage"></Avatar>
                            <div>
                                <a href="https://www.linkedin.com/in/taniyafaisal/" className="suggest_contentUsername" target="_blank" rel="noreferrer">LinkedIn</a>     
                                <div className="suggest_contentDesc" >Followed by taniya.faisal + 63 more</div>
                            </div>
                        </div>
                        <div className="suggest_contentProfile">
                            <Avatar src={insta} className="suggest_contentImage"></Avatar>
                            <div>
                                <a href="https://www.instagram.com/taniyafaisal/" className="suggest_contentUsername" target="_blank" rel="noreferrer">Instagram</a>  
                                <div className="suggest_contentDesc" >Followed by taniya.faisal + 63 more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Suggestions;
