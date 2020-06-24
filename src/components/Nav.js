import React from 'react'
import {Link} from 'gatsby'
import scrollTo from "gatsby-plugin-smoothscroll"

export default function Nav (props) {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line global-require
      require("smooth-scroll")('a[href*="#"]')
    }
    return (
      <div className="nav">
        <h3>Chelsea E.</h3>
        <ul>
          <li onClick={() => scrollTo("#top")}>Back to Top</li>
          <li onClick={() => scrollTo("#who")}>About</li>
          <li onClick={() => scrollTo("#stack")}>Stack</li>
        </ul>
      </div>
    )
}