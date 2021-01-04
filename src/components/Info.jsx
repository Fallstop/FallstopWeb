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
			I am a software developer/stack overflow expert that likes to experiment in new technologies.
			<br/>
			I am currently studying in Year 11 in Huanui Collage and contract part time for website design/various other things. I am also a full time member of <a href="https://questionable.org.nz" style={{color: "#007acc"}} target="__none">Questionable Research Labs</a>, and you might also find many of my projects are supported by them and their members.
		</span>
		<div className="aboutLinks">
			<a href="/" target="__none">
				<div className="aboutLinkItem">
					<div className="aboutLinkName">Email</div>
					<div className="aboutLinkIcon"></div>
				</div>
			</a>
			<a href="https://github.com/Fallstop" target="__none">
				<div className="aboutLinkItem">
					<div className="aboutLinkName">Github</div>
					<div className="aboutLinkIcon"></div>
				</div>
			</a>
			<a href="/" target="__none">
				<div className="aboutLinkItem">
					<div className="aboutLinkName">Discord</div>
					<div className="aboutLinkIcon"></div>
				</div>
			</a>
			
		</div>
		<div className="aboutLinks">
			<a href="/skills">
				<div className="aboutLinkItem">
					<div className="aboutLinkName">Skills</div>
					<div className="aboutLinkIcon"></div>
				</div>
			</a>
		</div>
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