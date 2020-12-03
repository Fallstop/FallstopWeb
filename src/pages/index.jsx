import React from "react";

import BackgroundImage from 'gatsby-background-image';
import { graphql, StaticQuery } from 'gatsby';

import Header from "../components/Header";
import InfoContainer from "../components/Info";
import StyledBackgroundSection from "../components/BackgroundSection"


const landingContainer = (
	<div className="landingContainer">
		<div class="content">
			<h1 class="title">Jasper M-W</h1>
			<p class="subtitle">Not a bot</p>
		</div>
		<a class="revealContainer" href="#section2">
			<span>See More</span>
			<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chevron-down" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
				<path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
			</svg>
		</a>
	</div>
)


const horizontalRule = (
	<hr class="horizontalRule" id="section2" />
)

export default function Home() {
	return (
		<div className="home">
			{Header}
			<StyledBackgroundSection>
				{landingContainer}
				{horizontalRule}
				<InfoContainer/>
			</StyledBackgroundSection>
			

		</div>
	)
};



