import React from "react"
// import '../styles/tag.styles.css'
import { Link, graphql } from "gatsby"
import Layout from '../components/layout'


export const query = graphql`
 query ($tag: String!)  {
  allContentfulBlogPost(filter: {tag: {eq: $tag}}) {
    nodes {
      tag
      title
    }
  }
}
`

const Tags = ( { data } ) => {

    return(
        <Layout>
           <div>
             {data.allContentfulBlogPost.nodes.map( node => {
                return <Link to={`/blog/${node.title.toLowerCase().trimStart().replace(/\s/g, '-')}`}> {node.title} </Link> })}
           </div>
        </Layout>
    )
}

export default Tags