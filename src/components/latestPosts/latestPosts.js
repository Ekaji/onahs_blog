import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const LatestPosts = () => {

const responsive = {
    superLargeDesktop: { // the naming can be any, depends on you.
        breakpoint: {
            max: 4000,
            min: 3000
        },
        items: 5
    },
    desktop: {
        breakpoint: {
            max: 3000,
            min: 1024
        },
        items: 3
    },
    tablet: {
        breakpoint: {
            max: 1024,
            min: 464
        },
        items: 2
    },
    mobile: {
        breakpoint: {
            max: 464,
            min: 0
        },
        items: 1
    }
}


    const data = useStaticQuery(graphql `
      query {
        allContentfulBlogPost(limit: 4, sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              tag
              excerpt {
                excerpt
             }
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
            }
          }
        }
      }
    `)
    return (
      <section className="container px-5 py-24 mx-auto mt-24 max-w-7x1 -m-4 " >
        <h2 className="w-3/4 mx-auto flex flex-col uppercase anton text-4xl">latest articles</h2>
        <Carousel responsive={responsive}>
            { data.allContentfulBlogPost.edges.map((edge, i) => (
                <Link className=" xl:w-1/3 md:w-1/2 m-8" key={edge.node.id} to={`/blog/${edge.node.slug.toLowerCase().trimStart().replace(/\s/g, '-')}/`}>
                  <div className="bg-white p-6 m-4 rounded-lg card-shadow">
                      <h2 className="text-lg text-gray-900 font-medium title-font mb-4 h-14">{edge.node.title}</h2>
                      <p className="leading-relaxed text-base mb-2">{edge.node.excerpt.excerpt}</p>
                      <p className="leading-relaxed font-medium text-lg">{edge.node.publishedDate}</p>
                  </div>
                </Link>
            )) }
          </Carousel>
      </section>
    )
}

export default LatestPosts
