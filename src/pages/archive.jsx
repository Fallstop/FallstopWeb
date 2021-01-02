import React from "react";
import StandardLayout from "../components/StandardLayout";
import {useStaticQuery, graphql } from 'gatsby';

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
			<a href={node.frontmatter.slug} key={node.frontmatter.slug}>
				<article className="projectBox" >
					<span className="projectTitle">{node.frontmatter.title}</span>
                    <span className="projectDate">{node.frontmatter.date}</span>
                    <div className="projectDescription">{node.frontmatter.description}</div>
				</article>
			</a>
		);
	});
    return (
        <StandardLayout className="archive">
            <div className="archiveTitle">Project Archive</div>
            {projectElements}
        </StandardLayout>
    )
}