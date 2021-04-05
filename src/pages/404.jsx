import React from "react";
import StandardLayout from "../components/StandardLayout";
import { SearchEngineOptimization } from "../components/SEO";

import '../styles/404.scss';

export default function Home() {
	return (
		<>
			<SearchEngineOptimization titleExt="404" description="What did you expect, it's a 404 page." />
			<StandardLayout className="NotFoundErrorPage">
				<div className="title">404</div>
				<div className="subtitle">PAGE NOT FOUND</div>
				<div className="definition">
					<span className="content">"The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible."</span><br />
					<span className="attribution">-Wikipedia, {new Date().getFullYear()}</span>
				</div>
				<div className="homeWrapper">
					<a className="goBackToHomeButton" href="/"><div>Want to go back to home?</div></a>
				</div>

			</StandardLayout>
		</>
	);
};