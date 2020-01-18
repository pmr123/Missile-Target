import React, { Component } from 'react';
import classes from './GetData.module.css';
import ReactDOM from 'react-dom';
// import { Link } from 'react-router-dom';
import FormM from '../../components/FormM/FormM';
import FormI from '../../components/FormI/FormI';
import Header from '../../components/Header/Header';
import Solution from '../../containers/Solution/Solution';

class GetData extends Component {

    constructor(props) {
        super(props);
    }



    state = {
        missiles: 0,
        interceptors: 0,
        missArray: [],
        interArray: [],
        mval: [],
        ival: [], 
        answerArray: {}
    };


    componentWillUnmount(){
        this.findin(this.state.mval, this.state.ival, 0, 0);
        this.setState({answerArray: {...this.state}});
    }
    addformhandler = (e) => {
        var missiles = this.state.missiles + 1;
        // var interceptors = this.state.interceptors + 1;

        this.setState({ missiles });
        let str = [], buf = [];
        for (var i = 0; i < this.state.missiles; i++) {
            str.push(
                <FormM key={i + 1} kkk={i + 1} />
            );
        }
        // for (i = 0; i < this.state.interceptors; i++) {
        //     buf.push(
        //         <FormI key={i + 1} kkk={i + 1} />
        //     );
        // }
        this.setState({ missArray: str });
        e.preventDefault();
    }
    addformhandler2 = (e) => {
        var interceptors = this.state.interceptors + 1;
        this.setState({ interceptors });
        let buf = [];
        for (var i = 0; i < this.state.interceptors; i++) {
            buf.push(
                <FormI key={i + 1} kkk={i + 1} />
            )
            this.setState({ interArray: buf });

        }
        e.preventDefault();
    }

