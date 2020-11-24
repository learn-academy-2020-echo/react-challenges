import React, { Component } from "react";

class GoodBot extends Component {
	render() {
		return (
			<React.Fragment>
				<p>
					<strong>GoodBot</strong>
				</p>
				<p> I hear you saying {this.props.userInput}. Is that correct ?</p>
			</React.Fragment>
		);
	}
}
export default GoodBot;
