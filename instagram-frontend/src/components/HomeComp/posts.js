import React, { Component } from 'react';
import '../../styles/mainComp.css';
import Avatar from '@material-ui/core/Avatar';
import post from '../../images/post.jpg';
import heart from '../../images/love.svg';
import comment from '../../images/comment.svg';
import share from '../../images/share.svg';
import save from '../../images/save.svg';
class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <>
                <div className="posts_container">
                    <div className="posts_header">
                        <Avatar src="" className="posts_profileImg"/>
                        <div className="posts_profileName">Username</div>
                    </div>
                    <div>
                        <img src={post} alt="Post" width="600px" height="600px"/>
                    </div>
                    <div>
                        <div style={{"marginLeft" : "5px"}}>
                            <img src={heart} alt="Heart" className="posts_react"/>
                            <img src={comment} alt="Comment" className="posts_react"/>
                            <img src={share} alt="Share" className="posts_react"/>
                        </div>
                        <div className="posts_likes">
                            123 likes
                        </div>
                    </div>
                    <div>
                        <div className="posts_comment">Comment1</div>
                        <div className="posts_comment">Comment2</div>
                        <div className="posts_comment">Comment3</div>
                        <div className="posts_comment">Comment4</div>
                        <input type="text" className="posts_addComment" placeholder="Add a comment..."></input>
                    </div>
                </div>
                
            </>
        );
    }
}

export default Posts;