import React from "react"
import Layout from '../components/layout'
import Header from '../components/header'
export default function Home() {
  return (
    <Layout>
      <Header />

      <div className="section" id="about">
        <h1>Who am I?</h1>
        <p>
          <span className="text-lavender">Full stack developer</span> with 2+
          years experience in television production. The industry sparked a
          longing to create tools that simplify manual processes, freeing up
          time to think about the things that matter.
          </p>
          <p> As a television producer, the <span className="text-lavender">glue</span> of large collaborative teams, I have honed my skills in problem solving, time management and communication.
          </p>
          <p>
            The fast-paced nature of my role has also trained me to <span className="text-lavender">work well under pressure</span>, and respond to unexpected changes or expectations from both clients and stakeholders. 
        </p>
      </div>
      <div className="section" id="portfolio">
        <h1>Portfolio</h1>

        <div className="showcase">
          <img alt="lifelines portfolio screenshot" src="https://res.cloudinary.com/dwbuqa4dx/image/upload/v1593760885/Screenshot_2020-07-02_at_6.24.59_PM_qevypc.png"/>

          <h3>Lifelines</h3>
          <div className="showcase-stack">
            <ul className="stack">
              <li>JavaScript</li>
              <li>React.js + Redux</li>
              <li>Ruby on Rails</li>
              <li>PostgreSQL</li>
              <li>RESTful APIs</li>
              <li>Bootstrap</li>
            </ul>
          </div>
          <p>Inspired by a Facebook post about a dog passing away before a blood donor could be found, Lifelines was built as a platform for owners and vets to seek pet blood donors and maximise the reach of appeals, with email/Telegram (WIP) notifications and in-app chat. React front-end with Rails/PostgreSQL back-end.</p>
          <p>
            <a href="https://lifelines.herokuapp.com/">Demo</a> | <a href="https://github.com/chelsejw/lifelines">Github Repo</a>
          </p>
        </div>

        <hr/>

        <div className="showcase">
          <img alt="javascript uno portfolio screenshot" src="https://res.cloudinary.com/dwbuqa4dx/image/upload/v1593761023/Screenshot_2020-07-03_at_3.23.29_PM_je0hxe.png"/>

          <h3>Javascript Uno</h3>
          <div>
            <ul className="stack">
              <li>JavaScript</li>
              <li>CSS / HTML</li>
              
            </ul>
          </div>
          <p>A replica of Uno written in pure JavaScript, CSS and HTML. Cards rendered with CSS.</p>
          <p>
          <a href="https://chelsejw.github.io/javascript-uno/">Demo</a> | <a href="https://github.com/chelsejw/javascript-uno">Github Repo</a>
          </p>
        </div>

        <hr/>


        <div className="showcase">
          <img alt="tattoo me portfolio screenshot"src="https://res.cloudinary.com/dwbuqa4dx/image/upload/v1593761938/Screenshot_2020-07-03_at_3.38.39_PM_cqbk3s.png"/>
          <h3>tattoo.me</h3>
          <div>
            <ul className="stack">
              <li>JavaScript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Bootstrap</li>
              <li>React.js</li>
              <li>PostgreSQL</li>
              <li>RESTful APIs</li>

            </ul>
          </div>

          <p>A database for tattoo enthusiasts to seek tattoo artists by country and style, inspired by Instagram’s single hashtag search limit, preventing users from searching for a #finelinetattoo artist in #Singapore. React front-end, Node/Express/PostgreSQL back-end. </p>
          <p>
          <a href="https://stormy-chamber-08015.herokuapp.com/">Demo</a> | <a href="https://github.com/chelsejw/tattoo-me">Github Repo</a>
          </p>
        </div>

        
      </div>


      
      <div className="section" id="stack">
        <h1>Tech Stack</h1>
        <ul className="stack">
          <li>Javascript</li>
          <li>CSS / HTML</li>
          <li>Bootstrap</li>
          <li>React.js + Redux</li>
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
          <span className="career-sub">Jan 2019 - Nov 2019</span>
          <ul>
            <li>Implemented a Google Sheets tracking system to help monitor milestones and schedules at a glance, improving workflow</li>
            <li>Facilitated communications between all stakeholders, shortening project delivery times</li>
            <li>Drafted delivery schedules and timelines, ensuring that project expectations across teams were met</li>
          </ul>
        </div>

        <hr/>
        
        <div className="job">
          <span className="career-title">Assistant Producer | <span className="text-lavender">Long Story Short</span></span>
          <span className="career-sub">Jun 2018 - Sep 2018</span>
          <ul>
            <li>Planned and executed a week-long shoot in Japan for a halal food travel show</li>
            <li>Wrote a base script for the head writer, including extensive fact-checking and research on requested topics</li>
            <li>Drafted budgets, schedules and travel plans</li>
          </ul>
        </div>
        <hr/>

        <div className="job">
          <span className="career-title">Assistant Producer/Intern | <span className="text-lavender">IFA Media</span></span>
          <span className="career-sub">Intern: Sep 2015 - Feb 2016</span>
          <span className="career-sub">Full-time: Feb 2016 - June 2016</span>
          <ul>
            <li>Worked on shows for E! Entertainment, Channel 5 and National Geographic</li>
            <li>Reached out to and secured majority of sponsors for shoots, saving on production costs</li>
            <li>Searched online databases to identify academic sources for documentary material, passing rigorous fact-checking by clients</li>
          </ul>
        </div>

      </div>

      <div className="section" id="contact">
        <h1>Contact Me</h1>

        <div>
        <i className="icon fas fa-phone"></i>(65) 9231 4672
        <br/><i class="fab icon fa-whatsapp"></i><a href="https://wa.me/6592314672">WhatsApp</a>
        <br/><i className="icon fas fa-envelope"></i>chelsejw@gmail.com
        <br/><i class="fab fa-github icon"></i><a href="https://github.com/chelsejw">chelsejw</a>
        <br/><i class="icon fab fa-linkedin"></i><a href="https://linkedin.com/in/chelsea-ee">chelsea-ee</a>
        </div>
      </div>
    </Layout>
  )
}
