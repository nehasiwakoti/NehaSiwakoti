import React, { Component } from 'react';
import './App.css'
import{NumberCounter , CounterApp} from './Component/';


function App() {
  const  names =[ 'Neeta sapkota',
'Neha shiwakoti',
'Srijana Khatiwada',
'Smrity Dhakal',
'Sami Chakradhar',
'Kirtee Maharjan',
'Elisha Bista'];
           
//  names.map((name)=>{
//    return (<CounterApp key={name} name={name}/>)
//  })
    return (  
      <div className="main">
      <NumberCounter />
        <h1> {names.map((name)=>(<CounterApp key={name} name={name}/>))}</h1>
       
    </div>

  
  );
}

export default App;
