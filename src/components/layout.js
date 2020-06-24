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
      </Helmet>
      <div id="top"></div>
      <Nav/>
      <div
        style={{ margin: `3rem auto`, width: "75%", padding: `0 1rem` }}
      >
        {children}
      </div>
    </div>
  )
}
