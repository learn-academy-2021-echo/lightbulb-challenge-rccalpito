import React, { Component } from "react";


class LightSwitch extends Component {
  constructor(props) {
    super(props)
    this.state = {
        background: "white",
        lightBulbState: "off",
        color: "black"
    }

  }
  
  // created a function called onOff to turn background of button from white to black
  // current implementation of function allows for background to go from white --> black --> white
  // cannot change back to black after returning to white
  // why..
  // found out its because its case sensitive...
  // this.state.background: "White" vs "white".. how rude..



  onOff = () => {
      if (this.state.background === "white"){
          this.setState({background: "yellow"})
          this.setState({lightBulbState: "on"})

      } else {
          this.setState({background: "white"})
          this.setState({lightBulbState: "off"})

      }
  }

  render() {

    return (
      <>
        <button id = "LightSwitch" onClick = {this.onOff} style = {{color: "black", background: this.state.background, margin: 20, width: 200, height: 100}}>
        {this.state.lightBulbState}
        </button>
      </>
    )
  }
}

export default LightSwitch;


// - User story: I can navigate to localhost:3000 in the browser and see a React application.
// - User story: The app has a header and a square on the screen with the word "off" in the middle.
// - User story: When I click the square the word toggles from "off" to "on" and then back to "off" again.
// - User story: When the lightbulb is "off" the background color of the box is white. When the lightbulb is "on" the background color of the box is yellow.