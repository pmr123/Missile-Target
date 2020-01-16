import React, { Component } from 'react';
import classes from './GetData.module.css';
import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import FormM from '../../components/FormM/FormM';
import FormI from '../../components/FormI/FormI';
import Header from '../../components/Header/Header';

class GetData extends Component {


    state = {
        missiles: 0,
        missArray: [],
        mval: [

        ],
        ival: [

        ]
    };
    addformhandler = (e) => {
        this.setState({ missiles: (this.state.missiles += 1) });
        let str = [], buf = [];
        for (var i = 0; i < this.state.missiles; i++) {
            str.push(
                <FormM key={i + 1} kkk={i + 1} />
            );
            this.setState({ missArray: str });
        }
        e.preventDefault();
    }
    submitted1 = (e) => {
        let inpels = ReactDOM.findDOMNode(this), i = 1, s = {};
        inpels = inpels.querySelectorAll('#first input');
        Array.prototype.map.call(inpels, inp => {
            switch (i % 5) {
                case 0: s['V'] = inp.value;
                        this.state.mval.push(s);
                        console.log(this.state);
                        s = {};
                        break;
                case 1: s['path'] = inp.value;
                        break;
                case 2: s['x'] = inp.value;
                        break;
                case 3: s['y'] = inp.value;
                        break;
                case 4: s['z'] = inp.value;
                        break;
            }
            i += 1;
        })
        e.preventDefault();
    }
    submitted2 = (e) => {
        let inpels = ReactDOM.findDOMNode(this), i = 1, s = {};
        inpels = inpels.querySelectorAll('#first input');
        Array.prototype.map.call(inpels, inp => {
            switch (i % 3) {
                case 0: s['V'] = inp.value;
                        s['z']=0;
                        this.state.ival.push(s);
                        console.log(this.state);
                        s = {};
                        break;
                case 1: s['x'] = inp.value;
                        break;
                case 2: s['y'] = inp.value;
                        break;
            }
            i += 1;
        });
        e.preventDefault();
    }
    handleChange = () => {
        // console.log(3);
    }
    submitForms = (e) => {
        let temp = ReactDOM.findDOMNode(this);
        temp.querySelector("#b1").click();
        temp.querySelector("#b2").click();
        e.preventDefault();
    }
    hello = (e) =>{
        console.log('hello');
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <Header />
                <div className={classes.InputDiv}>
                    <h4>Ballistic Missiles Targets</h4>
                    <form onSubmit={this.submitted1} id="missile">
                        <FormM key={0} kkk={0} handleChange={this.handleChange} />
                        {this.state.missArray}
                        <button onClick={this.addformhandler}>Add Missile</button>
                        <button type="submit" id="b1" className={classes.SubmitButton}></button>
                    </form>
                    <h4>Anti-Ballistic Missile Interceptors</h4>
                    <form onSubmit={this.submitted2} id="interceptor">
                        <FormI key={0} kkk={0} handleChange={this.handleChange} />
                        {this.state.missArray}
                        <button onClick={this.addformhandler}>Add Interceptor</button>
                        <button type="submit" id="b2" className={classes.SubmitButton}></button>
                    </form>
                    <hr></hr>
                    <form id="sec" className={classes.sec}>
                        <h5>Or upload a CSV/JSON file in the following format: (...)</h5>
                        <label>
                            Missile Data JSON
                            <br></br><input type="file" className={classes.FileInp}/><br></br>
                        </label>
                        <label>
                            Interceptor Data JSON
                           <br></br> <input type="file" className={classes.FileInp}/><br></br>
                        </label>
                        <button type="submit" onClick={this.submitForms}>Analyze</button>
                    </form>
                </div>
            </div>
        )
    }
}
export default GetData;