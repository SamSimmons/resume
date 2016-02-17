import React from "react";
import { Link } from "react-router";

const name = "Homer Simpson";
const job = "Nuclear Safety Expert"
export default class Layout extends React.Component {
	render() {
		return (
			<div class="react-layout">
				<div class="header-wrapper">
					<div class="nameplate">
						<h1 class="title">{name}</h1>
					</div>
					<h2 class="subheader">{job}</h2>					
				</div>
				<div class="nav">				
					<Link to="about" class="btn">about</Link>
					<Link to="resume" class="btn">resume</Link>
					<Link to="projects" class="btn">projects</Link>
				</div>
				{this.props.children}
			</div>
		);
	}
}