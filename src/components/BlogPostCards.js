import React from "react"
import BlogCard from "./BlogCard"
import styled from "styled-components"

const WrapBlogovi = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 62px;
  @media only screen and (max-width: 550px) {
    margin-bottom: 31px;
  }
`

function BlogPostCards({ blogovi }) {
  return (
    <WrapBlogovi>
      {blogovi.map(blog => (
        <BlogCard blogs={blog} key={blog.node.databaseId} />
      ))}
    </WrapBlogovi>
  )
}

export default BlogPostCards
