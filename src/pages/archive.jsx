import React from "react";

import StandardLayout from "../components/StandardLayout";
import { SearchEngineOptimization } from "../components/SEO";

import { useStaticQuery, graphql, Link } from 'gatsby';
import {Helmet} from 'react-helmet'

import "../styles/archive.scss";

export default function Home({ data, }) {
	const projectList = useStaticQuery(
		graphql` {
				allMarkdownRemark(
					sort: { order: DESC, fields: [frontmatter___date] }
					limit: 50
				) {
					edges {
						node {
							frontmatter {
								slug
				title
								date
								description
							}
						}
					}
				}
			}
		`);
	let projectElements = [];
	projectList.allMarkdownRemark.edges.forEach(({ node }) => {
		projectElements.push(
			<Link to={node.frontmatter.slug} key={node.frontmatter.slug}>
				<article className="projectBox" >
					<span className="projectTitle">{node.frontmatter.title}</span>
					<span className="projectDate">{node.frontmatter.date}</span>
					<div className="projectDescription">{node.frontmatter.description}</div>
				</article>
			</Link>
		);
	});
	return (
		<>
			<SearchEngineOptimization titleExt="Archive" description="Jasper Miller-Waugh's archive of past projects." />
			<Helmet>
				{/* Cloudflare Analytics */}
				<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "97acb8c56e6d419fb2f579b634165387"}'></script>
			</Helmet>
			<StandardLayout className="archive">
				<div className="archiveTitle">Project Archive</div>
				{projectElements}
			</StandardLayout>
		</>
	);
}