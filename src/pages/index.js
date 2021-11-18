import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import Projects from '../components/projects/projects'
import LatestPosts from "../components/latestPosts/latestPosts"
import About from "../components/about/about"

const Home = () => {
  return(
    <Layout>
      <Hero />
      <About />
      <Projects />
      <LatestPosts />
    </Layout>
  )
}

export default Home