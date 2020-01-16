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
                {/* <input placeholder="Missile Path" value={this.state.val} onChange={(e)=>{this.firsthandler(e)}}/> */}
                <input placeholder="Missile Path" onChange={this.props.handleChange}/>

                <input placeholder="X-coordinate" type="number" required/>
                <input placeholder="Y-coordinate" type="number" required/>
                <input placeholder="Z-coordinate" type="number" required/>
                <input placeholder="Velocity (in m/s)" type="number" required/>               
            </div>
            // </form>
        )
    }
}
export default FormM;