import { Avatar } from '@material-ui/core';
import React, { Component } from 'react';
import '../../styles/mainComp.css';
import statusImage from '../../images/pp2.png'

class StatusBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            statuslist : []
        };
    }

    componentDidMount(){
        this.getData();
    }

    getData = () => {
        let data = [
            {
                "username":"taniya.faisal",
                "imageURL":"../../images/pp2.png"
            },
            {
                "username":"taniya_faisal",
                "imageURL":"../../images/pp2.png"
            },
            {
                "username":"taniya._.faisal",
                "imageURL":"../../images/pp2.png"
            },
            {
                "username":"taniyafaisal",
                "imageURL":"../../images/pp2.png"
            },
            {
                "username":"taniya.faisal",
                "imageURL":"../../images/pp2.png"
            },
            {
                "username":"taniya_faisal",
                "imageURL":"../../images/pp2.png"
            },
            {
                "username":"taniya._.faisal",
                "imageURL":"../../images/pp2.png"
            },
            {
                "username":"taniyafaisal",
                "imageURL":"../../images/pp2.png"
            }
        ]
        this.setState({statuslist:data});
    }

    render(){
        return(
            <>
                <div className="statusBar_container">
                    {
                        this.state.statuslist.map((item, index) => (
                            <div className="statusBar_status">
                                <Avatar src={statusImage} alt="Status Icon" className="statusBar_statusIcon"></Avatar>
                                <div className="statusBar_statusText">{item.username}</div>
                            </div>
                        ))
                    }
                    
                </div>
            </>
        );
    }
}

export default StatusBar;