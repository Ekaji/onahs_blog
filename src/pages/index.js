import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import Projects from '../components/projects/projects'
import LatestPosts from "../components/latestPosts/latestPosts"

const Home = () => {
  return(
    <Layout>
      <Hero />
      <Projects />
      <LatestPosts />
      <LatestPosts />
    </Layout>
  )
}

export default Home