    submitted1 = (e) => {
        let inpels = ReactDOM.findDOMNode(this), i = 1, s = {};
        inpels = inpels.querySelectorAll('#missile input');
        Array.prototype.map.call(inpels, inp => {
            switch (i % 6) {
                case 0: s['p'] = inp.value;
                    this.state.mval.push(s);
                    // console.log(this.state);
                    s = {};
                    break;
                case 1: s['x'] = inp.value;
                    break;
                case 2: s['y'] = inp.value;
                    break;
                case 3: s['z'] = inp.value;
                    break;
                case 4: s['V'] = inp.value;
                    break;
                case 5: s['t'] = inp.value;
                    break;
                default: break;

            }
            i += 1;
        });
        inpels = ReactDOM.findDOMNode(this);
        i = 1; s = {};
        inpels = inpels.querySelectorAll('#interceptor input');
        Array.prototype.map.call(inpels, inp => {
            switch (i % 3) {
                case 0: s['V'] = inp.value;
                        s['z'] = 0;
                        this.state.ival.push(s);
                        // console.log(this.state);
                        s = {};
                    break;
                case 1: s['x'] = inp.value;
                    break;
                case 2: s['y'] = inp.value;
                    break;
                default: break;
            }
            i += 1;
        });
        this.props.history.push('/sol');

        // e.preventDefault();
    }
    csvUpload1(csvText) {
        //Split all the text into seperate lines on new lines and carriage return feeds
        var allTextLines = csvText.split(/\r\n|\n/);
        //Split per line on tabs and commas
        var headers = allTextLines[0].split(/\t|,/);
        var lines = [];
        var objs = [];  
        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(/\t|,/);
            if (data.length == headers.length) {
                var obj = { "x": data[0].trim(), "y": data[1].trim(),"z": data[2].trim(), "V": data[3].trim(),"t": data[4].trim(), "p": data[5].trim() };
                objs.push(obj);
            }
        }
        return JSON.stringify(objs);
    }
    csvUpload2(csvText) {
        //Split all the text into seperate lines on new lines and carriage return feeds
        var allTextLines = csvText.split(/\r\n|\n/);
        //Split per line on tabs and commas
        var headers = allTextLines[0].split(/\t|,/);
        var lines = [];
        var objs = [];
        for (var i = 1; i < allTextLines.length; i++) {
            var data = allTextLines[i].split(/\t|,/);
            if (data.length == headers.length) {
                var obj = { "x": data[0].trim(), "z": data[1].trim(), "V": data[0].trim() };
                objs.push(obj);
            }
        }
        return JSON.stringify(objs);
    }

    loadFile = (o) => {
        let csvupload1 = this.csvUpload1;
        var fr = new FileReader();
        var JSONn;
        let files = o.target.files;
        fr.readAsText(files[0]);
        fr.onload = function (e) {
            var res = e.target.result;
            JSONn = csvupload1(res);
            this.setState({mval: JSONn});
            return JSONn;
        }.bind(this);
    }
    loadFile2 = (o) => {
        let csvupload2 = this.csvUpload2;
        var fr = new FileReader();
        var JSONn;
        let files = o.target.files;
        fr.readAsText(files[0]);
        fr.onload = function (e) {
            var res = e.target.result;
            JSONn = csvupload2(res);
            // console.log(JSONn);
            this.setState({ival: JSONn});
            return JSONn;

        }.bind(this);
        
    }
    handleChange = () => {
    }

    // submitForms = (e) => {
    //     let temp = ReactDOM.findDOMNode(this);
    //     temp.querySelector("#b1").click();
    //     temp.querySelector("#b2").click();
    //     e.preventDefault();
    // }

    fileUpload = (e) => {
        let inpels = ReactDOM.findDOMNode(this);
        inpels = inpels.querySelectorAll('#sec label input');
        Array.prototype.map.call(inpels, inp => {
            this.loadFile(inp);
        });
        e.preventDefault();
    }


    calcol(mdata, ival, a, g) {
        //data of missile
        var  j, k;

        var vm = parseFloat(mdata["V"]);
        var qm = parseFloat(mdata["t"]);
        var fm = parseFloat(mdata["p"]);
        var xm = parseFloat(mdata["x"]);
        var ym = parseFloat(mdata["y"]);
        var zm = parseFloat(mdata["z"]);
        var out = {};
        for (j = 0; j < Object.keys(ival).length; j++) {
            //data of interceptor
            var vi = parseFloat(ival[j]["V"]);
            var xi = parseFloat(ival[j]["x"]);
            var yi = parseFloat(ival[j]["y"]);
            var zi = parseFloat(ival[j]["z"]);
            //Quadratic equation for t
            var ta = (vm * vm) + (g * g * a * a) - (g * vm * a * Math.sin(Math.PI * qm / 180)) - (vi * vi);
            var tb = (2 * a * vm * vm) + (2 * vm * (Math.cos(Math.PI * qm / 180) * (Math.cos(Math.PI * fm / 180) * (xm - xi) + Math.sin(Math.PI * fm / 180) * (zm - zi)) + Math.sin(Math.PI * qm / 180) * (ym - yi))) + (g * g * a * a * a) - (3 * g * vm * a * a * Math.sin(Math.PI * qm / 180)) - (2 * g * a * (ym - yi));
            var tc = (vm * vm * a * a) + (2 * vm * a * (Math.cos(Math.PI * qm / 180) * (Math.cos(Math.PI * fm / 180) * (xm - xi) + Math.sin(Math.PI * fm / 180) * (zm - zi)) + Math.sin(Math.PI * qm / 180) * (ym - yi))) + (xm - xi) * (xm - xi) + (ym - yi) * (ym - yi) + (zm - zi) * (zm - zi) + (g * g * a * a * a * a / 4) - (g * vm * a * a * a * Math.sin(Math.PI * qm / 180)) - (g * a * a * (ym - yi));
            var type = -1;
            if (ta != 0) {
                var d = tb * tb - 4 * ta * tc;
                var root1;
                var root2;
                if (d >= 0) {
                    root1 = (-tb + Math.sqrt(d)) / (2 * ta);
                    root2 = (-tb - Math.sqrt(d)) / (2 * ta);
                    if (root1 * root2 < 0) {
                        type = 0;
                        var x1 = (xm + (vm * Math.cos(Math.PI * qm / 180) * Math.cos(Math.PI * fm / 180) * (root1 + a)));
                        var y1 = (ym + (vm * (root1 + a) * Math.sin(Math.PI * qm / 180)) - (g * (root1 + a) * (root1 + a) / 2));
                        var z1 = (zm + (vm * Math.cos(Math.PI * qm / 180) * Math.sin(Math.PI * fm / 180) * (root1 + a)));
                        var q1 = Math.asin(((y1 - yi) + (g * (root1 + a) * (root1 + a) / 2)) / (vi * (root1 + a))) * 180 / Math.PI;
                        var dz = z1 - zi;
                        var dx = x1 - xi;
                        var f1 = Math.atan(Math.abs(dz) / Math.abs(dx)) * 180 / Math.PI;;
                        if (dz >= 0 && dx < 0) {
                            f1 = 180 - f1;
                        }
                        else if (dz < 0 && dx < 0) {
                            f1 = 180 + f1;
                        }
                        else if (dz < 0 && dx >= 0) {
                            f1 = 360 - f1;
                        }
                        var x2 = (xm + (vm * Math.cos(Math.PI * qm / 180) * Math.cos(Math.PI * fm / 180) * (root2 + a)));
                        var y2 = (ym + (vm * (root2 + a) * Math.sin(Math.PI * qm / 180)) - (g * (root2 + a) * (root2 + a) / 2));
                        var z2 = (zm + (vm * Math.cos(Math.PI * qm / 180) * Math.sin(Math.PI * fm / 180) * (root2 + a)));
                        var q2 = Math.asin(((y2 - yi) + (g * (root2 + a) * (root2 + a) / 2)) / (vi * (root2 + a))) * 180 / Math.PI;
                        dz = z2 - zi;
                        dx = x2 - xi;
                        var f2 = Math.atan(Math.abs(dz) / Math.abs(dx)) * 180 / Math.PI;;
                        if (dz >= 0 && dx < 0) {
                            f2 = 180 - f2;
                        }
                        else if (dz < 0 && dx < 0) {
                            f2 = 180 + f2;
                        }
                        else if (dz < 0 && dx >= 0) {
                            f2 = 360 - f2;
                        }
                    }
                    if (root1 >= 0 && root2 >= 0) {
                        type = 3;
                        var x1 = (xm + (vm * Math.cos(Math.PI * qm / 180) * Math.cos(Math.PI * fm / 180) * (root1 + a)));
                        var y1 = (ym + (vm * (root1 + a) * Math.sin(Math.PI * qm / 180)) - (g * (root1 + a) * (root1 + a) / 2));
                        var z1 = (zm + (vm * Math.cos(Math.PI * qm / 180) * Math.sin(Math.PI * fm / 180) * (root1 + a)));
                        var q1 = Math.asin(((y1 - ym) + (g * (root1 + a) * (root1 + a) / 2)) / (vm * (root1 + a))) * 180 / Math.PI;
                        var dz = z1 - zi;
                        var dx = x1 - xi;
                        var f1 = Math.atan(Math.abs(dz) / Math.abs(dx)) * 180 / Math.PI;;
                        if (dz >= 0 && dx < 0) {
                            f1 = 180 - f1;
                        }
                        else if (dz < 0 && dx < 0) {
                            f1 = 180 + f1;
                        }
                        else if (dz < 0 && dx >= 0) {
                            f1 = 360 - f1;
                        }
                        var x2 = (xm + (vm * Math.cos(Math.PI * qm / 180) * Math.cos(Math.PI * fm / 180) * (root2 + a)));
                        var y2 = (ym + (vm * (root2 + a) * Math.sin(Math.PI * qm / 180)) - (g * (root2 + a) * (root2 + a) / 2));
                        var z2 = (zm + (vm * Math.cos(Math.PI * qm / 180) * Math.sin(Math.PI * fm / 180) * (root2 + a)));
                        var q2 = Math.asin(((y2 - ym) + (g * (root2 + a) * (root2 + a) / 2)) / (vm * (root2 + a))) * 180 / Math.PI;
                        dz = z2 - zi;
                        dx = x2 - xi;
                        var f2 = Math.atan(Math.abs(dz) / Math.abs(dx)) * 180 / Math.PI;;
                        if (dz >= 0 && dx < 0) {
                            f2 = 180 - f2;
                        }
                        else if (dz < 0 && dx < 0) {
                            f2 = 180 + f2;
                        }
                        else if (dz < 0 && dx >= 0) {
                            f2 = 360 - f2;
                        }
                    }
                }
                else {
                    root1 = (-tb) / (2 * ta) + " + i" + Math.sqrt(-d) / (2 * ta);
                    root2 = (-tb) / (2 * ta) + " - i" + Math.sqrt(-d) / (2 * ta);
                    type = 1;
                }
            }
            else {
                root1 = -tc / tb;
                root2 = -tc / tb;
                type = 2;
                var x1 = (xm + (vm * Math.cos(Math.PI * qm / 180) * Math.cos(Math.PI * fm / 180) * (root1 + a)));
                var y1 = (ym + (vm * (root1 + a) * Math.sin(Math.PI * qm / 180)) - (g * (root1 + a) * (root1 + a) / 2));
                var z1 = (zm + (vm * Math.cos(Math.PI * qm / 180) * Math.sin(Math.PI * fm / 180) * (root1 + a)));
                var q1 = Math.asin(((y1 - ym) + (g * (root1 + a) * (root1 + a) / 2)) / (vm * (root1 + a))) * 180 / Math.PI;
                var dz = z1 - zi;
                var dx = x1 - xi;
                var f1 = Math.atan(Math.abs(dz) / Math.abs(dx)) * 180 / Math.PI;;
                if (dz >= 0 && dx < 0) {
                    f1 = 180 - f1;
                }
                else if (dz < 0 && dx < 0) {
                    f1 = 180 + f1;
                }
                else if (dz < 0 && dx >= 0) {
                    f1 = 360 - f1;
                }
                var x2 = (xm + (vm * Math.cos(Math.PI * qm / 180) * Math.cos(Math.PI * fm / 180) * (root2 + a)));
                var y2 = (ym + (vm * (root2 + a) * Math.sin(Math.PI * qm / 180)) - (g * (root2 + a) * (root2 + a) / 2));
                var z2 = (zm + (vm * Math.cos(Math.PI * qm / 180) * Math.sin(Math.PI * fm / 180) * (root2 + a)));
                var q2 = Math.asin(((y2 - ym) + (g * (root2 + a) * (root2 + a) / 2)) / (vm * (root2 + a))) * 180 / Math.PI;
                var dz = z2 - zi;
                var dx = x2 - xi;
                var f2 = Math.atan(Math.abs(dz) / Math.abs(dx)) * 180 / Math.PI;;
                if (dz >= 0 && dx < 0) {
                    f2 = 180 - f2;
                }
                else if (dz < 0 && dx < 0) {
                    f2 = 180 + f2;
                }
                else if (dz < 0 && dx >= 0) {
                    f2 = 360 - f2;
                }
            }
            if (type == 0) {//root1*root2 < 0
                if (root1 > 0) {
                    if (z1 > 0) {
                        out[j] = {
                            'x': x1,
                            'y': y1,
                            'z': z1,
                            't': root1,
                            'theta': q1,
                            'phi': f1,
                            'didcollide': true
                        }
                    }
                    else {
                        out[j] = {
                            'didcollide': false
                        }
                    }
                }
                else {
                    if (z2 > 0) {
                        out[j] = {
                            'x': x2,
                            'y': y2,
                            'z': z2,
                            't': root2,
                            'theta': q2,
                            'phi': f2,
                            'didcollide': true
                        }
                    }
                    else {
                        out[j] = {
                            'didcollide': false
                        }
                    }
                }
            }
            else if (type == 1) { //img roots
                out[j] = {
                    'didcollide': false
                }
            }
            else if (type == 2) { //ta = 0
                if (root1 > 0) {
                    if (z1 > 0) {
                        out[j] = {
                            'x': x1,
                            'y': y1,
                            'z': z1,
                            't': root1,
                            'theta': q1,
                            'phi': f1,
                            'didcollide': true
                        }
                    }
                    else {
                        out[j] = {
                            'didcollide': false
                        }
                    }
                }
                else {
                    if (z2 > 0) {
                        out[j] = {
                            'x': x2,
                            'y': y2,
                            'z': z2,
                            't': root2,
                            'theta': q2,
                            'phi': f2,
                            'didcollide': true
                        }
                    }
                    else {
                        out[j] = {
                            'didcollide': false
                        }
                    }
                }
            }
            else if (type == 3) {// root1 and root2>=0
                if (z1 >= z2) {
                    if (z1 > 0) {
                        out[j] = {
                            'x': x1,
                            'y': y1,
                            'z': z1,
                            't': root1,
                            'theta': q1,
                            'phi': f1,
                            'didcollide': true
                        }
                    }
                    else {
                        out[j] = {
                            'didcollide': false
                        }
                    }
                }
                else {
                    if (z2 > 0) {
                        out[j] = {
                            'x': x2,
                            'y': y2,
                            'z': z2,
                            't': root2,
                            'theta': q2,
                            'phi': f2,
                            'didcollide': true
                        }
                    }
                    else {
                        out[j] = {
                            'didcollide': false
                        }
                    }
                }
            }
            else if (type == -1) {
                out[j] = {
                    'didcollide': false
                }
            }
        }
        var ans = {};
        for (k = 0; k < Object.keys(out).length; k++) {
            if (out[k]['didcollide']) {
                ans[k] = out[k];
                ans[k]["interceptor"] = k;
            }
        }
        var maxz = 0;
        var it = -1;
        Object.keys(ans).forEach(function (key) {
            if (ans[key]['z'] > maxz) {
                maxz = ans[key]['z'];
                it = key;
            }
        });
        if (it != -1) {
            return (ans[it]);
        }
        else {
            return ({ 'didcollide': false })
        }
    }
    findin(mval, ival, a, g) {
        var mi = [], midata, i;        
        for (i = 0; i < Object.keys(mval).length; i++) {
            midata = this.calcol(mval[i], ival, a, g);
            mi.push( midata);
        }
        console.log(mi);
        
    }


    render() {
        let tempstate=        {...this.state};
        console.log(tempstate);
        
        return (
            <div>
                <Header />
                <div className={classes.InputDiv}>
                    <h4>Ballistic Missiles Targets</h4>
                    <form onSubmit={this.submitted1} >
                        <div id="missile">
                            <FormM key={0} kkk={0} handleChange={this.handleChange} />
                            {this.state.missArray}
                            <button onClick={this.addformhandler}>Add Missile</button>
                            {/* <button type="submit" id="b1" className={classes.SubmitButton}></button> */}
                        </div>
                        <h4>Anti-Ballistic Missile Interceptors</h4>
                        {/* <form onSubmit={this.submitted2}  */}
                        <div id="interceptor">
                            <FormI key={0} kkk={0} handleChange={this.handleChange} />
                            {this.state.interArray}
                            <button onClick={this.addformhandler2}>Add Interceptor</button>
                            {/* <button type="submit" id="b2" className={classes.SubmitButton}></button> */}
                        </div>
                        <button type="submit" >Analyze</button>

                    </form>
                    <hr></hr>
                    <form id="sec" className={classes.sec}>
                        <h5>Or upload a CSV/JSON file in the following format: (...)</h5>
                        <label>
                            Missile Data JSON
                            <br></br><input type="file" className={classes.FileInp} id="fileinp" onChange={(e) => this.loadFile(e)} /><br></br>
                        </label>
                        <label>
                            Interceptor Data JSON
                           <br></br> <input type="file" className={classes.FileInp} id="filinp" onChange={(e) => this.loadFile2(e)} /><br></br>
                        </label>
                        <button type="submit" >Analyze</button>
                    </form>
                </div>
                <div className={classes.hidd}>
                <Solution hehe={...this.state.answerArray}/>
                </div>
            </div>
        )
    }
}
export default GetData;