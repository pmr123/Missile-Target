import React, { Component } from 'react';
import classes from './GetData.module.css';
import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import FormM from '../FormM/FormM';
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
        let inpels = ReactDOM.findDOMNode(this), i = 1, s= {};
        inpels = inpels.querySelectorAll('#first input');
        Array.prototype.map.call(inpels, inp => {
            switch(i%5){
                case 0: s['V']=inp.value;
                        this.state.mval.push(s);
                        console.log(this.state);
                        s={};
                        break;
                case 1: s['path']= inp.value;                 
                        break;
                case 2: s['x']=inp.value;
                        break;
                case 3: s['y']=inp.value;
                        break;
                case 4: s['z']=inp.value;                        
                        break;
            }
            i+=1;
        })
        e.preventDefault();
    }

    submitted2 = (e) => {
        let inpels = ReactDOM.findDOMNode(this), i = 1, s= {};
        inpels = inpels.querySelectorAll('#first input');
        Array.prototype.map.call(inpels, inp => {
            switch(i%5){
                case 0: s['V']=inp.value;
                        this.state.ival.push(s);
                        console.log(this.state);
                        s={};
                        break;
                case 1: s['x']= inp.value;                 
                        break;
                case 2: s['y']=inp.value;
                        break;
               
            }
            i+=1;
        });
        e.preventDefault();
    }

    handleChange = () => {
        // console.log(3);
    }

    submitForms = () =>{
        let temp = ReactDOM.findDOMNode(this);
        temp.getElementById("missile").submit();
        temp.getElementById("interceptor").submit();
    }

    render() {
        return (
            <div>
                <Header />
                <div className={classes.InputDiv}>
                    <h4>This is Getdata</h4>
                    <form onSubmit={this.submitted1} id="missile">
                        <FormM key={0} kkk={0} handleChange={this.handleChange} />
                        {this.state.missArray}
                        <button onClick={this.addformhandler}>Add Form group</button>
                        <hr></hr>
                        <h5>Or upload a CSV file in the following format: (...)</h5>
                        <button type="submit">Start</button>
                    </form>
                    <form onSubmit={this.submitted2} id="interceptor">
                        <FormM key={0} kkk={0} handleChange={this.handleChange} />
                        {this.state.missArray}
                        <button onClick={this.addformhandler}>Add Form group</button>
                        <hr></hr>
                        <h5>Or upload a CSV file in the following format: (...)</h5>
                        <button type="submit" onClick="submitForms();">Start</button>
                    </form>
                    <form id="sec">
                        <input type="file" /><br></br>
                        <input type="file" /><br></br>
                    </form>
                </div>
            </div>
        )
    }
}
export default GetData;