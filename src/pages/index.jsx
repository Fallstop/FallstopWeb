import React from "react";

import { graphql } from 'gatsby';
import {Helmet} from 'react-helmet'

import InfoContainer from "../components/Info";
import { BackgroundSection } from "../components/BackgroundSection"
import { FallstopLogoBW } from "../components/SVGS"
import { SearchEngineOptimization } from "../components/SEO";
import MODData from '../../content/mod.json';

import "../styles/index.scss";


function changeBackground() {
	// var myDiv = document.getElementsByClassName("PrimaryBackground");
	var style = document.createElement('style');
	style.type = 'text/css';
	style.id = "BackgroundChanger"
	style.innerHTML = `
	.PrimaryBackground:after {
		transition: all ease 200ms;
		background-image: url("https://source.unsplash.com/collection/wallpapers/?night,nature#`+ Math.random() + `") !important;
	}
	.PrimaryBackground {
		backdrop-filter: brightness(0.5);
		
	}
	.InfoContainerBackground {
		transition: all ease 200ms;
		background-image: url("https://source.unsplash.com/collection/wallpapers/?night,nature#`+ Math.random() + `") !important;
	}
	.InfoContainerBackground:before {
		backdrop-filter: blur(20px) brightness(0.8)
	}
	`;
	let existingStyle = document.getElementById("BackgroundChanger")
	if (existingStyle === null) {
		document.getElementsByTagName('head')[0].appendChild(style);
	} else {
		existingStyle.parentNode.replaceChild(style, existingStyle);
	}


}
function deactivateTypewriterEffect() {
	var inputElement = document.getElementById("typingBoxSubtitle");
	inputElement.setAttribute('style', 'border-right-color: transparent !important');
	console.log("Yes.");
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function LandingContainer() {
	let messageOfTheDay = MODData[getRandomInt(MODData.length - 1)]
	console.log(messageOfTheDay);

	// Hack because gatsby helpfully caches inline styles in run time
	if (typeof window !== `undefined`) { // Only runs in browser
		let style = document.createElement('style');
		// Styling for typingBoxSubtitle, which might not exist yet
		style.innerHTML = `
		:root {
			--message-length: ${messageOfTheDay.text.length};
			--message-width: ${messageOfTheDay.width};
		}
		`;
		document.head.appendChild(style);

		document.getElementById("typingBoxSubtitle").value = messageOfTheDay.text
	}

	return (
		<div className="landingContainer">
			<div className="content">
				<h1 className="title">Jasper M-W</h1>
				<textarea id="typingBoxSubtitle" wrap="soft" className="subtitle typewriterEffect" onChange={deactivateTypewriterEffect}></textarea>

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
}


const horizontalRule = (
	<hr className="horizontalRule" id="section2" />
)

export default function Home({ data, }) {
	// const { siteTagline, siteTitle } = data.site.siteMetadata;
	return (
		<div>
			<SearchEngineOptimization />
			<Helmet>
				{/* Cloudflare Analytics */}
				<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "97acb8c56e6d419fb2f579b634165387"}'></script>
			</Helmet>
			<div className="landingPage">

				<BackgroundSection className="PrimaryBackground section">
					<LandingContainer />
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