import React from "react";
import StandardLayout from "../components/StandardLayout";
import { SearchEngineOptimization } from "../components/SEO";

export default function Home() {
	return (
		<>
		<SearchEngineOptimization/>
			<StandardLayout className="NotFoundErrorPage">
				<div className="title">Project Archive</div>
			</StandardLayout>
		</>
	);
};