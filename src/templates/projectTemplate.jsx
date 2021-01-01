import React from "react"
import { graphql } from "gatsby"
import StandardLayout from "../components/StandardLayout";

export default function Template({ data, }) {
	const { frontmatter, html } = data.markdownRemark;
	return (
		<StandardLayout className="projectPage">
				<div className="projectTitle">
					<h1>{frontmatter.title}</h1>
					<h2 >{frontmatter.date}</h2>
				</div>
				<div
						className="projectContent"
						dangerouslySetInnerHTML={{ __html: html }}
				/>
		</StandardLayout>
	)
}

export const pageQuery = graphql`
	query($slug: String!) {
		markdownRemark(frontmatter: { slug: { eq: $slug } }) {
			html
			frontmatter {
				date(formatString: "MMMM DD, YYYY")
				slug
				title
			}
		}
	}
`