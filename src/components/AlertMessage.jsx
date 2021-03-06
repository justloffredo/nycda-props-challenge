// See my CSS for what types are valid
import "./AlertMessage.scss";
import React from "react";

class AlertMessage extends React.Component {
	constructor(props) {
		super(props);
		this.state = { closed: false };
	}

	_handleClose = () => {
		this.setState({ closed: true });
	}

	render() {
		if (this.state.closed) {
			return null;
		}

		const { type, children } = this.props;

		return (
			<div className={`AlertMessage AlertMessage--${type}`}>
				{children}
				<button className="AlertMessage-close" onClick={this._handleClose}>
					X
				</button>
			</div>
		);
	}
}

export default AlertMessage;
