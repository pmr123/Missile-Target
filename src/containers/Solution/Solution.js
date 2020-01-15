import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import classes from './Solution.module.css';
import ThreeAnim from '../../components/ThreeAnim/ThreeAnim';
import Header from '../../components/Header/Header';


class Solution extends Component{
    render(){
        return(            
            <div>
                 <Header />

                <Link to="/" ><p className={classes.goback}>GetData</p></Link>
                    <p>Solution</p>
                     <a  href="/sim" target="_blank">text</a> 

                {/* <ThreeAnim /> */}
            </div>          
        )
    }    
}
export default Solution;