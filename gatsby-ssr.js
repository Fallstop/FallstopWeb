import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <link key="fonts" href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;700&family=Open+Sans&display=swap" rel="stylesheet"></link>
  ])
}