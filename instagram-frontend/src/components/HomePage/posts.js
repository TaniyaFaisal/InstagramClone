import React, { Component } from 'react';
import '../../styles/posts.css';
import Avatar from '@material-ui/core/Avatar';
import heart from '../../images/love.svg';
import comment from '../../images/comment.svg';
import share from '../../images/share.svg';
import save from '../../images/save.svg';
import AlertMessage from '../AlertMessage.js';

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state = {
            commentList:[],
            errorMessage: "",
            displayAlert: false,
        };
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        const thisContext = this;
        fetch("http://localhost:8081/api/v1/comment/"+this.props.id)
            .then(response => response.json())
            .then(data =>{
                thisContext.setState({commentList:data});
            })
            .catch(error =>{
                console.log("Error fetching comments " +error);
            });
    }

    submitComment = (event) => {
        const thisContext = this;
        thisContext.setState({displayAlert: false});
        if(event.key === "Enter"){
            let comment = event.currentTarget.value;
            if(comment != null || comment !== undefined){
                document.getElementById('commentBox').value = "";
                let payload = {
                    "commentID":this.props.id+Math.floor(Math.random()*1000).toString(),
                    "userId":JSON.parse(localStorage.getItem("users")).uid,
                    "postId":this.props.id,
                    "timestamp":new Date().getTime(),
                    "comment":comment
                }

                
                const requestOptions = {
                    method : "POST",
                    headers: {'Content-Type': 'application/json'},
                    body : JSON.stringify(payload), 
                }
    
                fetch("http://localhost:8081/api/v1/comment/",requestOptions)
                .then(response => response.json())
                .then(data =>{
                    this.getData();
                })
                .catch(error =>{
                    thisContext.setState({ errorMessage: "An error occured. Please try again!"});
                    thisContext.setState({displayAlert: true});
                })
            }
        }
    }

    render(){
        let errorMsg = this.state.errorMessage.toString();
        return(
            <>
                <div className="posts_container">
                    <div className="posts_header">
                        <Avatar src={this.props.userImage} className="posts_profileImg"/>
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
                                    <b>{item.username}</b>:{item.comment}
                                </div>
                            ))
                        }
                        <input type="text" onKeyPress={this.submitComment} className="posts_addComment" placeholder="Add a comment..." id="commentBox"></input>
                    </div>
                </div>
                {this.state.displayAlert && <AlertMessage message = {errorMsg}/>}
            </>
        );
    }
}

export default Posts;