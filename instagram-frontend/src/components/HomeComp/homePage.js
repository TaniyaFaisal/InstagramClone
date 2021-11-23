import React, { Component } from 'react'
import NavBar from './navBar';
import MainComp from './mainComp';
import '../../styles/homePage.css';

class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render(){
        return(
            <>
                <NavBar></NavBar>
                <MainComp></MainComp>
            </>
        );
    }
}

export default HomePage;