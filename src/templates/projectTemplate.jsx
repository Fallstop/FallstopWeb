import React from "react"
import { graphql } from "gatsby"

export default function Template({ data, }) {
	const { markdownRemark, site } = data // data.markdownRemark holds your post data
	const { frontmatter, html } = markdownRemark;
	const { siteTagline, siteTitle } = site.siteMetadata;
	return (
		<div className="project">
			<div className="projectBackground"></div>
			<div className="siteHeader">
				<div className="siteName">{siteTitle}</div>
				<div className="siteTagline">{siteTagline}</div>

			</div>
			<div className="projectContainer">
				<div className="projectTitle">
					<h1>{frontmatter.title}</h1>
					<h2 >{frontmatter.date}</h2>
				</div>
				<div
						className="projectContent"
						dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>

		</div>
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
		site {
			siteMetadata {
				siteTitle
				siteTagline
			}
		}
	}
`