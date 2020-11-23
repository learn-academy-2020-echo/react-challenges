import React, { Component } from "react"
import Good from "./Components/Good.js"
import Bad from "./Components/Bad.js"
import Doodlebot from "./Components/Doodlebot.js"
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: "",
    }
  }
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ userInput: e.target.value })
  }

  render() {
    return (
      <>
        <Bad userInput={this.state.userInput} />
        <Doodlebot userInput={this.state.userInput} />
        <Good userInput={this.state.userInput} />
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
      </>
    )
  }
}

export default App
