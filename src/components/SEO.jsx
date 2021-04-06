
import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo';


export function SearchEngineOptimization (props) {
  console.log(props);
  let title = (props.titleExt !== undefined) ? 'Jasper M-W | '  + props.titleExt : 'Jasper M-W';
  console.log((props.description !== undefined) ? props.description : "Jasper Miller-Waugh's (Fallstop) portfolio");

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
          ],
        }}
      />
    </div>
  )
}