import React from "react";

let homerBio = {
	name: "Homer Simpson",
	bio: 'Homer Simpson, formerly known as Max Power, is the son of Mona and Abraham "Grampa" Simpson. Homer held over 188 different jobs in the first 400 episodes of The Simpsons. In most episodes, he works as the Nuclear Safety Inspector at the Springfield Nuclear Power Plant, a position he has held since \"Homer\'s Odyssey\", the third episode of the series. Despite, a vacuous mind, but he is still able to retain a great amount of knowledge about very specific subjects. He often shows short bursts of astonishing insight, memory, creativity and fluency with many languages. Homer is also extremely confident; no matter how little skill or knowledge he has about anything he tries to do, he has no doubt that he will be successful.'
	}


export default class About extends React.Component {
	render() {
		return (
			<div class="about-box">
				<h1>About</h1>
				<img src="https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png" />
				<p>{homerBio.bio}</p>
			</div>
				
		);
	}
}