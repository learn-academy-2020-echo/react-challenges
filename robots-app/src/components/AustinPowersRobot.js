import React, { Component } from 'react'



class AustinPowersRobot extends Component {

// 	austinRobotListener = (userInput) => {
//
// 		let austinArray = ["Shagadelic ☮️", "Yeah, Baby! ✌️", "Oh, Behave! ✌️"]
//
// 		//for every user input, we want to return one of the index items in Austin Array. As the user types, the item will change
//
// 		let austinMap= userInput.split("").forEach((item) => {
// //output something from responses array each time there is an onChange event
// //for Each user input, return from the austin array the index + 1
// //return the response array index + 1
// 	}

	austinRobotListener = (userInput) => {
		//split the user input into an array
		//create a variable to hold the array that is split
		//do something to each letter to change it in the array .map
		//at each index, try dividing by 3 and getting remainder.
		//if index % 3 === either 0, 1/3, or 2/3, it will return a specific letter out of BLA BLA BLA
		//return the new array joined

		let austinArray = userInput.split("").map((item, index) => {
			if (index % 3 === 0){
				return "Shagadelic ☮️"
			} else if (index % 3 === 1){
				return "Yeah, Baby! ✌️"
			} else if (index % 3 === 2){
				return "Oh, Behave! ✌️"
			} else {
				return "Something went wrong."
			}
		})
		return austinArray.join("")
	}


	render() {
		return (
			<div>
				<h3>Austin Powers Robot</h3>
				<h4>Yeah baby! I hear you saying {this.austinRobotListener(this.props.value)}! Is that correct?</h4>

			</div>
		)
	}
}

export default AustinPowersRobot
