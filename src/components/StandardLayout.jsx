import React from "react"
import { useStaticQuery, graphql } from 'gatsby';

const StandardLayout = ({ className, children }) => {
    const siteQuery = useStaticQuery(
        graphql`{
            site {
                siteMetadata {
                    siteTitle
                    siteTagline
                }
            }
        }
    `);

	const { siteTagline, siteTitle } = siteQuery.site.siteMetadata;
    return (
        <div className="standardLayout">
            <div className="standardLayoutBackground"></div>
            <div className="siteHeader">
				<div className="siteName">{siteTitle}</div>
				<div className="siteTagline">{siteTagline}</div>

			</div>
            <div className="standardLayoutContainer">
                <div className={className}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default StandardLayout;