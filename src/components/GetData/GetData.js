import React, {Component} from 'react';
import classes from './GetData.module.css';
import {Link} from 'react-router-dom';
import Form from '../Form/Form';
import Header from '../../components/Header/Header';

class GetData extends Component{
    

        state={
            missiles: 0,
            missArray: [],

        };
        addformhandler = () =>{
           
            this.setState({missiles: (this.state.missiles+=1)});           
  
            let str = [];
            
            for(var i =0; i<this.state.missiles;i++){             
                str.push(
                    <Form key={i+1}/>
                );
                this.setState({missArray: str});               
            }
          }
            
    render(){
      
        return(
            <div>
            <Header />

            <div className={classes.InputDiv}>
                <h4>This is Getdata</h4>
                <Form key={0}/>
                {this.state.missArray}
                <button onClick = {this.addformhandler}>Add Form group</button>
                <hr></hr>
                <h5>Or upload a CSV file in the following format: (...)</h5>
                <input type="file" /><br></br>
                <input type="file" /><br></br>

                <Link to="/sol">
                    <button>Start</button>
                </Link>
            </div>
            </div>
        )
    }
}

export default GetData;