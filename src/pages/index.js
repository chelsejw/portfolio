import React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
export default function Home() {
  return (
    <Layout>
      <Header />

      <div className="section" id="who">
        <h1>Who am I?</h1>
        <p>
          <span className="text-purple">Full stack developer</span> with 2+
          years experience in television production. The industry sparked a
          longing to create tools that simplify manual processes, freeing up
          time to think about the things that matter.
        </p>
      </div>

      <div className="section" id="portfolio">
        <h1>Portfolio</h1>
      </div>
      <div className="section" id="stack">
        <h1>Tech Stack</h1>
        <ul className="stack">
          <li>Javascript</li>
          <li>React.js with Redux</li>
          <li>Ruby on Rails</li>
          <li>RESTful APIs</li>
          <li>Express.js</li>
          <li>Node.js</li>
          <li>PostgreSQL</li>
        </ul>
      </div>
      <div className="section" id="career">
        <h1>Career History</h1>
        <div className="job">
          <span className="career-title">Assistant Producer | <span className="text-lavender">MTV & Comedy Central</span></span>
          <span className="career-sub">February 2019 - November 2019</span>
          <ul>
            <li>Point</li>
            <li>Point</li>
            <li>Point</li>
          </ul>
        </div>
        <hr/>
        <div className="job">
          <span className="career-title">Assistant Producer | <span className="text-lavender">Long Story Short</span></span>
          <span className="career-sub">February 2019 - November 2019</span>
          <ul>
            <li>Point</li>
            <li>Point</li>
            <li>Point</li>
          </ul>
        </div>
        <hr/>

        <div className="job">
          <span className="career-title">Assistant Producer/Intern | <span className="text-lavender">IFA Media</span></span>
          <span className="career-sub">February 2019 - November 2019</span>
          <ul>
            <li>Point</li>
            <li>Point</li>
            <li>Point</li>
          </ul>
        </div>

      </div>


      <div className="section" id="contact">
        <h1>Contact Me</h1>
      </div>
    </Layout>
  )
}
