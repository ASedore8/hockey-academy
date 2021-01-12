import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Home from "./components/pages/Home/Home"
import About from "./components/pages/About/About"
import Header from "./components/hoc/Header/Header"
import Enroll from "./components/pages/Enroll/Enroll"
import Schedule from "./components/pages/Shedule/Schedule"
import Footer from "./components/hoc/Footer/Footer"

function App() {
	return (
		<Router>
			<Header />
			<div>
				<Route path="/" exact component={Home} />
				<Route path="/schedule" component={Schedule} />
				<Route path="/enroll" component={Enroll} />
				<Route path="/about" component={About} />
			</div>
			<Footer />
		</Router>
	)
}

export default App
