import React from 'react';
import skillsContent from '../_content/skills.json';

const SkillsContainer = () => {
	let content;
	let skillItems = [];
	console.log("Test"+JSON.stringify(skillsContent))
	// content += JSON.stringify(skillsContent);
	let i;
	for (i in skillsContent.sectors) {
		let sector = skillsContent.sectors[i];
		console.log("Sector:",sector)
		
		let skillSector = [];
		let j;
		for (j in sector.content) {
			let skill = sector.content[j];
			console.log(skill.name)
			skillSector.push(
			<div className="skillItem" key={j+2}>
				<div className="skillName">{skill.name}</div>
				<div className="skillSummary">{skill.description}</div>
			</div>
			);
		}
		skillItems.push(
		<div key={i}>
			<div className="subtitle">{sector.title}</div>
			<div className="skillClass">
				{skillSector}
			</div>
			
		</div>);
	}
	return <div>{skillItems}</div>;
}

const projectContainer = () => {
	let projectElements = [];
	

	return <div className="projectsContainer">
		<div className="projectsFlex">
			{/* <article className="projectBox">
				<span className="projectTitle">Tank QRL</span>
			</article> */}
		</div>

		<div className="projectSeeMore">
			<a href="/404.html">See More</a>
		</div>
	</div>
}

const InfoContainer = () =>  {
    return (
	<div className="infoContainer">
				<div className="content">
					<h2 className="header">Projects</h2>
						<projectContainer/>
					<h2 className="header">Top Skills</h2>

					<div className="skillsContainer">
						<SkillsContainer/>
					</div>
				</div>
			</div>)
};
export default InfoContainer;