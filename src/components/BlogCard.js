import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
// import {
//   Link,
//   Trans,
//   useTranslation,
//   useI18next,
//   I18nextContext,
// } from "gatsby-plugin-react-i18next"
// import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import i18next from "i18next"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 34px;
  outline: none;
  @media only screen and (min-width: 751px) {
    max-width: 342px;
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
  const dragStart = useRef(null)
  useEffect(() => {
    var cat = ""

    if (blogs.node.categories.edges.length !== 0) {
      // console.log(blogs.node.categories.edges[0].node.name)

      switch (blogs.node.categories.edges[0].node.name) {
        case "ZABORAVLJENA DALMACIJA DANAS":
          cat = "FORGOTTEN DALMATIA TODAY"
          break
        case "U GOSTIMA KOD":
          cat = "VISITING..."
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
    <Link
      style={{ textDecoration: "none" }}
      to={`/Blog/${blogs.node.slug}`}
      draggable={false}
      onDragStart={e => e.preventDefault()}
      onMouseDown={e => {
        dragStart.current = { x: e.clientX, y: e.clientY }
      }}
      onTouchStart={e => {
        const touch = e.touches[0]
        dragStart.current = { x: touch.clientX, y: touch.clientY }
      }}
      onClick={e => {
        const start = dragStart.current
        if (!start) return
        const touch = e.changedTouches && e.changedTouches[0]
        const endX = touch ? touch.clientX : e.clientX
        const endY = touch ? touch.clientY : e.clientY
        const movedDistance = Math.hypot(endX - start.x, endY - start.y)
        if (movedDistance > 10) {
          e.preventDefault()
        }
      }}
    >
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
                  aspectRatio: "342 / 233",
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
                  aspectRatio: "342 / 233",
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
