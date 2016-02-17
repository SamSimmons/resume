import React from "react";

let homerJobs = ['boxer', 'mascot', 'astronaut', 'imitation', 'Krusty', 'baby proofer', 'trucker', 'hippie', 'plow driver', 'food critic', 'conceptual artist', 'grease salesman', 'carny', 'mayor', 'grifter', 'body guard for the mayor', 'country western manager', 'garbage commissioner', 'mountain climber', 'farmer', 'inventor', 'Smithers', 'Poochie', 'celebrity assistant', 'power plant worker', 'fortune cookie writer', 'beer baron', 'Kwik-E-Mart clerk'];

var PrintJobList = React.createClass({
	render: function() {
		return (
			<ul>
				{homerJobs.map( function(job){
					return <li key={job}>{job}</li>
				})
			}
			</ul>
		)
	}
});

export default class Settings extends React.Component {
	render() {
		return (
			<div class="resume-box">
				<h4>Education</h4>
				<p>Springfield High graduate - <span class="struck">1974</span> <span class="correction">1993</span></p>
				<p>Springfield University - 1994</p>
				<h4>Homer has had over 800 jobs including...</h4>
				<PrintJobList />
			</div>
		);
	}
}