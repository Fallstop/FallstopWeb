
import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo';


export function SearchEngineOptimization (props) {
  console.log(props);
  let title = (props.titleExt !== undefined) ? 'Jasper M-W | '  + props.titleExt : 'Jasper M-W';
  console.log((props.description !== undefined) ? props.description : "Jasper Miller-Waugh's (Fallstop) portfolio");
	let ogImage = props.ogImage;
	if (typeof ogImage==="undefined") {
		ogImage = '/OG_front_page.jpg';
	}
  let description = (props.description !== undefined) ? props.description : "Jasper Miller-Waugh's (Fallstop) portfolio";
  return (
    <div>
      <GatsbySeo
        title={title}
        description={description}
        language="en"
        openGraph={{
          title: title,
          description: description,
          type: 'profile',
          profile: {
            firstName: 'Jasper',
            lastName: 'Miller-Waugh',
            username: 'fallstop',
            gender: 'male',
          },
          images: [
            {
              url: 'https://jmw.nz/icons/icon-512x512.png',
              width: 512,
              height: 512,
              alt: 'Fallstop Logo',
            },
            {
              url: 'https://jmw.nz' + ogImage,
              width: 1200,
              height: 630,
              alt: title,
            },
          ],
        }}
      />
    </div>
  )
}