import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import StatusBar from './statusBar';
import Posts from './posts';
import InfoSection from './infoSection';
import Suggestions from './suggestions';

class MainComp extends Component{
    constructor(props) {
        super(props);
        this.state = {
            postList : []
        };
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        const thisContext = this;
        fetch("http://localhost:8081/api/v1/post/")
            .then(response => response.json())
            .then(data =>{
                thisContext.setState({postList:data});
            })
            .catch(error =>{

            });
    }

    render(){
        return(
            <>
                <div>
                    <Grid container >
                        <Grid item xs={2}></Grid>
                        <Grid item xs={5} className="main_statusPost">
                            <StatusBar/>
                            {
                                this.state.postList.map((item, index) => (
                                    // <        id={item.id} username={item.username} profileImg={item.profileImg}
                                    // postImg={item.postImg} likes={item.likes}/>
                                    <Posts id={item.postID} username={item.username} userImage={item.userImage}
                                    postImg={item.postPath} likes={item.likeCount}/>
                                ))
                            }
                        </Grid>
                        <Grid item xs={3}  >
                            <div className="main_infoSuggest" id="suggestInfo">
                                <InfoSection/>
                                <Suggestions/>
                            </div>
                        </Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </div>
            </>
        );
    }
}

export default MainComp;