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
        <BlogCard blogs={blog} />
      ))}
    </div>
  )
}

export default BlogPostCards
