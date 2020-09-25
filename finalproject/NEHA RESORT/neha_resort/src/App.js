import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRooom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Contact from './pages/Contact';
import 'bootstrap/dist/css/bootstrap.css';
import BookNow from './pages/BookNow';
import http from '../src/utils/http';

function App() {
  http.post("/customers").then((res) => {
    console.log(res.data);
  });
  
  
  return <> 
  
  <Navbar />
  <Switch>
    <Route exact path="/" component={Home}/>
  <Route exact path="/rooms/" component={Rooms}/>
  <Route exact path="/contact/" component={Contact}/>
  <Route exact path="/rooms/:slug" component={SingleRoom}/>
  <Route exact path="/booknow/:slug" component={BookNow} />
  <Route component={Error}/>
  </Switch>
   
  </>

}

export default App;
