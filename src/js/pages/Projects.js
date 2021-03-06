import React from "react";

let homerProjects = [
	{
		name: "Electric Hammer",
		img: "src/img/electric-hammer.jpg",
		description: "The hammer is powered by electricity, making it ideal for all your hammering needs. It can pound a nail, or destroy a wall."
	},
	{
		name: "Makeup Shotgun",
		img: "src/img/makeup-gun.jpg",
		description: "An invention for the ladies, how many times have you gals been late for a high powered business meeting, only to realise that you're not wearing makeup? The Makeup shotgun is for the woman who only has 4/5ths of a second to get ready."
	},
	{
		name: "The Homer",
		img: "src/img/the-homer.jpg",
		description: "The perfect car for everyone, it features two bubble domes; one in the front, while the one in the back is for quarreling kids, and comes with optional restraints and muzzles. It has three horns, because you can never find a horn when you're mad. All three horns play the song La Cucaracha. It comes equipped with shag carpeting and tailfins."
	},
	{
		name: "Spice Rack",
		img: "src/img/spice-rack.jpg",
		description: "A hand crafted spice rack. Only one spice rack has been made, so it can be thought of as a collectors item."

	}
];

var ProjectList = React.createClass({
	render: function() {
		
		return(
			<div className="project-list">
				{homerProjects.map( function (project) { 
					return (
						<div key={project.name} class="inner-project-box">
							<h4>{project.name}</h4>
							<div class="img-wrapper">
								<img src={project.img} />
							</div>
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
			<div className="project-box">
				<h1>Featured Projects</h1>

				<ProjectList />
			</div>
		);
	}
}