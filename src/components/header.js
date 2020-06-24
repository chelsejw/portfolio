import React from "react"
export default function Header(props) {
  return (
    <div className="header section">
      <div className="header-left">
        <h1>
          Driven by real-world problems to create tools to simplify manual
          processes, freeing up time to think about the things that matter.
        </h1>
      </div>
      <div className="header-right">
        <img
          className="headshot"
          alt="chelsea-headshot"
          src="https://res.cloudinary.com/dwbuqa4dx/image/upload/v1592989779/headshot_v6chba.jpg"
        />
      </div>
    </div>
  )
}
