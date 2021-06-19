import React, { useState, useEffect } from "react"
import styled from "styled-components"
// import {
//   Link,
//   Trans,
//   useTranslation,
//   useI18next,
//   I18nextContext,
// } from "gatsby-plugin-react-i18next"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import i18next from "i18next"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  position: relative;
  width: 342px;
  height: 323px;
  margin-bottom: 34px;
  outline: none;
  @media only screen and (max-width: 350px) {
    min-width: 300px;
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
  // const context = React.useContext(I18nextContext)
  const [lang, setLang] = useState(i18next.language)
  const [categorie, setCategorie] = useState("----")
  useEffect(() => {
    var cat = ""

    if (blogs.node.categories.edges.length !== 0) {
      // console.log(blogs.node.categories.edges[0].node.name)

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
  }, [i18next.language])

  // const handleBlogCardClick = async () => {
  //   let document = await firebase
  //     .firestore()
  //     .collection("broj klikova")
  //     .doc(blogs.node.slug)
  //     .get()
  //   if (document && document.exists) {
  //     await firebase
  //       .firestore()
  //       .collection("broj klikova")
  //       .doc(blogs.node.slug)
  //       .update({ broj: firebase.firestore.FieldValue.increment(1) })
  //   } else {
  //     await firebase
  //       .firestore()
  //       .collection("broj klikova")
  //       .doc(blogs.node.slug)
  //       .set({ broj: 1 })
  //   }
  // }
  return (
    <Link style={{ textDecoration: "none" }} to={`/Blog/${blogs.node.slug}`}>
      <Wrap className="blogCardFotoWrap">
        {blogs &&
          blogs &&
          (i18next.language === "hr" ? (
            <>
              <Kategorija>
                {blogs.node.categories.edges.length !== 0 ? (
                  blogs.node.categories.edges[0].node.name
                ) : (
                  <div>----</div>
                )}
              </Kategorija>
              <div
                style={{
                  width: "100%",
                  height: "233px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    backgroundColor: "grey",
                    backgroundImage: `url(${blogs.node.blog_graphql.istaknutaFotografijaNaBlogu.sourceUrl})`,
                    backgroundPosition: "left",
                    backgroundSize: "cover ",
                    backgroundRepeat: "no-repeat",
                  }}
                  className="blogCardFoto"
                ></div>
              </div>
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
      </Wrap>
    </Link>
  )
}

export default BlogCard
