import React from "react"
import BlogCard from "./BlogCard"
import styled from "styled-components"

const WrapBlogovi = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 61px;
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
