import React from "react"
export default function Header(props) {
  return (
    <div className="header  animate__animated animate__slideInDown">
      <img className="header-img" alt="picture of chelsea" src="https://res.cloudinary.com/dwbuqa4dx/image/upload/v1593677535/IMG_4555-5_rczbke.jpg"/>
      <div className="header-left">
        <h1>
          Chelsea Ee
        </h1>
        <p className="title">Software Engineer, ex-television producer</p>
      </div>
    </div>
  )
}
