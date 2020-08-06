import React from 'react';

class CounterApp extends React.Component{
    isRedColor(){
        let vo =this.props.name.slice(0,1).toLowerCase();
        return vo==='a'||vo==='e'||vo==='i'||vo==='o'||vo==='u'? true:false;
    }
    render(){
        return <p className={ this.isRedColor() ?'red':'blue'}> {this.props.name}</p>
    }
}


export default CounterApp;