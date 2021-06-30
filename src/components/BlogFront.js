import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Button from "./button"
import { useWindowSize } from "./useWindowSize"
import { RiArrowDropDownFill } from "react-icons/ri"
import { useTranslation } from "react-i18next"
import MeniMobileBlog from "./MeniMobileBlog"
import BlogPostCards from "./BlogPostCards"
import { Link } from "gatsby"

import i18next from "i18next"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: auto;
  min-height: 600px;
  position: relative;
  margin: 50px 0 10px 0;
  text-align: center;
  @media only screen and (max-width: 620px) {
    margin: 90px 0 10px 0;
  }
  @media only screen and (max-width: 370px) {
    margin: 90px 0 10px 0;
  }
`
const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  @media only screen and (max-width: 550px) {
    font-size: 36px;
  }
`
const Linija = styled.div`
  height: 1px;
  width: 110px;
  background-color: black;
  @media only screen and (max-width: 550px) {
    width: 65px;
  }
`

const ButtonWrap = styled.div`
  width: 180px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 350px) {
    width: 75%;
  }
`

function BlogFront({ blogovi }) {
  const [t, i18n] = useTranslation()
  const [isOpen, setIsOpen] = useState(false)
  const size = useWindowSize()
  const [lang, setLang] = useState(i18next.language)
  const [kategorija, setKategorija] = useState("SVE")
  const [query, setQuery] = useState(
    blogovi.wpgraphql.blogovi.edges.slice(0, 6)
  )
  const [kategorijaEng, setKategorijaEng] = useState("SVE")

  var queryData = blogovi.wpgraphql.blogovi.edges.slice(0, 6)

  useEffect(() => {
    setLang(i18next.language)
  }, [i18next.language])

  useEffect(() => {
    if (kategorija === "STORIES FROM DALMATIAN HISTORY") {
      setKategorija("PRIČE IZ DALMATINSKE POVIJESTI")
    }
    if (kategorija === "ANTIQUE OBJECTS FROM DALMATIA") {
      setKategorija("ANTIKNI PREDMETI IZ DALMACIJE")
    }
    if (kategorija === "FORGOTTEN DALMATIA TODAY") {
      setKategorija("ZABORAVLJENA DALMACIJA DANAS")
    }
    if (kategorija === "EVERYTHING") {
      setKategorija("SVE")
    }
  })

  useEffect(() => {
    if (kategorija === "SVE") {
      //   console.log("SVE query HR", query)

      setQuery(queryData)
    }

    if (kategorija !== "SVE") {
      var filteredData = queryData.filter(elem =>
        elem.node.categories.edges.some(elem => elem.node.name === kategorija)
      )
      setQuery(filteredData)
    }
  }, [kategorija, lang])

  const handleClickKategorije = () => {
    setIsOpen(true)
    console.log("kliknuto")
  }
  const handleClickCloseMenu = () => {
    setIsOpen(false)
    console.log("kliknuto")
  }

  const [current, setCurrent] = useState(0)
  const handleClick = (e, id) => {
    current === id ? setCurrent(null) : setKategorija(e.target.innerText)
    setCurrent(id)
  }
  const handleChooseMobileCategory = (e, id) => {
    current === id ? setCurrent(null) : setKategorija(e.target.innerText)
    setKategorija(e.target.innerText)
  }

  return (
    <>
      <MeniMobileBlog
        handleClickCloseMenu={handleClickCloseMenu}
        handleChooseMobileCategory={handleChooseMobileCategory}
        isOpen={isOpen}
      />
      <Wrap>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <Linija />
          <Naslov>BLOG</Naslov>
          <Linija />
        </div>
        {size.width > 750 ? (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: "15px",
                justifyContent: "space-around",
                margin: "51px auto 0 auto",
                width: "85%",
                marginBottom: "42px",
              }}
            >
              {/* <div>-</div> */}

              <div
                className={current === 0 ? "blueLink" : ""}
                onClick={e => handleClick(e, 0)}
                style={{ cursor: "pointer", margin: "0 10px" }}
              >
                {t("sve")}
              </div>
              <div>-</div>
              <div
                className={current === 1 ? "blueLink" : ""}
                onClick={e => handleClick(e, 1)}
                style={{ cursor: "pointer", margin: "0 10px" }}
              >
                {t("priceizpovijesti")}
              </div>
              <div>-</div>
              <div
                className={current === 2 ? "blueLink" : ""}
                onClick={e => handleClick(e, 2)}
                style={{ cursor: "pointer", margin: "0 10px" }}
              >
                {t("antiknipredmeti")}
              </div>
              <div>-</div>
              <div
                className={current === 3 ? "blueLink" : ""}
                onClick={e => handleClick(e, 3)}
                style={{ cursor: "pointer", margin: "0 10px" }}
              >
                {t("zaboravljenadalmacijadanas")}
              </div>
              {/* <div>-</div> */}
            </div>{" "}
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "61px",
            }}
            onClick={() => handleClickKategorije()}
          >
            <div
              // className={current === 0 ? "blueLink" : ""}
              // onClick={e => handleClick(e, 0)}
              style={{ cursor: "pointer" }}
            >
              {t("odaberikategoriju")}
            </div>
            <div style={{ fontSize: "24px" }}>
              <RiArrowDropDownFill />
            </div>
          </div>
        )}
        {size.width < 750 ? (
          <BlogPostCards blogovi={query.slice(0, 3)} />
        ) : (
          <BlogPostCards blogovi={query.slice(0, 6)} />
        )}

        {/* </div> */}
        <ButtonWrap>
          <Link to="/Blog">
            <Button text={t("arhivaprica")} color="black" width="155" />
          </Link>
        </ButtonWrap>
      </Wrap>
    </>
  )
}

export default BlogFront
