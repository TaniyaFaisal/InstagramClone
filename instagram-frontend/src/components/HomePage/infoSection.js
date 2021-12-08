import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import profileImg from '../../images/Photo_TaniyaFaisal.jpg';
import '../../styles/mainComp.css';

class InfoSection extends Component{
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
                <div className="info_container">
                    <Avatar src={profileImg} className="info_profileImg"></Avatar>
                    <div>
                        <div className="info_username">Taniya Faisal</div>
                        <div className="info_desc">Instagram Clone</div>
                    </div>
                </div>
            </>
        );
    }
}

export default InfoSection;
