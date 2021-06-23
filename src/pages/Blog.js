import React, { useState, useEffect } from "react"
import "../../i18next"

import Layout from "../components/layout"
import { useWindowSize } from "../components/useWindowSize"
import { RiArrowDropDownFill } from "react-icons/ri"
import { graphql } from "gatsby"
import MeniMobileBlog from "../components/MeniMobileBlog"
import Pagination from "../components/pagination"

import BlogHeroPhoto from "../../content/assets/BlogHero.png"
// import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import BlogPostCards from "../components/BlogPostCards"
import i18next from "i18next"
import SEO from "../components/seo"

const WrapHeroPhoto = styled.div`
  /* background-color: grey; */
  position: relative;
  width: 100%;
  height: 475px;

  @media only screen and (max-width: 750px) {
    height: 478px;
  }
`

const WrapNaslov = styled.div`
  /* width: 400px; */
  margin-top: 180px;
  font-family: Playfair Display;
  font-size: 54px;
  line-height: 55px;
  color: white;
  width: 590px;
  text-align: center;

  @media only screen and (max-width: 750px) {
    width: 80%;
    font-size: 44px;

    line-height: 43px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 34px;
  }
  @media only screen and (max-width: 330px) {
    width: 280px;
  }
`

function Blog({ data }) {
  const { t } = useTranslation()
  // const { languages, changeLanguage } = useI18next()
  const size = useWindowSize()
  const [current, setCurrent] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(9)

  const [lang, setLang] = useState(i18next.language)
  const [kategorija, setKategorija] = useState("SVE")
  const [query, setQuery] = useState(data.wpgraphql.blogovi.edges)
  // const [kategorijaEng, setKategorijaEng] = useState("SVE")

  var queryData = data.wpgraphql.blogovi.edges

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
  }, [kategorija])

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
    console.log("kliknuto kategorije")
  }
  const handleClick = (e, id) => {
    current === id ? setCurrent(null) : setKategorija(e.target.innerText)
    setCurrent(id)
    setCurrentPage(1)
  }
  // console.log("kat", kategorija)
  const handleClickCloseMenu = () => {
    setIsOpen(false)
    console.log("kliknuto close")
  }

  const handleChooseMobileCategory = (e, id) => {
    current === id ? setCurrent(null) : setKategorija(e.target.innerText)
    setKategorija(e.target.innerText)
    setCurrentPage(1)
  }

  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = query.slice(indexOfFirstPost, indexOfLastPost)
  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <Layout>
      <SEO title="Blog" description="Priče Zaboravljene Dalmacije" />
      <MeniMobileBlog
        handleClickCloseMenu={handleClickCloseMenu}
        handleChooseMobileCategory={handleChooseMobileCategory}
        isOpen={isOpen}
      />
      <WrapHeroPhoto>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${BlogHeroPhoto})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <WrapNaslov>{t("dobroDosliNaBlog")}</WrapNaslov>
        </div>
      </WrapHeroPhoto>
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
          <RiArrowDropDownFill />
        </div>
      )}

      <BlogPostCards blogovi={currentPosts} />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={query.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query {
    wpgraphql {
      blogovi {
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
`
