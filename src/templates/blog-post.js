import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { useTranslation } from "react-i18next"

import { useWindowSize } from "../components/useWindowSize"
import i18next from "i18next"
import "../../i18next"

import TriBlogPosta from "../components/TriBlogPosta"

// import SEO from "../components/seo"
import SEO from "../components/seo"

const Wrap = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  width: 78%;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 190px;
  height: 500px;

  @media only screen and (max-width: 750px) {
    padding-top: 90px;
  }
`

const WrapSponzorHero = styled.div`
  position: absolute;
  top: 28px;
  right: 42px;
  font-family: "Playfair Display";
  font-size: 24px;
  color: white;

  @media only screen and (max-width: 750px) {
    font-size: 16px;

    bottom: 44px;
    top: unset;
  }
  @media only screen and (max-width: 450px) {
    font-size: 16px;

    bottom: 34px;
    top: unset;
    /* right: unset; */
    right: 30px;
  }
`
const Hero = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 492px;

  @media only screen and (max-width: 570px) {
  }
`

const Naslov = styled.div`
  font-family: "Playfair Display";
  line-height: 56px;
  color: white;
  font-size: 54px;
  width: 109%;
  height: auto;
  text-align: left;
  position: relative;
  /* margin: 0 auto 50px auto; */

  @media only screen and (max-width: 900px) {
    font-size: 36px;
    line-height: 43px;
  }
  @media only screen and (max-width: 500px) {
    font-size: 28px;
    line-height: 33px;
  }
`
const NaslovBlog = styled.div`
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
const Kategorija = styled.div`
  ${"" /* background-color: grey; */}
  font-family: Amiri;
  width: 78%;
  font-size: 24px;
  color: #f5f5f5;
  text-align: left;

  @media only screen and (max-width: 700px) {
    font-size: 16px;
  }
`
const Crta = styled.div`
  width: 110px;
  height: 1px;
  background-color: white;
  /* margin-right: 58px; */
  position: absolute;
  left: -130px;
  top: 33px;
  @media only screen and (max-width: 900px) {
    top: 25px;
  }
  @media only screen and (max-width: 500px) {
    top: 17px;
  }
`
const BlogContentWrap = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  position: relative;
  width: 78%;
  margin: 86px auto 81px auto;
  height: auto;
  & > figure > img {
    width: 54vw;
    max-width: 900px;
    min-width: 280px;
    object-fit: contain;
    height: 35vw;
    max-height: 700px;
    min-height: 280px;
  }
  & > p > img {
    width: 54vw;
    max-width: 900px;
    object-fit: contain;
    min-width: 280px;

    height: 35vw;
    max-height: 700px;
    min-height: 280px;
  }
  & > p {
    line-height: 21px;
  }
  @media only screen and (max-width: 570px) {
    /* flex-direction: column;
    height: auto;
    width: 100%;
    padding-left: 30px; */
  }
`

