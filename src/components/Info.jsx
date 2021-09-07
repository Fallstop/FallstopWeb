import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import { MailIcon, DiscordIcon, GithubIcon, ToolsIcon } from './SVGS';


const ProjectArchiveButton = (props) => {
	console.log('Project Count Query', props.ProjectCountQuery);
	if (props.ProjectCountQuery > 6) {
		return <div className="projectSeeMore">
			<Link to="/archive" about="Go to the Project Archive Page">
				{props.ProjectCountQuery - 6} More Project{(props.ProjectCountQuery > 7) ? "s" : ""}
			</Link>
		</div>;
	} else {
		return <></>;
	}

};

const ProjectContainer = () => {
	let projectElements = [];
	const MarkdownFiles = useStaticQuery(
		graphql` {
			allMarkdownRemark(
			sort: { order: DESC, fields: [frontmatter___date] }
			limit: 6
			) {
				totalCount
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
	const ProjectCountQuery = MarkdownFiles.allMarkdownRemark.totalCount;


	MarkdownFiles.allMarkdownRemark.edges.forEach(({ node }) => {
		projectElements.push(
			<Link to={node.frontmatter.slug} key={node.frontmatter.slug}>
				<article className="projectBox" >
					<span className="projectTitle">{node.frontmatter.title}</span>
				</article>
			</Link>

		);
	});

	return <div className="projectsContainer">
		<div className="projectsFlex">
			{projectElements}
		</div>

		<ProjectArchiveButton ProjectCountQuery={ProjectCountQuery} />
	</div>;
};

const AboutMe = () => {
	return <div className="aboutMe">
		<div className="aboutInfoContainer">
			<div className="aboutQuickView">
				<h3 className="aboutName">Jasper Miller&#x2011;Waugh</h3>
				<span className="aboutUsername">Fallstop</span>
				<div className="aboutLinks">
					<a href="mailto:contact@jmw.nz" target="__none" className="tooltip">
						<span className="tooltiptext">Wow</span>
						<div className="aboutLinkItem">
							<span className="aboutLinkName">Email - <span className="aboutLinkNameSubtext">contact@jmw.nz</span></span>
							<span className="aboutLinkIcon">
								<MailIcon />
							</span>
						</div>
					</a>
					<a href="https://github.com/Fallstop" target="__none">
						<div className="aboutLinkItem">
							<span className="aboutLinkName">Github - <span className="aboutLinkNameSubtext">Fallstop</span></span>
							<span className="aboutLinkIcon">
								<GithubIcon />
							</span>
						</div>
					</a>
					<a href="https://discordapp.com/users/310135293254696970" target="__none">
						<div className="aboutLinkItem">
							<span className="aboutLinkName">Discord - <span className="aboutLinkNameSubtext">fallstop#3106</span></span>
							<span className="aboutLinkIcon">
								<DiscordIcon />
							</span>
						</div>
					</a>

				</div>
			</div>
			<div className="aboutPersonalInformation">
				<h3 className="aboutPersonalHeader">Confirmed Bot</h3>
				<div className="aboutPersonalSubheader">I am a software developer/stack overflow expert that likes to experiment in new technologies.</div>

				I am currently studying in Huanui Collage (Y11) and contract part time for website design/various other things. I am also a full time
				member of <a href="https://questionable.org.nz" style={{ color: "#007acc" }} target="__none">Questionable Research Labs</a>,
				and you might also find many of my projects are supported by them and their members.
				<br /><br />
				I also love learning and using new tools:
				<div className="aboutLinks centerAlign">
					<Link to="/tools">
						<div className="aboutLinkItem">
							<span className="aboutLinkName">My Tools</span>
							<span className="aboutLinkIcon"><ToolsIcon /></span>
						</div>
					</Link>
				</div>
			</div>

		</div>


	</div>;
};

const InfoContainer = () => {
	return (
		<div className="infoContainer">
			<div className="content">
				<h2 className="header" id="projectSection">Projects</h2>
				<ProjectContainer />
				<h2 className="header" id="aboutMeSection">About Me</h2>
				<AboutMe />
			</div>
		</div>);
};
export default InfoContainer;