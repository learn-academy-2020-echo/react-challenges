import React, { Component } from "react";

class BadBot extends Component {
	wordJumbler = (word) => {
		if (this.props.userInput.length % 3 === 0) {
			return "U suck start over";
		}
	};

	render() {
		return (
			<React.Fragment>
				<p>
					<strong>BadBot</strong>
				</p>
				<p>
					I hear you saying {this.wordJumbler(this.props.userInput)}. Is that
					correct ?
				</p>
			</React.Fragment>
		);
	}
}
export default BadBot;
