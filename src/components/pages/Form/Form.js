import React, { Component } from "react"

class form extends Component {
	state = {
		location: " ",
		start: 0,
		end: 0,
	}

	inputChangeHandle(e, inputIdentifier) {
		this.setState({ [inputIdentifier]: e.target.value })
	}

	submitHandler(e) {
		e.preventDefault()
		this.props.submit(this.state.location, this.state.start, this.state.end)
	}

	render() {
		return (
			<div>
				<form onSubmit={(e) => this.submitHandler(e)}>
					<input id="monLoc" type="text" name="location" placeholder="Location" value={this.state.location} onChange={(e) => this.inputChangeHandle(e, e.target.name)}></input>
					<input id="monStart" type="text" name="start" placeholder="Start" value={this.state.start} onChange={(e) => this.inputChangeHandle(e, e.target.name)}></input>
					<input id="monEnd" type="text" name="end" placeholder="End" value={this.state.end} onChange={(e) => this.inputChangeHandle(e, e.target.name)}></input>
					<button> Update</button>
				</form>
			</div>
		)
	}
}
export default form
