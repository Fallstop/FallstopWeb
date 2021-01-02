import React from 'react';
import skillsContent from '../../content/skills.json';
import { useStaticQuery, graphql } from 'gatsby';

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

const ProjectContainer = () => {
	let projectElements = [];
	const result = useStaticQuery(
		graphql` {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 4
        ) {
          edges {
            node {
              frontmatter {
                slug
				title
              }
            }
          }
        }
      }
	`);

	result.allMarkdownRemark.edges.forEach(({ node }) => {
		projectElements.push(
			<a href={node.frontmatter.slug} key={node.frontmatter.slug}>
				<article className="projectBox" >
					<span className="projectTitle">{node.frontmatter.title}</span>
				</article>
			</a>

		)
	});
	

	return <div className="projectsContainer">
		<div className="projectsFlex">
			{projectElements}
		</div>

		<div className="projectSeeMore">
			<a href="/archive">See More</a>
		</div>
	</div>
}

const InfoContainer = () => {
	return (
		<div className="infoContainer">
			<div className="content">
				<h2 className="header">Projects</h2>
				<ProjectContainer />
				<h2 className="header">Top Skills</h2>

				<div className="skillsContainer">
					<SkillsContainer />
				</div>
			</div>
		</div>)
};
export default InfoContainer;