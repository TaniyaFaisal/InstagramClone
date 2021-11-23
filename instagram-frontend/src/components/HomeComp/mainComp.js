import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import '../../styles/homePage.css';
import StatusBar from './statusBar';
import Posts from './posts';

class MainComp extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <>
                <div>
                    <Grid container >
                        <Grid item xs={2}></Grid>
                        <Grid item xs={6}>
                            <StatusBar/>
                            <Posts/>
                            <Posts/>
                            <Posts/>
                            <Posts/>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={2}></Grid>
                    </Grid>
                </div>
            </>
        );
    }
}

export default MainComp;