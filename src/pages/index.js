import React from "react"
import Layout from '../components/layout'
import Hero from '../components/hero/hero'
import LatestPosts from "../components/latestPosts/latestPosts"
import About from "../components/about/about"
import Contact from "../components/contact/contact"
import Work from "../components/work/work"
import Footer from "../components/footer/footer"

const Home = () => {
  return(
    <Layout>
      <Hero />
      <About />
      <Work />
      <LatestPosts />
      <Contact />
      <Footer />
    </Layout>
  )
}

export default Home