const BlogPost = ({ data }) => {
  console.log(data)
  const [t] = useTranslation()
  const [categorie, setCategorie] = useState("")
  const [lang, setLang] = useState(i18next.language)
  const size = useWindowSize()

  // ------visibility lazy loading------------
  // --------------------------------------

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.0],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.3, 0.8],
        type: "seek",
        frames: [0, 152],
      },
    ],
  }
  useEffect(() => {
    setLang(i18next.language)
  }, [i18next.language])

  useEffect(() => {
    var cat = ""
    if (data.wpgraphql.blog.categories.edges.length !== 0) {
      switch (data.wpgraphql.blog.categories.edges[0].node.name) {
        case "ZABORAVLJENA DALMACIJA DANAS":
          cat = "FORGOTTEN DALMATIA TODAY"
          break
        case "ANTIKNI PREDMETI IZ DALMACIJE":
          cat = "ANTIQUE OBJECTS FROM DALMATIA"
          break
        case "PRIČE IZ DALMATINSKE POVIJESTI":
          cat = "STORIES FROM DALMATIAN HISTORY"
          break
        default:
          console.log("default case")
      }
      setCategorie(cat)
    }
    console.log("kategorija", cat)
  }, [])

  return (
    <>
      <Layout>
        <SEO
          title={data.wpgraphql.blog.blog_graphql.naslovBlogaHr.slice(0, 69)}
          description={data.wpgraphql.blog.blog_graphql.naslovBlogaHr}
        />
        {lang === "hr" ? (
          <>
            <Hero
              style={{
                backgroundImage: `url(${data.wpgraphql.blog.blog_graphql.istaknutaFotografijaNaBlogu.sourceUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover ",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(0deg, rgba(81, 70, 58, 0.53), rgba(81, 70, 58, 0.53))",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
              ></div>

              <WrapSponzorHero>
                {data.wpgraphql.blog.blog_graphql.tekstSponzorira !== undefined
                  ? data.wpgraphql.blog.blog_graphql.tekstSponzorira
                  : null}
              </WrapSponzorHero>
              <Wrap>
                <Kategorija>
                  {data.wpgraphql.blog.categories.edges.length !== 0 ? (
                    data.wpgraphql.blog.categories.edges[0].node.name
                  ) : (
                    <div></div>
                  )}
                </Kategorija>
                <Naslov>
                  <Crta />
                  {data.wpgraphql.blog.blog_graphql.naslovBlogaHr}
                </Naslov>
              </Wrap>
            </Hero>

            <BlogContentWrap
              dangerouslySetInnerHTML={{
                __html: data.wpgraphql.blog.blog_graphql.tekstBlogaHr,
              }}
            />
          </>
        ) : (
          <>
            {" "}
            <Hero
              style={{
                backgroundImage: `url(${data.wpgraphql.blog.blog_graphql.istaknutaFotografijaNaBlogu.sourceUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover ",
              }}
            >
              <Crta />
              <WrapSponzorHero>
                {data.wpgraphql.blog.blog_graphql.tekstSponzoriraEng !==
                undefined
                  ? data.wpgraphql.blog.blog_graphql.tekstSponzoriraEng
                  : null}
              </WrapSponzorHero>
              <Wrap>
                <Kategorija>{categorie}</Kategorija>
                <Naslov>
                  {data.wpgraphql.blog.blog_graphql.naslovBlogaEng}
                </Naslov>
              </Wrap>
            </Hero>
            {/* <Paragraf
                  style={{ fontStyle: "italic" }}
                  dangerouslySetInnerHTML={{
                    __html: testimonial.node.wp_gq_izjava.tekstIzjave,
                  }}
                /> */}
            <BlogContentWrap
              //   style={{ maxWidth: "600px" }}
              dangerouslySetInnerHTML={{
                __html: data.wpgraphql.blog.blog_graphql.tekstBlogaEng,
              }}
            />
          </>
        )}
        {data.wpgraphql.blog.blog_graphql.logoSponzora !== null ? (
          <>
            {" "}
            <div
              style={{
                position: "relative",
                width: "230px",
                height: "80px",
                backgroundImage: `url(${data.wpgraphql.blog.blog_graphql.logoSponzora.sourceUrl})`,
                backgroundPosition: "center",
                backgroundSize: "contain ",
                backgroundRepeat: "no-repeat",
                margin: "0 auto",
              }}
            ></div>{" "}
            <div
              style={{
                position: "relative",
                fontFamily: "Playfair Display",
                fontSize: "24px",
                fontWeight: "600",
                color: "#395C67",
                maxWidth: "430px",
                // height: "80px",
                margin: "20px auto 30px auto",
                textAlign: "center",
              }}
            >
              {lang === "hr"
                ? data.wpgraphql.blog.blog_graphql.tekstSponzorira
                : data.wpgraphql.blog.blog_graphql.tekstSponzoriraEng}
            </div>
          </>
        ) : (
          <div></div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "61px",
            marginBottom: "40px",
          }}
        >
          <Linija />
          <NaslovBlog>BLOG</NaslovBlog>
          <Linija />
        </div>

        {/* <BlogPostCards blogovi={data.wpgraphql.blogovi.edges.slice(0, 3)} /> */}
        <TriBlogPosta />
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: ID!) {
    wpgraphql {
      blog(id: $slug, idType: SLUG) {
        title
        categories {
          edges {
            node {
              name
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        blog_graphql {
          naslovBlogaEng
          naslovBlogaHr
          tekstBlogaEng
          tekstBlogaHr
          tekstSponzorira
          tekstSponzoriraEng
          istaknutaFotografijaNaBlogu {
            sourceUrl
          }
          logoSponzora {
            sourceUrl
          }
        }
      }
    }
  }
`

export default BlogPost
