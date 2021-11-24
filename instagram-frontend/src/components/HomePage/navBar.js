import { Grid } from '@material-ui/core';
import React, { Component } from 'react'
import '../../styles/navbar.css';
import inst_logo from '../../images/logoinsta.png';
import home from '../../images/home.svg';
import message from '../../images/message.svg';
import postIcon from '../../images/add.svg';
import pp1 from '../../images/pp2.png';
import find from '../../images/find.svg';
import react from '../../images/love.svg';  
import Avatar from '@material-ui/core/Avatar';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

class NavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <>
                <div className="navbar_barComp">
                    <Grid container>
                        <Grid item xs={2}>

                        </Grid>
                        <Grid item xs={3}>
                            <img src={inst_logo} className="navBar_instLogo"></img>
                        </Grid>
                        <Grid item xs={3}>
                            <input type="text" className="navBar_search" placeholder="Search"></input>
                        </Grid>
                        <Grid item xs={3} className="navBar_iconsGrp">
                            <img src={home} className="navBar_icons"></img>
                            <img src={message} className="navBar_icons"></img>
                            <img src={postIcon} className="navBar_icons" height="23px"></img>
                            <img src={find} className="navBar_icons"></img>
                            <img src={react} className="navBar_icons"></img>
                            <Avatar className="navBar_iconsAvatar"
                                alt="Remy Sharp"
                                src={pp1}
                                sx={{ width: 20, height: 20 }}
                            />
                        </Grid>
                        <Grid item xs={1}>

                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }
}

export default NavBar;