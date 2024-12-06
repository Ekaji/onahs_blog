
import React from "react"
// import Layout from '../components/layout'
import Hero from '../components/hero/hero'
// import LatestPosts from "../components/latestPosts/latestPosts"
import About from "../components/about/about"
import Contact from "../components/contact/contact"
import Work from "../components/work/work"
import Footer from "../components/footer/footer"

export default async function Index() {
  return(
    <>
      <Hero />
      <About />
      <Work />
      {/* <LatestPosts /> */}
      <Contact />
      <Footer />
    </>
  )
}

// export default Home