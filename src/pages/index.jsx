import React from "react";

import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';

import Header from "../components/Header";
import InfoContainer from "../components/Info";
import StyledBackgroundSection from "../components/BackgroundSection"


const landingContainer = (
	<div className="landingContainer">
		<div className="content">
			<h1 className="title">Jasper M-W</h1>
			<p className="subtitle">Not a bot</p>
		</div>
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

export default function Home() {
	return (
		<div className="landingPage">
			
			<StyledBackgroundSection>
				{landingContainer}
				{horizontalRule}
			</StyledBackgroundSection>
			<InfoContainer/>
			

		</div>
	)
};



