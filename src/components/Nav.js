import React from 'react'
import {Link} from 'gatsby'

export default function Nav (props) {
    return (
      <div className="nav">
        <h3>Chelsea E.</h3>
        <ul>
          <li>
            <Link to="#top">Back to Top</Link>
          </li>
          <li>
            <Link to="#who">About</Link>
          </li>
          <li>
            <Link to="#stack">Stack</Link>
          </li>
        </ul>
      </div>
    )
}