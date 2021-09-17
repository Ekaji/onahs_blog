import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { MARKS, BLOCKS } from "@contentful/rich-text-types";
import SyntaxHighlighter from "react-syntax-highlighter";
import { gradientDark } from "react-syntax-highlighter/dist/esm/styles/hljs"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
       body {
        raw
      }
    }
  }
`

const BlogPost = ( { data, pageContext } ) => {

  const Bold = ({children}) => <div className="font-bold font-sans text-gray-900 font-medium uppercase"> { children }</div>
  const Text = ({children}) => <p className="py-6"> { children }</p>
       
    
  const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text> {children}</Text>
      }, 
      renderMark: {
        [MARKS.BOLD]: (text) => <Bold> {text}</Bold>,
        [MARKS.CODE]: (text) => {
          return (
            <SyntaxHighlighter
              language="javascript"
              style={gradientDark}
              wrapLongLines
            >
              {text}
            </SyntaxHighlighter>
          );
        },
      }
  }

  const { previous, next } = pageContext

  return (
    <Layout>
      <div className="bg-gray-100 font-sans leading-normal tracking-normal">
          <div className="container w-full md:max-w-3xl mx-auto pt-20">
              <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal" style={{fontFamily: "Georgia,serif"}}>
                  <div className="font-sans">
                      <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">{data.contentfulBlogPost.title}</h1>
                      <p className="text-sm md:text-base font-normal text-gray-600">{data.contentfulBlogPost.publishedDate}</p>
                  </div>
                  <div className="py-6 ">{renderRichText(data.contentfulBlogPost.body, options)}</div>
              </div>
                {/* KEEP VERRY IMPORTANT */}
              {/* <div className="text-base md:text-sm text-gray-500 px-4 py-6">
                  Tags:
                  <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
                  .
                  <a href="#" className="text-base md:text-sm text-green-500 no-underline hover:underline">Link</a>
              </div> */}

              <hr className="border-b-2 border-gray-400 mb-8 mx-4"/>

              <div className="font-sans flex justify-between content-center px-4 pb-12">
                  <div className="text-left">
                      <span className="text-xs md:text-sm font-normal text-gray-600">&lt; Previous Post</span>
                      <br/>
                      <>
                        {previous && (
                              <Link className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline"  to={ `/blog/${previous.slug.toLowerCase().trimStart().replace(/\s/g, '-')}/` } rel="prev">
                                  {previous.slug}
                              </Link>
                          )}
                      </>
                  </div>
                  <div className="text-right">
                      <span className="text-xs md:text-sm font-normal text-gray-600">Next Post &gt;</span>
                      <br/>
                      <>
                        {next && (
                              <Link className="break-normal text-base md:text-sm text-green-500 font-bold no-underline hover:underline" to={ `/blog/${next.slug.toLowerCase().trimStart().replace(/\s/g, '-')}/`} rel="next">
                                  {next.slug}
                              </Link>
                          )}
                      </>
                  </div>
              </div>
          </div>
      </div>
    </Layout>
  )
}

export default BlogPost