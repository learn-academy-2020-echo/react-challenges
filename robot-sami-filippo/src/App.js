
import React, { Component} from 'react'
import GoodRobot from './Components/GoodRobot'
import BadRobot from './Components/BadRobot'
import KanyeRobot from './Components/KanyeRobot'
import './App.css';


class App extends Component {
  
  constructor(props) {
      super(props)
      this.state={
          userInput:""
      }
  }


  handleChange = (e) => {

      console.log(e.target.value)
      this.setState({userInput: e.target.value})

  }

render (){
return (
  <>
  <GoodRobot
    value = {this.state.userInput}
    />

  <KanyeRobot 
      value = {this.state.userInput}
      />

   <BadRobot
       value = {this.state.userInput}
    />

  <input
    type="text"
    value={this.state.userInput}
    onChange={this.handleChange}
   />
  </>
)
}
}

export default App;
