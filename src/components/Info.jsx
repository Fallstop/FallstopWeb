import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';



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

const AboutMe = () => {
	return <div className="aboutMe">
		<span className="basicPersonalInformation">
			{/* I am a make-believe software developer that likes to experiment in new technologies. I am currently studying in Year 11 in Huanui Collage and contract part time for website design/various other things. I am also a full time member of <a href="https://questionable.org.nz" style={{color: "#007acc"}}>Questionable Research Labs</a>, and you might also find many of my projects are supported by them and their members. */}
			Yes TD.
		</span>
	</div>
}

const InfoContainer = () => {
	return (
		<div className="infoContainer">
			<div className="content">
				<h2 className="header">Projects</h2>
				<ProjectContainer />
				<h2 className="header">About Me</h2>
				<AboutMe/>
			</div>
		</div>)
};
export default InfoContainer;