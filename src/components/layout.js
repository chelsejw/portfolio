import React from "react"
import Nav from './Nav'
//? Note: for some reason, sass doesn't work. Scss works.

import "../styles/global.scss"

import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Chelsea E.</title>
        <link rel="icon" href="https://res.cloudinary.com/dwbuqa4dx/image/upload/v1593768219/favicon-32x32_jaqtz9.png"/>
        <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"
  />
  <script src="https://kit.fontawesome.com/da6a700eef.js" crossorigin="anonymous"></script>
  <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet"/>

      </Helmet>
      <div id="top"></div>
      <Nav/>
      <div>
        {children}
      </div>
    </div>
  )
}
