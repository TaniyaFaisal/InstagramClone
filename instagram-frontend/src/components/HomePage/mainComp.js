import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import StatusBar from './statusBar';
import Posts from './posts';
import InfoSection from './infoSection';
import Suggestions from './suggestions';

class MainComp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            postList: [],
        };
    }

    componentDidMount() {
        this.getCustomData()
        this.getData()

    }

    getCustomData = () => {
        const thisContext = this;
        fetch("http://localhost:8081/api/v1/post/dlP8Z7PEBmTrJgeeTbcPSYMJ3an1")
            .then(response => response.json())
            .then(data => {
                thisContext.setState({ postList: data });
            })
            .catch(error => {
                console.log(error);
            });
    }

    getData = () => {
        const thisContext = this;
        const uid = JSON.parse(localStorage.getItem("users")).uid;
        const uemail = JSON.parse(localStorage.getItem("users")).email;
        (uemail === "admin@gmail.com") ?
            fetch("http://localhost:8081/api/v1/post/")
                .then(response => response.json())
                .then(data => {
                    thisContext.setState({ postList: data });
                })
                .catch(error => {
                    console.log(error);
                })
            :
            fetch("http://localhost:8081/api/v1/post/" + uid)
                .then(response => response.json())
                .then(data => {
                    thisContext.setState({ postList: [...data, ...this.state.postList] });
                })
                .catch(error => {
                    console.log(error);
                });

    }

    render() {
        return (
            <>
                <div>
                    <Grid container >
                        <Grid item xs={2} id="main_hideComp1"></Grid>
                        <Grid item xs={5} id="main_statusPost">
                            <StatusBar />
                            {
                                this.state.postList.map((item) => (
                                    <Posts key = {item.id} id={item.postID} username={item.username} userImage={item.userImage}
                                        postImg={item.postPath} likes={item.likeCount} />
                                ))
                            }
                        </Grid>
                        <Grid item xs={3}  >
                            <div className="main_infoSuggest" id="suggestInfo">
                                <InfoSection />
                                <Suggestions />
                            </div>
                        </Grid>
                        <Grid item xs={2}id="main_hideComp2"></Grid>
                    </Grid>
                </div>
            </>
        );
    }
}

export default MainComp;