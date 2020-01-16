import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Solution.module.css';
import Header from '../../components/Header/Header';
import ThreeAnim from '../../components/ThreeAnim/ThreeAnim';

class Solution extends Component {
    render() {
        return (
            <div>
                <Header />
                <Link to="/" ><p className={classes.goback}>GetData</p></Link>
                {/* <div className={classes.divider}>
                    <div className={classes.div1}> */}
                <div>Solution</div>

                    <ThreeAnim  />
                    {/* </div>

                //  <a href="/sim" target="_blank"><button>Simulate!</button></a> 
                </div> */}
            </div>
        )
    }
}
export default Solution;