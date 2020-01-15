import React, {Component} from 'react';
import classes from './GetData.module.css';
import {Link} from 'react-router-dom';

class GetData extends Component{
    render(){
        return(
            <div className={classes.InputDiv}>
                This is Getdata
                <Link style={} to="/sol">Solution</Link>
            </div>
        )
    }
}

export default GetData;