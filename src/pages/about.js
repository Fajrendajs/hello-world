import { Link } from "gatsby"
import * as React from "react"
import Layout from "../components/layout"

const About = () => {
  return (
    <main>
      <Layout></Layout>
      <div>about</div>
      <Link to="/">About</Link>
    </main>
  )
}

export default About
