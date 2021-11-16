const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            tag
            title
            slug
          }
        }
      }
    }
  `)
  const posts = response.data.allContentfulBlogPost.edges
  posts.forEach( ( post, index) => {

    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node 
    const blogURL = post.node.slug.toLowerCase().trimStart().replace(/\s/g, '-')

    createPage({
      path : `/blog/${blogURL}/`,
      component : path.resolve("./src/templates/blog-posts.js"),
      context : {
        slug : post.node.slug,
        previous,
        next,
        tags: post.node.tag
      },
    })


    posts.forEach(edge=> {
    let tagURL = edge.node.tag.toLowerCase().trimStart().replace(/\s/g, '-')

    createPage({
      path: `/tag/${tagURL}/`,
      component : path.resolve("./src/templates/tags.js"), // your tagComponent
      context : {
        slug : edge.node.title,
        tag : edge.node.tag
      },
    })
    })
  })

}
