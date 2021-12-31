import React, { Component } from 'react'
import './App.css'
import LightSwitch from './Components/LightSwitch';

class App extends Component{
  render(){
    return(
      <>
        <h1>{<LightSwitch/>}</h1>

      </>
    )
  }
}
export default App
