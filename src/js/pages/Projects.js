import React from "react";

let homerProjects = [
	{
		name: "Electric Hammer",
		img: "http://placehold.it/350x150",
		description: "The hammer is powered by electricity, making it ideal for all your hammering needs. It can pound a nail, or destroy a wall."
	},
	{
		name: "Makeup Shotgun",
		img: "http://placehold.it/350x150",
		description: "An invention for the ladies, how many times have you gals been late for a high powered business meeting, only to realise that you're not wearing makeup? The Makeup shotgun is for the woman who only has 4/5ths of a second to get ready."
	},
	{
		name: "The Homer",
		img: "http://placehold.it/350x150",
		description: "The perfect car for everyone, it features two bubble domes; one in the front, while the one in the back is for quarreling kids, and comes with optional restraints and muzzles. It has three horns, because you can never find a horn when you're mad. All three horns play the song La Cucaracha. It comes equipped with shag carpeting and tailfins."
	},
	{
		name: "Spice Rack",
		img: "http://placehold.it/350x150",
		description: "A hand crafted spice rack. Only one spice rack has been made, so it can be thought of as a collectors item."

	}
];

// var ProjectList = React.createClass({
// 	render: function() {
		
// 		return(
// 			<ul className="project-list">
// 				{homerProjects.map(function (project) { return <li>{project.name}</li> })}
// 				{homerProjects.map((project) => {return <li>{project.description}</li> })}
// 			</ul>
// 		) 
// 	}
// });
var ProjectList = React.createClass({
	render: function() {
		
		return(
			<div className="project-list">
				{homerProjects.map( function (project) { 
					return (
						<div key={project.name} class="project-box">
							<h4>{project.name}</h4>
							<img src={project.img} />
							<p>{project.description}</p>
						</div>
					)
				}
			)}
				
			</div>
		) 
	}
});
export default class Projects extends React.Component {

	render() {
		return (
			<div>
				<h1>Featured Projects</h1>
				<img src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" />
				<ProjectList data={homerProjects} />
			</div>
		);
	}
}