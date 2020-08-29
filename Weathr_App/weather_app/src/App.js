import React from 'react';
import Axios from 'axios';
import './App.css';
import Navbar from './Components/Navbar';
import DisplayWeather from  './Components/DisplayWeather';



class App extends React.Component{

  //state
  state ={
    coords:{
      latitude:45,
      longitude : 60,
    },
    data :  {},
    inputdata : ""

  }

componentDidMount(){
  //get device location
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition( ( position )=>{
      let newCoords = {
        latitude:position.coords.latitude,
        longitude:position.coords.longitude
      }
      this.setState({coords:newCoords});
     // console.log(position.coords.longitude);

     //Api call
     Axios.get(`http://api.weatherstack.com/current?access_key=9023b68acbc1f0f98993b619ae0b2bb7&query=${this.state.coords.latitude},${this.state.coords.longitude}`).then(res =>{
       
     let weatherData ={
       location:res.data.location.name,
       temperature:res.data.current.temperature,
       description:res.data.current. weather_descriptions,
       region:res.data.location.region,
       country:res.data.location.country,
       wind_speed:res.data.current.wind_speed,
       pressure:res.data.current.pressure,
        precip:res.data.current.precip,
       humidity:res.data.current.humidity,
       img:res.data.current.weather_icons
     }
     this.setState({data: weatherData});
     });
    })
    
  }else{
    console.log("not supported");
  }
}
 change = (value) =>{
   //console.log(value);
   this.setState({inputdata:value});
 }
 changeWeather = (event) =>{
   event.preventDefault();

   //api call
   Axios.get(`http://api.weatherstack.com/current?access_key=9023b68acbc1f0f98993b619ae0b2bb7&query=${this.state.inputdata}`).then(res =>{
     //console.log(res);
     let weatherData ={
      location:res.data.location.name,
      temperature:res.data.current.temperature,
      description:res.data.current. weather_descriptions,
      region:res.data.location.region,
      country:res.data.location.country,
      wind_speed:res.data.current.wind_speed,
      pressure:res.data.current.pressure,
       precip:res.data.current.precip,
      humidity:res.data.current.humidity,
      img:res.data.current.weather_icons
    }
    this.setState({data: weatherData});
   });
 }


  render(){
    return(
      <div class="App">
        <div className="container">
          
        <Navbar changeWeather={this.changeWeather}  changeRegion={this.change}/>
        <DisplayWeather  weatherData={this.state.data} />
        
        </div>
       

      </div>

    );
  }
}

export default App;
