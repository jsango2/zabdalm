import React from "react"
import BlogCard from "./BlogCard"

function BlogPostCards({ blogovi }) {
  console.log(blogovi)
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
        <BlogCard blogs={blog} key={blog.node.databaseId} />
      ))}
    </div>
  )
}

export default BlogPostCards
