

import React from 'react';
const withRedBull = (WrappedComponent) =>{
    class RedBull extends React.Component{
        constructor(props){
            super(props);
            this.state={
                wings: null,
            };
        }
        fly = () =>{
           this.setState({wings: 'I can fly'})
        }
        getWings = () =>{
            this.setState({ wings : 'I have wings'})
        }
        render(){
            return <WrappedComponent  fly={this.fly} wings={this.state.wings} getWings={this.getWings} {...this.props} />
        }
    }
    return RedBull;
}
export default withRedBull;