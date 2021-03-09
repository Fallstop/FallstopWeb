import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby';

const StandardLayout = ({ className, children}) => {
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
                <div className="standardLayoutBackButton">
                    <Link to="/" id="standardLayoutBackLink">
                        <svg xmlns="http://www.w3.org/2000/svg" width="36px" height="36px" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </Link>
                </div>
                <div className={className}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default StandardLayout;