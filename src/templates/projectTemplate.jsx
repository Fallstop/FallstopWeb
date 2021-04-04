import React from "react"
import InnerHTML from 'dangerously-set-html-content'
import { graphql } from "gatsby"
import { defineCustomElements as deckDeckGoHighlightElement } from '@deckdeckgo/highlight-code/dist/loader';



import StandardLayout from "../components/StandardLayout";
import { SEO } from "../components/SEO";

import "../styles/projects.scss";

export default function Template({ data, }) {
	deckDeckGoHighlightElement();
	const { frontmatter, html, fields } = data.markdownRemark;
	
	return (
		<>
			<SEO titleExt={frontmatter.title} description={frontmatter.description} />
			<StandardLayout className="projectPage">
				<div className="projectTitle">
					<h1>{frontmatter.title}</h1>
					<div className="summary">
					<span className="date">
							{frontmatter.date}
						</span> | 
						<span className="reading_time">
							{fields.readingTime.text}
						</span>
					</div>
				</div>
				<InnerHTML
					className="projectContent markdownStyling"
					html={html}
				/>
			</StandardLayout>
		</>
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
			fields {
				readingTime {
					text
				}
			}

		}
	}
`