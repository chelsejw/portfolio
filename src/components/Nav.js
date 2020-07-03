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
          <li><a onClick={() => scrollTo("#top")}>Back To Top</a></li>
          <li><a onClick={() => scrollTo("#about")}>About</a></li>
          <li><a onClick={() => scrollTo("#portfolio")}>Portfolio</a></li>
          <li><a onClick={() => scrollTo("#stack")}>Stack</a></li>
          <li><a onClick={() => scrollTo("#career")}>Career</a></li>
          <li><a onClick={() => scrollTo("#contact")}>Contact</a></li>

          {/* <li onClick={() => scrollTo("#top")}>Back To Top</li>
          <li onClick={() => scrollTo("#who")}>About</li>
          <li onClick={() => scrollTo("#portfolio")}>Portfolio</li>
          <li onClick={() => scrollTo("#stack")}>Stack</li>
          <li onClick={() => scrollTo("#career")}>Career</li>
          <li onClick={() => scrollTo("#contact")}>Contact</li> */}
        </ul>
      </div>
    )
}