import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import Projects from '../components/projects/projects'
import LatestPosts from "../components/latestPosts/latestPosts"
import About from "../components/about/about"
import Contact from "../components/contact/contact"
import Work from "../components/work/work"

const Home = () => {
  return(
    <Layout>
      <Hero />
      <About />
      {/* <Projects /> */}
      <Work />
      <LatestPosts />
      <Contact />
    </Layout>
  )
}

export default Home