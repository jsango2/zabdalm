import React, { useState, useEffect } from "react"
import styled from "styled-components"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
  I18nextContext,
} from "gatsby-plugin-react-i18next"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 342px;
  height: 323px;
  margin-bottom: 34px;
  @media only screen and (max-width: 350px) {
    width: 100%;
  }
`
const Kategorija = styled.div`
  ${"" /* background-color: grey; */}
  font-family: Amiri;
  font-size: 10px;
  color: #676767;
  text-align: left;

  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`
const CardText = styled.div`
  ${"" /* background-color: grey; */}
  font-family: Raleway;
  font-size: 15px;
  line-height: 23px;
  margin-top: 12px;
  font-weight: 500;
  color: #676767;
  text-align: left;

  @media only screen and (max-width: 700px) {
    width: 95%;
    text-align: center;
  }
`

function BlogCard({ blogs }) {
  // console.log(props)
  const context = React.useContext(I18nextContext)
  const [lang, setLang] = useState(context.language)
  const [categorie, setCategorie] = useState("----")
  console.log(lang)
  // console.log("blogs", blogs.node.slug)
  // console.log("blogs", blogs.node.slug)

  useEffect(() => {
    var cat = ""

    if (blogs !== undefined) {
      console.log(blogs.node.categories.edges[0].node.name)

      switch (blogs.node.categories.edges[0].node.name) {
        case "ZABORAVLJENA DALMACIJA DANAS":
          cat = "FORGOTTEN DALMATIA TODAY"
          break
        case "ANTIKNI PREDMETI IZ DALMACIJE":
          cat = "ANTIQUE OBJECTS FROM DALMATIA"
          break
        case "PRIČE IZ DALMATINSKE POVIJESTI":
          cat = "STORIES FROM DALMATIAN HISTORY"
          break
      }
      setCategorie(cat)
    }
  }, [context.language])

  return (
    <Wrap>
      {blogs && (
        <Link
          style={{ textDecoration: "none" }}
          to={`/Blog/${blogs.node.slug}`}
        >
          {blogs &&
            (lang === "hr" ? (
              <>
                <Kategorija>
                  {blogs.node.categories.edges[0].node.name}
                </Kategorija>
                <div
                  style={{
                    width: "100%",
                    height: "233px",
                    backgroundColor: "grey",
                    backgroundImage: `url(${blogs.node.blog_graphql.istaknutaFotografijaNaBlogu.sourceUrl})`,
                    backgroundPosition: "left",
                    backgroundSize: "cover ",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <CardText>{blogs.node.blog_graphql.naslovBlogaHr}</CardText>
              </>
            ) : (
              <>
                <Kategorija>{categorie}</Kategorija>
                <div
                  style={{
                    width: "100%",
                    height: "233px",
                    backgroundColor: "grey",
                    backgroundImage: `url(${blogs.node.blog_graphql.istaknutaFotografijaNaBlogu.sourceUrl})`,
                    backgroundPosition: "left",
                    backgroundSize: "cover ",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <CardText>{blogs.node.blog_graphql.naslovBlogaEng}</CardText>
              </>
            ))}
        </Link>
      )}
    </Wrap>
  )
}

export default BlogCard
