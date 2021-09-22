import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import Projects from '../components/projects/projects'


const Home = () => {
  return(
    <Layout>
      <Hero />
      <Projects />
    </Layout>
  )
}

export default Home