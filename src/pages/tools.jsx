import React from "react";
import StandardLayout from "../components/StandardLayout";
import toolsContent from '../../content/tools.json';
import { SearchEngineOptimization } from "../components/SEO";
import {Helmet} from 'react-helmet'


import "../styles/tools.scss"

const ToolsContainer = () => {
	let toolItems = [];

	for (let i in toolsContent.sectors) {
		let sector = toolsContent.sectors[i];
		let toolSector = [];

		for (let j in sector.content) {
			let tool = sector.content[j];
			toolSector.push(
				<div className="toolItem" key={j + 2}>
					<div className="toolName">{tool.name}</div>
					<div className="toolSummary">{tool.description}</div>
				</div>
			);
		}
		toolItems.push(
			<div key={i}>
				<div className="subtitle">{sector.title}</div>
				<div className="toolClass">
					{toolSector}
				</div>

			</div>);
	}
	return <div>{toolItems}</div>;
}

export default function Home() {
    return (
		<>
		<SearchEngineOptimization titleExt="Tools" description="All the tools/platforms/hosts I use as part of my environment."/>
		<Helmet>
				{/* Cloudflare Analytics */}
				<script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "97acb8c56e6d419fb2f579b634165387"}'></script>
			</Helmet>
        <StandardLayout className="toolPage">
            <h2 className="header">Top Tools</h2>
            <div className="toolsContainer">
                <ToolsContainer />
            </div>
        </StandardLayout>
		</>
    )
}