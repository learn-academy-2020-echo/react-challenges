import React, { Component, Fragment } from 'react'
import GoodRobot from './components/GoodRobot'
import EvilRobot from './components/EvilRobot'
import AustinPowersRobot from './components/AustinPowersRobot'

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
				<h1>Robo Active Listening</h1>
				<input
					type='text'
					value={this.state.userInput}
					onChange={this.handleChange}
				/>
				<GoodRobot />
				<EvilRobot />
				<AustinPowersRobot />
			</Fragment>
		)
	}
}

export default App
