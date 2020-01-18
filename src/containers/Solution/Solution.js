import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Solution.module.css';
import Header from '../../components/Header/Header';
import GetData from '../../components/GetData/GetData';

// import ThreeAnim from '../../components/ThreeAnim/ThreeAnim';


class Solution extends Component{

    constructor(props) {
        super(props);

       this.state=this.props.hehe

    }
    componentWillMount(){
        
        console.log(this.props.hehe);

    }

    componentDidMount(){
console.log(this.state);

    }
    render() {

        // //         return (
        //     const Solution = props =>{
        //         console.log(props);

        return (
            <div >
                <Header />
                <div className={classes.bodydiv}>
                    <Link to="/" ><p className={classes.goback}>gd</p></Link>
                    {/* <div className={classes.divider}>
                    <div className={classes.div1}> */}
                    <div>Solution</div>
                    <table className={classes.Table}>
                        {/* <thead>
                            <th>Interceptor ID</th>
                            <th>X-coord of Collision Point</th>
                            <th>Y-coord of Collision Point</th>
                            <th>Z-coord of Collision Point</th>
                            <th>Expected Velocity</th>
                            <th>Expected Θ</th>
                            <th>Expected Φ</th>
                            <th>Interceptor ID</th>

                        </thead> */}

                    </table>
                    <a href="/sim" target="_blank"><button >Simulate</button></a>


                </div>
            </div>


        );
    }
}
export default Solution;