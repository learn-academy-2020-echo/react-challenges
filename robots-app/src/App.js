import React, { Component, Fragment } from 'react'
import GoodRobot from './components/GoodRobot'
import EvilRobot from './components/EvilRobot'
import AustinPowersRobot from './components/AustinPowersRobot'
import chatbot from './assets/chatbot.png'

import './App.css'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInput: '',
		}
	}

	handleChange = (e) => {
		console.log(e.target.value)
		this.setState({ userInput: e.target.value })
	}

	render() {
		return (
			<Fragment>
			<div id = "container">
			<img src = {chatbot}/>
				<h1>Robo Active Listening</h1>
				<h2> Say Something! </h2>
				<input
					type='text'
					value={this.state.userInput}
					onChange={this.handleChange}
				/>
				<hr className= "main-hr"/>
				<GoodRobot
					value= { this.state.userInput }/>
				<EvilRobot
					value= { this.state.userInput }/>
				<AustinPowersRobot
					value= { this.state.userInput }/>
					</div>
			</Fragment>
		)
	}
}

export default App
