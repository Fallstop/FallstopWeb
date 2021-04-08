import React from "react";

import { graphql } from 'gatsby';

import InfoContainer from "../components/Info";
import { BackgroundSection } from "../components/BackgroundSection"
import { FallstopLogoBW } from "../components/SVGS"
import { SearchEngineOptimization } from "../components/SEO";

import "../styles/index.scss";


function changeBackground() {
	// var myDiv = document.getElementsByClassName("PrimaryBackground");
	var style = document.createElement('style');
	style.type = 'text/css';
	style.id = "BackgroundChanger"
	style.innerHTML = `
	.PrimaryBackground:after {
		transition: all ease 200ms;
		background-image: url("https://source.unsplash.com/collection/wallpapers/?night,nature#`+Math.random()+`") !important;
	}
	.PrimaryBackground {
		backdrop-filter: brightness(0.5);
		
	}
	.InfoContainerBackground {
		transition: all ease 200ms;
		background-image: url("https://source.unsplash.com/collection/wallpapers/?night,nature#`+Math.random()+`") !important;
	}
	.InfoContainerBackground:before {
		backdrop-filter: blur(20px) brightness(0.8)
	}
	`;
	let existingStyle = document.getElementById("BackgroundChanger")
	if (existingStyle === null) {
		document.getElementsByTagName('head')[0].appendChild(style);
	} else {
		existingStyle.parentNode.replaceChild(style,existingStyle);
	}


}
function deactivateTypewriterEffect() {
	var inputElement = document.getElementById("typingBoxSubtitle");
	inputElement.setAttribute('style', 'border-right-color: transparent !important');
	console.log("Yes.");
}

const landingContainer = (
	<div className="landingContainer">
		<div className="content">
			<h1 className="title">Jasper M-W</h1>
			<input id="typingBoxSubtitle" className="subtitle typewriterEffect" defaultValue="Under Development." onChange={deactivateTypewriterEffect}></input>

		</div>
		<div className="centerLogo"
			onClick={changeBackground}
			onKeyDown={function handleKeyDown(e) { if (e.keyCode === 13 || e.keyCode === 32) { e.preventDefault(); changeBackground(); } }}
			role="button"
			tabIndex={0} >
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
			<SearchEngineOptimization />
			<div className="landingPage">

				<BackgroundSection className="PrimaryBackground section">
					{landingContainer}
					{horizontalRule}
				</BackgroundSection>
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