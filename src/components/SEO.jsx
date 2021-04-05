
import React from 'react'
import { GatsbySeo } from 'gatsby-plugin-next-seo';


export function SearchEngineOptimization (props) {
  console.log(props);
  let title = (props.titleExt !== undefined) ? 'Jasper M-W | '  + props.titleExt : 'Jasper M-W';
  let description = (props.description !== undefined) ? props.description : "Jasper Miller-Waugh's (Fallstop) portfolio";
  return (
    <div>
      <GatsbySeo
        title={title}
        description={description}
        language="en"
        openGraph={{
          title: 'Jasper M-W/Fallstop | Portfolio',
          description: 'Jasper M-W | ' + {description},
          type: 'profile',
          profile: {
            firstName: 'Jasper',
            lastName: 'Miller-Waugh',
            username: 'fallstop',
            gender: 'male',
          },
          // images: [
          //   {
          //     url: 'https://www.test.ie/images/profile.jpg',
          //     width: 850,
          //     height: 650,
          //     alt: 'Profile Photo',
          //   },
          // ],
        }}
      />
    </div>
  )
}