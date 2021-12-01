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
        // let data = [
        //     {
        //         "id":"1",
        //         "username":"taniya.faisal",
        //         "timestamp":"22/10/2021",
        //         "likes":"123",
        //         "postImg":"https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ",
        //         "profileImg":"https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY"
        //     },
        //     {
        //         "id":"2",
        //         "username":"taniya_faisal",
        //         "timestamp":"22/10/2021",
        //         "likes":"321",
        //         "postImg":"https://i.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
        //         "profileImg":"https://i.picsum.photos/id/1006/3000/2000.jpg?hmac=x83pQQ7LW1UTo8HxBcIWuRIVeN_uCg0cG6keXvNvM8g"
        //     },
        // ]
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
                                    <Posts id={item.id} username={item.username}
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