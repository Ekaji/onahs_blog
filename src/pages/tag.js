import React from "react"
import {Link, graphql} from "gatsby"

import Layout from '../components/layout'
// import '../styles/tag.styles.css'

// import UniqueTags from "../components/Tag/UniqueTags"


export const query = graphql `
  query {
  allContentfulBlogPost {
    edges {
      node {
        tag
        slug
      }
    }
  }
}
`

const TagList = ({data}) => {

const UniqueTags = ({data, tagClass}) => {
    let allTags = data.allContentfulBlogPost.edges.map((edge, i) => edge.node.tag)
    let uniqueTags = [...new Set(allTags)]

    return (<div className={
        tagClass ? 'tags' : 'tags tag'
    }> {
        uniqueTags.map((uniquetag, i) => (<div className='tag__list'
            key={i}>
            <Link className='link--color'
                key={i}
                to={
                    `/tag/${
                        uniquetag.toLowerCase()
                    }`
            }> {uniquetag} </Link>
        </div>))
    } </div>)
}



    return (<Layout>
        <UniqueTags data={data}/>
    </Layout>)
}

export default TagList