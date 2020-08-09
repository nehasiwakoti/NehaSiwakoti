import React from 'react';

import withRedBull from './withRedBull';
class Users extends React.Component{
    constructor(props){
        super(props) 
       
    };

render(){

        const wings = this.props.wings
        return (
      
        <div >
             <h1> {this.props.name}</h1>
             <button onClick={this.props.getWings}>
               get wings 
            </button>
              {wings?<h2>{wings}</h2>:<p>No RedBull.Cannot fly </p>}
             <button onClick= {this.props.fly}> fly </button>  
            
        </div>

    )
}
}
export default withRedBull(Users);