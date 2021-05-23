import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { text } from "./dummyData/textPrice"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
  I18nextContext,
} from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import firebase from "gatsby-plugin-firebase"

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
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  /* @media only screen and (max-width: 550px) {
    width: 55px; */
  /* } */
`
const TextClanci = styled.div`
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

function NajpopularnijePrice({ data }) {
  const context = React.useContext(I18nextContext)
  const [lang, setLang] = useState(context.language)
  const [fireData, setFireData] = useState([])
  const [sortiranePricePoCitanosti, setSortiranePricePoCitanosti] = useState([])

  const [t, i18n] = useTranslation()

  //___________________ sljedeća operacija spaja firestore brojač klikova i wpgraphql podatke u jedan array_____________
  //____sortiraj RESULT i renderiraj za najpročitanije priče poredano po BROJ KLIKOVA-----------------

  //_________________________________________________________________________________________

  useEffect(() => {
    async function fetch() {
      const events = await firebase.firestore().collection("broj klikova")
      events.get().then(querySnapshot => {
        const tempDoc = querySnapshot.docs.map(doc => {
          return { slug: doc.id, ...doc.data() }
        })
        // console.log("firebase ", tempDoc)
        setFireData(tempDoc)
      })
    }
    fetch()
  }, [])
  useEffect(() => {
    const wpData = data.blogovi.edges
    const result = [wpData, fireData].reduce((a, b) =>
      a.map((c, i) => Object.assign({}, c, b[i]))
    )
    const sortiraniRedosljed = result.sort(function (a, b) {
      return a.broj - b.broj
    })
    console.log("sorted", sortiraniRedosljed)
    setSortiranePricePoCitanosti(sortiraniRedosljed)
  }, [fireData])

  //------------------------------------------------------------------------ do tu----------------------

  return (
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
      {/* <Clanci>
        {lang === "hr"
          ? data.blogovi.edges.map(clanak => (
              <TextClanci key={clanak.node.slug}>
                {clanak.node.blog_graphql.naslovBlogaHr}
              </TextClanci>
            ))
          : data.blogovi.edges.map(clanak => (
              <TextClanci key={clanak.node.slug}>
                {clanak.node.blog_graphql.naslovBlogaEng}
              </TextClanci>
            ))}
      </Clanci> */}
      <Clanci>
        {sortiranePricePoCitanosti.map(clanak => (
          <TextClanci key={clanak.node.slug}>
            {lang === "hr"
              ? clanak.node.blog_graphql.naslovBlogaHr
              : clanak.node.blog_graphql.naslovBlogaEng}
          </TextClanci>
        ))}
      </Clanci>
    </Wrap>
  )
}

export default NajpopularnijePrice
