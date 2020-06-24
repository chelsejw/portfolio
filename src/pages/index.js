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
      <div className="section" id="stack">
        <h1>Tech Stack</h1>
        <p>
          <span className="text-purple">Full stack developer</span> with 2+
          years experience in television production. The industry sparked a
          longing to create tools that simplify manual processes, freeing up
          time to think about the things that matter.
        </p>
      </div>
    </Layout>
  )
}
