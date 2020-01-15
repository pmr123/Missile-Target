import React, {Component} from 'react';
import ThreeAnim from '../../components/ThreeAnim/ThreeAnim';
import {Link} from 'react-router-dom';

class Solution extends Component{
    render(){
        return(            
            <div>
                <Link to="/">GetData</Link>

                <p>Solution</p>
                <ThreeAnim />
            </div>          
        )
    }    
}
export default Solution;