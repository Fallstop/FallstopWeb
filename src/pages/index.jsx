import React from "react";

import { graphql } from 'gatsby';

import InfoContainer from "../components/Info";
import StyledBackgroundSection from "../components/BackgroundSection"
import { FallstopLogoBW } from "../components/SVGS"
import { SEO } from "../components/SEO";

function openNotARickRoll () {
	window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ');
}

const landingContainer = (
	<div className="landingContainer">
		<div className="content">
			<h1 className="title">Jasper M-W</h1>
			<p className="subtitle">Under Devlopment.</p>
		</div>
		<div className="centerLogo" onClick={openNotARickRoll} >
			<FallstopLogoBW />
		</div>
		<script>
		</script>
		<a className="revealContainer" href="#section2">
			<span>See More</span>
			<svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
			</svg>
		</a>
	</div>
)


const horizontalRule = (
	<hr className="horizontalRule" id="section2" />
)

export default function Home({ data, }) {
	// const { siteTagline, siteTitle } = data.site.siteMetadata;
	return (
		<div>
			<SEO />
			<div className="landingPage">

				<StyledBackgroundSection>
					{landingContainer}
					{horizontalRule}
				</StyledBackgroundSection>
				<div className="InfoContainerBackground"></div>
				<InfoContainer />


			</div>
		</div>
	)
}

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				siteTitle
				siteTagline
			}
		}
	}
`