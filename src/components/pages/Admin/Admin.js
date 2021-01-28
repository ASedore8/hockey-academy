import React, { Component } from "react"
import Form from "../Form/Form"

class Admin extends Component {
	state = {
		location: " ",
		start: 0,
		end: 0,
	}

	submitHandler(loc, start, end, day) {
		this.props.submit(loc, start, end, day)
	}

	render() {
		console.log(this.props)

		return (
			<div>
				<Form submit={(loc, start, end) => this.submitHandler(loc, start, end, "Monday")} />
			</div>
		)
	}
}

export default Admin
