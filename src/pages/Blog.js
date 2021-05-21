import React, { useState } from "react"
import Layout from "../components/layout"
import { useWindowSize } from "../components/useWindowSize"
import { RiArrowDropDownFill } from "react-icons/ri"
import { graphql, withAssetPrefix } from "gatsby"

import BlogHeroPhoto from "../../content/assets/BlogHero.png"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from "gatsby-plugin-react-i18next"
import styled from "styled-components"
import BlogCard from "./../components/BlogCard"
import BlogPostCards from "../components/BlogPostCards"

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
  const { languages, changeLanguage } = useI18next()
  const size = useWindowSize()
  const [current, setCurrent] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const handleClickKategorije = () => {
    setIsOpen(true)
    console.log("kliknuto")
  }
  const handleClick = (e, id) => {
    current === id ? setCurrent(null) : setCurrent(id)
  }
  return (
    <Layout>
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
          <WrapNaslov>Dobrodošli na blog Zaboravljene Dalmacije</WrapNaslov>
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

      <BlogPostCards blogovi={data} />
    </Layout>
  )
}

export default Blog

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
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
          }
        }
      }
    }
  }
`
