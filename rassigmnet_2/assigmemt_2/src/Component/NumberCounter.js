import React from 'react';
import withCount from "./withCount";

class NumberCounter extends React.Component{
    constructor(props){
        super(props) 
       
    };

render(){
        return (
      

        <div >
            <button onClick= {this.props.add}>
                +
            </button>
            <button onClick= {this.props.subtract}>
                -
            </button>
           <h2> count : {this.props.count} </h2>
        </div>

    )
}
}
export default withCount(NumberCounter);

