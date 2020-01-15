import React, {Component} from 'react';
import classes from './GetData.module.css';
import {Link} from 'react-router-dom';

class GetData extends Component{
    render(){
        return(
            <div className={classes.InputDiv}>
                <h4>This is Getdata</h4>
                <form>
                    
                </form>
                <Link to="/sol">
                    <button>Start</button>
                </Link>
            </div>
        )
    }
}

export default GetData;