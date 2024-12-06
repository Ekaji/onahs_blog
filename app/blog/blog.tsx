import React from "react"
// import {useStaticQuery, graphql, Link} from "gatsby"
// import Layout from '../components/layout'

const Blog = () => {

    // const data = useStaticQuery(graphql `
    //   query {
    //     allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
    //       edges {
    //         node {
    //           title
    //           id
    //           slug
    //           tag
    //           excerpt {
    //             excerpt
    //          }
    //           publishedDate(formatString: "Do MMMM, YYYY")
    //           featuredImage {
    //             fluid(maxWidth: 750) {
    //               ...GatsbyContentfulFluid
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // `)
    return (
      // <Layout>
      //   <section className="text-gray-600 body-font">
      //     <div className="container px-5 py-24 mx-auto max-w-7x1">
      //       <div className="flex flex-wrap -m-4">
      //         { data.allContentfulBlogPost.edges.map((edge, i) => (    
      //           <Link className="xl:w-1/3 md:w-1/2 p-4" key={edge.node.id} to={`/blog/${edge.node.slug.toLowerCase().trimStart().replace(/\s/g, '-')}/`}>
      //             <div className="bg-white p-6 rounded-lg card-shadow">
      //                 <h2 className="text-lg text-gray-900 font-medium title-font mb-4 h-14">{edge.node.title}</h2>
      //                 <p className="leading-relaxed text-base mb-2">{edge.node.excerpt.excerpt}</p>
      //                 <p className="leading-relaxed font-medium text-lg">{edge.node.publishedDate}</p>
      //             </div>
      //           </Link>
      //         )) }
      //       </div>
      //     </div>
      //   </section>
      // </Layout>
  <p>Nothing to see!</p>
    )
}

export default Blog
