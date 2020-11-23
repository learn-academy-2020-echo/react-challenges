import React, { Component } from 'react'
import './App.css';

class BadRobot extends Component{
  gibberish = (string) =>{
    string.split("").map((value, index) => {
      if (index / 3 == 0){
        return "a"}
      if else (index / 3 == 1){
        return "l"}
      else (index / 3 == 2){
        return "b"}
      }
    )}
  }


  render(){
    return(
      <React.Fragment>
        <div>

        </div>

        <p>{ this.gibberish( this.props.userInput ) }</p>
      </React.Fragment>
    )
  }
}
export default BadRobot;
