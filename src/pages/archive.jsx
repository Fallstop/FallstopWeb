import React from "react";

import StandardLayout from "../components/StandardLayout";
import { SEO } from "../components/SEO";

import {useStaticQuery, graphql, Link } from 'gatsby';



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
        <SEO titleExt="Archive" description="Jasper Miller-Waugh's archive of past projects."/>
        <StandardLayout className="archive">
            <div className="archiveTitle">Project Archive</div>
            {projectElements}
        </StandardLayout>
      </>
    )
}