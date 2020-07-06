import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import tw, { css } from "twin.macro"

import { CTA } from "../components/CTA"

const Post = ({ data }) => {
  console.log(data)
  return (
    <>
      <article>
        <h1 tw="text-2xl">{data.mdx.frontmatter.title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
      <CTA />
    </>
  )
}

export default Post

export const postQuery = graphql`
  query postQuery($slug: String!) {
    mdx(frontmatter: { path: { eq: $slug } }) {
      body
      frontmatter {
        path
        title
      }
    }
  }
`
