import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Solution.module.css';
import Header from '../../components/Header/Header';
// import GetData from '../../components/GetData/GetData';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ThreeAnim from '../../components/ThreeAnim/ThreeAnim';


class Solution extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.dboy = {};

        //    this.state=this.props.hehe

    }


    componentDidMount() {
        // console.log(this.props.hehe);
        let missobj = this.props.hehe;
        this.setState({ hola: this.props.hehe });

        // console.log("forloop", missobj);
        let str = "";
        for (let i = 0; i < missobj.interceptors; i++) {
            // console.log(missobj.interArray[i]);
            str.concat(<tr>{missobj.interceptors}</tr>);
        }
        this.rows = str;
    }

    getRows = (e) => {
        // console.log(this.props.hehe.dd);

    }
    refrr = () => {
        document.location.reload();
    }
    render() {

        // //         return (
        //     const Solution = props =>{
        //         console.log(props);
        console.log(this.state.hola);
        if (this.props.hehe) {
            let arr = this.props.hehe;
            var points, onerow, onecell;
            var noofrows = Object.keys(arr.dd);
            onerow = noofrows.map((r) => {
                points = Object.values(arr.dd[r]);
                onecell = points.map((t) =>
                    {
                    console.log({t});
                    return <td>{t}</td>;
                });
                console.log(onecell);
                return <tr>{onecell}</tr>;
            });
            console.log(onerow);
        }
        return (
            <div >
                <Header />
                <div className={classes.bodydiv}>
                    <p className={classes.goback} onClick={this.refrr}>Go Back</p>
                    {/* <div className={classes.divider}>
                    <div className={classes.div1}> */}
                    <div>Solution</div>
                    <table className={classes.Table}>
                        <thead>
                            <td>Interceptor ID</td>
                            <td>X-coord of Collision Point</td>
                            <td>Y-coord of Collision Point</td>
                            <td>Z-coord of Collision Point</td>
                            <td>Expected Velocity</td>
                            <td>Expected Θ</td>
                            <td>Expected Φ</td>
                            <td>Interceptor ID</td>
                        </thead>
                        <tbody >{onerow}</tbody>
                    </table>
                </div>
                <ThreeAnim hehe={this.props.hehe} />
            </div >


        );
    }
}
export default Solution;

// var names = ['Jake', 'Jon', 'Thruster'];
// var namesList = names.map(function(name){
//                 return <li>{name}</li>;
//               })

// return  <ul>{ namesList }</ul>
// }