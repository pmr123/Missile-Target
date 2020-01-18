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
                points = arr.dd[r];

                if (points.didcollide == false) {
                    console.log("if", points.didcollide);
                    onecell = (
                        <tr className={classes.row1}>
                            <td>{r}</td>
                            <td>N/A</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                            <td>-</td>
                        </tr>);
                }
                else {
                    console.log("else", points.didcollide);

                    // onecell = points.map((t) =>
                    // {
                    // console.log({t});
                    onecell = (
                        <tr className={classes.row1}>
                            <td>{r}</td>
                            <td>{points.interceptor}</td>
                            <td>{points.x}</td>
                            <td>{points.y}</td>
                            <td>{points.z}</td>
                            <td>{points.t}</td>
                            <td>{points.theta}</td>
                            <td>{points.phi}</td>
                        </tr>
                    )

                    //  return <td>{t}</td>;
                }
                // }

                console.log(onecell);
                var html
                return <tbody className={classes.body}>{onecell}</tbody>;
            });
            // console.log(onerow);
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
                        <thead className={classes.row1}>
                            <td>Missile ID</td>
                            <td>Interceptor ID</td>
                            <td>X-coord of Collision Point</td>
                            <td>Y-coord of Collision Point</td>
                            <td>Z-coord of Collision Point</td>
                            <td>Time until Collision</td>
                            <td>Required Θ</td>
                            <td>Required Φ</td>
                        </thead>
                        {onerow}
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