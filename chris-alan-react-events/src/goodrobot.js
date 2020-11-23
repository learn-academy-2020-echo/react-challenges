import React, { Component } from 'react'
import './App.css';

class GoodRobot extends Component{
  constructor(props){
    super(props)

    }


  render(){
    return(
      <React.Fragment>
        <div>
          I hear you saying
        </div>
        <p>{ this.props.userInput }</p>
      </React.Fragment>
    )
  }
}
export default GoodRobot;
