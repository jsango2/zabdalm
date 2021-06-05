import React from "react"
import { StaticQuery, graphql } from "gatsby"
import BlogCard from "./BlogCard"

function TriBlogPosta() {
  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            blogovi(
              where: { orderby: { field: DATE, order: DESC } }
              first: 3
            ) {
              edges {
                node {
                  blog_graphql {
                    istaknutaFotografijaNaBlogu {
                      sourceUrl
                    }
                    naslovBlogaEng
                    naslovBlogaHr
                    tekstBlogaEng
                    tekstBlogaHr
                    tekstSponzorira
                    tekstSponzoriraEng
                    logoSponzora {
                      sourceUrl
                    }
                  }
                  categories {
                    edges {
                      node {
                        name
                      }
                    }
                  }
                  slug
                  databaseId
                }
              }
            }
          }
        }
      `}
      render={data => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: "62px",
          }}
        >
          {data.wpgraphql.blogovi.edges.map(blog => (
            <BlogCard blogs={blog} key={blog.node.databaseId} />
          ))}
        </div>
      )}
    ></StaticQuery>
  )
}

export default TriBlogPosta
