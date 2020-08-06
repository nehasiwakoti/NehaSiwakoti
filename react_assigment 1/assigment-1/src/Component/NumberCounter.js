import React from 'react';


class NumberCounter extends React.Component{
    constructor(props){
        super(props) 
        console.log (this.props);
        this.state ={
           value: 0,
        };
    };

render(){
    return (
      <div className="button">
           <div> Count:{this.state.value}</div>
           <button id="add-btn" onClick={() =>{
               this.setState({ value:this.state.value +1 });
           }
            }
            
            >
                +
            </button>
            <button id="add-subtract" onClick={() =>{
                this.setState({ value:this.state.value -1 });
            }
            }
            
            >
                -
            </button>
        </div> 


    )
}
}
export default NumberCounter;

