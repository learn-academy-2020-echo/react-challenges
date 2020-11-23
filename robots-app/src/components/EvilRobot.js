import React, { Component } from 'react'

class EvilRobot extends Component {

	evilRobotListener = (userInput) => {
		//split the user input into an array
		//create a variable to hold the array that is split
		//do something to each letter to change it in the array .map
		//at each index, try dividing by 3 and getting remainder.
		//if index % 3 === either 0, 1/3, or 2/3, it will return a specific letter out of BLA BLA BLA
		//return the new array joined

		let evilArray = userInput.split("").map((item, index) => {
			if (index % 3 === 0){
				return "B"
			} else if (index % 3 === 1){
				return "L"
			} else if (index % 3 === 2){
				return "A"
			} else {
				return "Something went wrong."
			}
		})
		return evilArray.join("")
	}

	render() {
		return (
			<div>
				<h3>Evil Robot</h3>
				<h4>I hear you saying {this.evilRobotListener(this.props.value)}. Is that correct?</h4>
			</div>
		)
	}
}

export default EvilRobot
