import React, { Component } from "react";

class OurBot extends Component {
	render() {
		return (
			<React.Fragment>
				<p>
					<strong>AngryBot</strong>
				</p>
				<p> {this.props.userInput}. This is wrong ! </p>
			</React.Fragment>
		);
	}
}
export default OurBot;
