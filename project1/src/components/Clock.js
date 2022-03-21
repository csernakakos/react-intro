// MODERN WAY:
/*
import {useState} from "react";

export default function Clock({name}) {
	const [date, setDate] = useState(new Date());
	
	return (
		<div>
			<h1>Hello, {name}!</h1>
			<h2>It is {date.toLocaleTimeString()}</h2>
		</div>
	)
}
*/


// OLD WAY:
import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date(),
        }
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}</h2>
            </div>
        )
    }
}

export default Clock;

