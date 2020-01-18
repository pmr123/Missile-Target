import React, {Component} from 'react';
import classes from './FormM.module.css';
class FormM extends Component{
    constructor(props){
        super(props);
      this.state={
            val: this.props.kkk +1,
        }
    }
    firsthandler = (e) =>{
        this.setState({val: e.target.value})
        // e.target.value
        console.log(this.state);
    }
    render(){
        return(
            // <form >
            <div className={classes.Forms}>
                {/* <input placeholder="Missile Path" onChange={this.props.handleChange} value={this.state.val} onChange={(e)=>{this.firsthandler(e)}}/> */}
               
                <input placeholder="X-coordinate" type="number" />
                <input placeholder="Y-coordinate" type="number" />
                <input placeholder="Z-coordinate" type="number" />
                <input placeholder="Velocity (in m/s)" type="number" min="0" />   
                <input placeholder="Θ (in deg)" type="number" min="0"    />
                <input placeholder="Φ (in deg)" type="number" max="360"  />            
            </div>
            // </form>
        )
    }
}
export default FormM;