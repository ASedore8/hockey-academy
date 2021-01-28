import React from "react"
import classes from "./Header.module.css"

export default function Header() {
	return (
		<div className={classes.Header}>
			<a href="/">
				<i className="fas fa-hockey-puck"></i>
				<p>Home</p>
			</a>
			<div className={classes.right}>
				<a href="/about">
					<i className="fas fa-id-badge"></i>
					<p>About</p>
				</a>
				<a href="/schedule">
					<i className="fas fa-calendar-alt"></i>
					<p> Schedule</p>
				</a>
				<a href="/enroll">
					<i className="fas fa-user-plus"></i>
					<p>Enroll</p>
				</a>
			</div>
		</div>
	)
}
