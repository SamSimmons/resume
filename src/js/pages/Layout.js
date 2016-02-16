import React from "react";
import { Link } from "react-router";

const name = "Homer Simpson";
const job = "Nuclear Safety Expert"
export default class Layout extends React.Component {
	render() {
		return (
			<div>
				<Link to="about" class="home">home</Link>
				<h1>{name}</h1>
				<h2>{job}</h2>				
				<Link to="about" class="btn">about</Link>
				<Link to="resume" class="btn">resume</Link>
				<Link to="projects" class="btn">projects</Link>
				{this.props.children}
			</div>
		);
	}
}