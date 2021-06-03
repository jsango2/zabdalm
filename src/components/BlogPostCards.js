import React from "react"
import BlogCard from "./BlogCard"

function BlogPostCards({ blogovi }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginBottom: "62px",
      }}
    >
      {blogovi.map(blog => (
        <BlogCard blogs={blog} key={blog.node.slug} />
      ))}
    </div>
  )
}

export default BlogPostCards
