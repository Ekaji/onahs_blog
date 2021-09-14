import React from "react"
import {useStaticQuery, graphql, Link} from "gatsby"

const Blog = () => {

    const data = useStaticQuery(graphql `
      query {
        allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
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
        // <div className='blog'>
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto max-w-7x1">
        <div className="flex flex-wrap -m-4">
        { data.allContentfulBlogPost.edges.map((edge, i) => (    
        <Link className="xl:w-1/3 md:w-1/2 p-4" key={edge.node.id} to={`/blog/${edge.node.slug.toLowerCase().trimStart().replace(/\s/g, '-')}/`}> 
        {/* // <div className="xl:w-1/3 md:w-1/2 p-4"> */}
            <div className="bg-white p-6 rounded-lg card-shadow">
                {/* <img className="lg:h-60 xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6" src="https://kuyou.id/content/images/ctc_2020021605150668915.jpg" alt="Image Size 720x400"/> */}
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{edge.node.title}</h3>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{edge.node.title}</h2>
                <p className="leading-relaxed text-base">{edge.node.excerpt.excerpt}</p>
                <p className="leading-relaxed text-base">{edge.node.publishedDate}</p>
            </div>
        {/* // </div> */}
        </Link>
        )) }
        </div>
        </div>
        </section>

    )
}

export default Blog
