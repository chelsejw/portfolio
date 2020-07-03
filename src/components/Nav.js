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
        <h2>Chelsea E.</h2>
        <ul>
          <li onClick={() => scrollTo("#top")}>Back To Top</li>
          <li onClick={() => scrollTo("#who")}>About</li>
          <li onClick={() => scrollTo("#stack")}>Stack</li>
          <li onClick={() => scrollTo("#portfolio")}>Portfolio</li>
          <li onClick={() => scrollTo("#career")}>Career</li>

          <li onClick={() => scrollTo("#contact")}>Contact</li>
        </ul>
      </div>
    )
}