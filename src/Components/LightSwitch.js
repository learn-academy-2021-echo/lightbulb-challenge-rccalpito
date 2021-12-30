import React, { Component } from "react";


class LightSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
        background: "white",
        lightBulbState: "on",
        color: "black",
        onSwitchColor: "wheat",
        offSwitchColor: "black"
    }
  }
  
  // created a function called onOff to turn background of button from white to black
  // current implementation of function allows for background to go from white --> black --> white
  // cannot change back to black after returning to white
  // why..
  // found out its because its case sensitive...
  // this.state.background: "White" vs "white".. how rude..

  // Updated onOff function to include the switch and its characteristics
  // changed switch to change borderBlockColor to change from black --> wheat for when switch is on/off
  // this gives the effect that it is switching from off position to on position


  onOff = () => {
      if (this.state.background === "white"){
          this.setState({background: "yellow",
                         lightBulbState: "on",
                         onSwitchColor: "black",
                         offSwitchColor: "wheat"})

      } else {
          this.setState({background: "white",
                        lightBulbState: "off",
                        onSwitchColor: "wheat",
                        offSwitchColor: "black"})

      }
  }




  render() {

// divided up into different sections because my boxes wouldn't move for some reason
// most of what i did is in CSS
// created individual assets for light bulb, switch, light bulb base
// experimented with CSS and drew stuff
// i learned that i had no idea how CSS works

//one thing i was not sure of.. was i supposed to put the buttons and lights in App.js? or is it ok to contain everything in the components file.. asking for a friend.. 

    return (
      <>
        <h1>LightBulb Challenge</h1>
        <body>
            <section class = "lightyLightStuff">
                <div class = "lightBulb" style = {{background: this.state.background}}></div>
                <div class = "bulbBase"></div>
            </section>
            <section class = "boxAndSwitches">
                <button class = "lightSwitchBox" onClick = {this.onOff}></button>
                <div class = "onSwitch" style = {{borderBlockColor: this.state.onSwitchColor}}></div>
                <div class = "offSwitch" style = {{borderBlockColor: this.state.offSwitchColor}}></div>
            </section>
        </body>
      </>
    )
  }
}

export default LightSwitch;


