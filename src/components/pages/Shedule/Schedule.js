import React from "react"
import Admin, { setState } from "../Admin/Admin"

const schedule = (props) => {
	console.log(props)
	return <div>monday start time : {Admin.monStart}</div>
}

export default schedule
