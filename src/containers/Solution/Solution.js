import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classes from './Solution.module.css';
import ThreeAnim from '../../components/ThreeAnim/ThreeAnim';


class Solution extends Component{
    render(){
        return(            
            <div>
                <Link to="/" ><p className={classes.goback}>GetData</p></Link>
                    <p>Solution</p>
                <ThreeAnim />
            </div>          
        )
    }    
}
export default Solution;