import React, { Component } from 'react'
import profileImg from '../../images/pp2.png';
import github from '../../images/github.svg';
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
                                <div className="suggest_contentUsername" >Username</div>    
                                <div className="suggest_contentDesc" >Followed by taniya.faisal + 63 more</div>
                            </div>
                        </div>
                        <div className="suggest_contentProfile">
                            <Avatar src={profileImg} className="suggest_contentImage"></Avatar>
                            <div className="suggest_contentUsername" >Username</div>
                        </div>
                        <div className="suggest_contentProfile">
                            <Avatar src={profileImg} className="suggest_contentImage"></Avatar>
                            <div className="suggest_contentUsername" >Username</div>
                        </div>
                        <div className="suggest_contentProfile">
                            <Avatar src={profileImg} className="suggest_contentImage"></Avatar>
                            <div className="suggest_contentUsername" >Username</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Suggestions;
