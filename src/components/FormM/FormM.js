import React, {Component} from 'react';
import classes from './FormM.module.css';
class FormM extends Component{
    constructor(props){
        super(props);
      this.state={
            val: this.props.kkk +1,
            disabled: false
        }
    }
    firsthandler = (e) =>{
        this.setState({disabled: true});
        console.log(this.state);
    }
    render(){
        return(
            // <form >
            <div className={classes.Forms}>
                {/* <input placeholder="Missile Path" onChange={this.props.handleChange} value={this.state.val} onChange={(e)=>{this.firsthandler(e)}}/> */}
                <input placeholder="X-coordinate" type="number" step="any"/>
                <input placeholder="Y-coordinate" type="number" step="any"/>
                <input placeholder="Z-coordinate" type="number" step="any"/>
                <input placeholder="Velocity (in m/s)" type="number" min="0" step="any"/>   
                <input placeholder="Θ (in deg)" type="number" min="0"    step="any"/>
                <input placeholder="Φ (in deg)" type="number" max="360"  step="any" />       
                {/* <i onClick={this.firsthandler}>X</i>      */}
            </div>
            // </form>
        )
    }
}
export default FormM;