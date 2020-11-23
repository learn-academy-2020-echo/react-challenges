import React, { Component } from 'react'
import './App.css';
import GoodRobot from './goodrobot'
import BadRobot from './badrobot'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ userInput: e.target.value })
  }

  render(){
    return(
      <React.Fragment>
        <input
          type="text"
          value={ this.state.userInput }
          onChange={ this.handleChange }
        />
        <GoodRobot/>
        <BadRobot/>
        // <p>{ this.state.userInput }</p>
      </React.Fragment>
    )
  }
}

export default App;
