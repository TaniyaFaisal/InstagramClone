import React, { Component } from 'react';
import '../../styles/posts.css';
import Avatar from '@material-ui/core/Avatar';
import heart from '../../images/love.svg';
import comment from '../../images/comment.svg';
import share from '../../images/share.svg';
import save from '../../images/save.svg';
class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            commentList:[]
        };
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        let data = [
            {
                "username":"taniya.faisal",
                "commentID":"111",
                "timestamp":"12/10/2021",
                "description":"Test Comment"
            },
            {
                "username":"taniya_faisal",
                "commentID":"111",
                "timestamp":"12/10/2021",
                "description":"Test Comment"
            },
            {
                "username":"taniya._.faisal",
                "commentID":"111",
                "timestamp":"12/10/2021",
                "description":"Test Comment"
            },
        ]
        this.setState({commentList:data});

    }

    render(){
        return(
            <>
                <div className="posts_container">
                    <div className="posts_header">
                        <Avatar src={this.props.profileImg} className="posts_profileImg"/>
                        <div className="posts_profileName">{this.props.username}</div>
                    </div>
                    <div>
                        <img src={this.props.postImg} alt="Post" width="615px" height="600px"/>
                    </div>
                    <div>
                        <div style={{"marginLeft" : "5px"}}>
                            <img src={heart} alt="Heart" className="posts_react"/>
                            <img src={comment} alt="Comment" className="posts_react"/>
                            <img src={share} alt="Share" className="posts_react"/>
                            <img src={save} alt="Share" className="posts_react" style={{"float":"right"}}/>
                        </div>
                        <div className="posts_likes">
                            {this.props.likes} likes
                        </div>
                    </div>
                    <div>
                        {
                            this.state.commentList.map((item, index) => (
                                <div className="posts_comment">
                                    <b>{item.username}</b>:{item.description}
                                </div>
                            ))
                        }
                        <input type="text" className="posts_addComment" placeholder="Add a comment..."></input>
                    </div>
                </div>
                
            </>
        );
    }
}

export default Posts;