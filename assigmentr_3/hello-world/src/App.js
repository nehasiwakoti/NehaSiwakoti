import React from 'react';
import logo from './logo.svg';
import './App.css';
import Users from './Component/Users';
import EnhancedRedBull from './Component/Users';



function App() {
   const names = ["neha","elisha","kriti","esha","dipa"];
  

     return (
    <div className="App">
      {names.map((name) =>(
        <EnhancedRedBull key={name} name={name} />
      )
      )}
    </div>
  );
}





export default App;
