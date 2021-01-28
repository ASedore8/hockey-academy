import React, { Component } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/pages/Home/Home"
import About from "./components/pages/About/About"
import Header from "./components/hoc/Header/Header"
import Enroll from "./components/pages/Enroll/Enroll"
import Schedule from "./components/pages/Shedule/Schedule"
import Footer from "./components/hoc/Footer/Footer"
import Admin from "./components/pages/Admin/Admin"

class App extends Component {
	state = {
		Monday: {
			location: "keswick",
			start: "8:00",
			end: "10:00",
		},
		Tuesday: {
			location: null,
			start: null,
			end: null,
		},
		Wednesday: {
			location: null,
			start: null,
			end: null,
		},
		Thursday: {
			location: null,
			start: null,
			end: null,
		},
		Friday: {
			location: null,
			start: null,
			end: null,
		},
		Saturday: {
			location: null,
			start: null,
			end: null,
		},
		Sunday: {
			location: "sutton",
			start: 0,
			end: 9,
		},
	}
	updateSchedule(loc, start, end, day) {
		console.log(loc, start, end, day)

		// oldState[day] = { location: loc, start: start, end: end }
		// this.setState({ oldState })
	}

	render() {
		console.log(this.state)
		return (
			<Router>
				<Header />
				<div>
					<Route path="/" exact render={(props) => <Home {...props} />}></Route>
					<Route path="/schedule" render={(props) => <Schedule {...props} schedule={this.state} />}></Route>
					<Route path="/enroll" render={(props) => <Enroll {...props} />}></Route>
					<Route path="/about" render={(props) => <About {...props} />}></Route>
					<Route path="/admin" render={(props) => <Admin {...props} submit={this.updateSchedule} />}></Route>
				</div>
				<Footer />
			</Router>
		)
	}
}

export default App
