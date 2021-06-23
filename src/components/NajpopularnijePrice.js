import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import i18next from "i18next"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  min-height: 316px;
  position: relative;
  margin: 50px 0 55px 0;
  text-align: center;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`
const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  line-height: 43px;
  @media only screen and (max-width: 750px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 430px) {
    font-size: 32px;
  }
`
const Linija = styled.div`
  height: 1px;
  width: 110px;
  background-color: black;
  @media only screen and (max-width: 550px) {
    width: 55px;
  }
`
const Clanci = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  @media only screen and (max-width: 550px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    justify-content: space-around;
    width: 90%;
    margin: 0 auto;
  }
`
const TextClanci = styled.div`
  position: relative;
  font-family: Raleway;
  font-size: 12px;
  font-weight: 500;
  width: 250px;
  height: 58px;
  text-align: left;
  line-height: 16px;
  margin: 0 15px 16px 0;
  /* @media only screen and (max-width: 550px) {
    width: 55px; */
  /* } */
`

function NajpopularnijePrice() {
  const [lang, setLang] = useState(i18next.language)

  const [t, i18n] = useTranslation()

  //___________________ sljedeća operacija spaja firestore brojač klikova i wpgraphql podatke u jedan array_____________
  //____sortiraj RESULT i renderiraj za najpročitanije priče poredano po BROJ KLIKOVA-----------------

  //_________________________________________________________________________________________

  // useEffect(() => {
  //   async function fetch() {
  //     const events = await firebase.firestore().collection("broj klikova")
  //     events.get().then(querySnapshot => {
  //       const tempDoc = querySnapshot.docs.map(doc => {
  //         return { slug: doc.id, ...doc.data() }
  //       })
  //       // console.log("firebase ", tempDoc)
  //       setFireData(tempDoc)
  //     })
  //   }
  //   fetch()
  // }, [])
  // console.log("firedata", fireData)
  // useEffect(() => {
  //   const wpData = data.blogovi.edges

  //   function mergeArrayObjects(arr1, arr2) {
  //     return arr1.map((item, i) => {
  //       if (item.broj === arr2[i].broj) {
  //         //merging two objects
  //         const spojeno = Object.assign({}, item, arr2[i])
  //         return spojeno
  //       }
  //     })
  //   }
  //   const sorted = mergeArrayObjects(fireData, wpData)
  //     .slice()
  //     .sort((a, b) => b.broj - a.broj)
  //   console.log(sorted)
  //   setResult(sorted)

  // }, [fireData])
  useEffect(() => {
    setLang(i18next.language)
  }, [i18next.language])

  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            blogovi {
              edges {
                node {
                  blog_graphql {
                    najcitanijaPrica
                    naslovBlogaEng
                    naslovBlogaHr
                  }
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => (
        <Wrap>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "61px",
            }}
          >
            <Linija />
            <Naslov>{t("najpopularnijeprice")}</Naslov>
            <Linija />
          </div>

          <Clanci>
            {data.wpgraphql.blogovi.edges
              .filter(
                e =>
                  e.node.blog_graphql.najcitanijaPrica ===
                  "Istakni kao najčitaniju priču"
              )
              .map(clanak => (
                <Link
                  key={clanak.node.slug}
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/Blog/${clanak.node.slug}`}
                >
                  <TextClanci key={clanak.node.slug}>
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        backgroundColor: "#E0E0E0",
                        position: "absolute",
                        left: "-13px",
                        top: "5px",
                      }}
                    ></div>
                    {lang === "hr"
                      ? clanak.node.blog_graphql.naslovBlogaHr
                      : clanak.node.blog_graphql.naslovBlogaEng}
                  </TextClanci>
                </Link>
              ))}
          </Clanci>
        </Wrap>
      )}
    ></StaticQuery>
  )
}

export default NajpopularnijePrice
