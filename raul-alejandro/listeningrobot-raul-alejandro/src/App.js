import React, { Component } from "react";
import "./App.css";
import GoodBot from "./components/GoodBot";
import BadBot from "./components/BadBot";
import OurBot from "./components/OurBot";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userInput: "Your words here",
		};
	}

	handleChange = (e) => {
		console.log(e.target.value);
		this.setState({ userInput: e.target.value });
	};

	render() {
		return (
			<React.Fragment>
				<input
					type='text'
					value={this.state.userInput}
					onChange={this.handleChange}
				/>
				<GoodBot userInput={this.state.userInput} />
				<BadBot userInput={this.state.userInput} />
				<OurBot userInput={this.state.userInput} />
			</React.Fragment>
		);
	}
}

export default App;
