import React from "react";
import StandardLayout from "../components/StandardLayout";
import skillsContent from '../../content/skills.json';

const SkillsContainer = () => {
	let skillItems = [];

	for (let i in skillsContent.sectors) {
		let sector = skillsContent.sectors[i];
		let skillSector = [];

		for (let j in sector.content) {
			let skill = sector.content[j];
			skillSector.push(
				<div className="skillItem" key={j + 2}>
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

export default function Home() {
    return (
        <StandardLayout className="skillPage">
            <h2 className="header">Top Skills</h2>
            <div className="skillsContainer">
                <SkillsContainer />
            </div>
        </StandardLayout>
    )
}