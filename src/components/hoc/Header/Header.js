import React from "react"
import * as classes from "./header.module.css"

export default function Header() {
	return (
		<div className={classes.header}>
			<a href="/">
				<p>Home</p>
			</a>
			<a href="/about">
				<p>About</p>
			</a>
			<a href="/schedule">
				<p>Schedule</p>
			</a>
			<a href="/enroll">
				<p>Enroll</p>
			</a>
		</div>
	)
}
