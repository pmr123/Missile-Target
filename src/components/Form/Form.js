import React, {Component} from 'react';
import classes from './Form.module.css';
class Form extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <form className={classes.Forms}>
                <input placeholder="Missile Path" value={this.props.key} required/>
                <input placeholder="X-coordinate" required/>
                <input placeholder="Y-coordinate" required/>
                <input placeholder="Z-coordinate" required/>
            </form>
        )
    }
}
export default Form;