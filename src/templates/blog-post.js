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
  left: -131px;
  top: 33px;
  @media only screen and (max-width: 900px) {
    top: 25px;
  }
  @media only screen and (max-width: 500px) {
    top: 17px;
  }
`
const BlogContentWrap = styled.div`
  font-family: "Raleway", sans-serif;
  font-size: 17px;
  color: #3a3a3a;
  position: relative;
  width: 100%;
  max-width: 1180px;
  margin: 86px auto 90px auto;
  padding: 0 24px;
  height: auto;

  & > p,
  & > h2,
  & > h3,
  & > h4,
  & > ul,
  & > ol,
  & > blockquote {
    max-width: 820px;
    margin-left: auto;
    margin-right: auto;
  }

  & > p {
    line-height: 1.75;
    margin: 0 auto 26px auto;
  }

  & > h2,
  & > h3,
  & > h4 {
    font-family: "Playfair Display", serif;
    font-weight: 600;
    color: #1c1100;
    line-height: 1.3;
    text-align: left;
  }
  & > h2 {
    font-size: 32px;
    margin: 56px auto 22px auto;
  }
  & > h3 {
    font-size: 24px;
    margin: 44px auto 18px auto;
  }
  & > h4 {
    font-size: 19px;
    margin: 36px auto 16px auto;
  }

  & > blockquote {
    font-family: Amiri, serif;
    font-style: italic;
    font-size: 21px;
    line-height: 1.6;
    color: #555;
    border-left: 3px solid #b0c7ce;
    padding-left: 22px;
    margin: 40px auto;
  }

  & > figure > img,
  & > p > img,
  & > div > img {
    width: 100%;
    max-width: 1040px;
    height: auto;
    object-fit: contain;
    display: block;
    margin: 46px auto;
  }

  & > p > em {
    display: block;
    text-align: center;
    font-family: "Raleway", sans-serif;
    font-size: 13px;
    font-style: italic;
    color: #888;
    margin-top: -30px;
    margin-bottom: 26px;
  }

  & a {
    color: inherit;
    text-decoration: underline;
  }

  @media only screen and (max-width: 750px) {
    font-size: 15.5px;
    padding: 0 20px;
    margin: 60px auto 70px auto;

    & > p,
    & > h2,
    & > h3,
    & > h4,
    & > ul,
    & > ol,
    & > blockquote {
      max-width: 100%;
    }
    & > h2 {
      font-size: 26px;
      margin: 40px auto 16px auto;
    }
    & > h3 {
      font-size: 21px;
      margin: 32px auto 14px auto;
    }
    & > figure > img,
    & > p > img,
    & > div > img {
      margin: 32px auto;
    }
  }
`

const BlogPost = ({ data }) => {
  const [t] = useTranslation()
  const [categorie, setCategorie] = useState("")
  const [lang, setLang] = useState(i18next.language)
  const size = useWindowSize()
  const blog = data && data.wpgraphql && data.wpgraphql.blog
  const blogGraphql = blog && blog.blog_graphql
  const seoTitleSource =
    (blogGraphql && blogGraphql.naslovBlogaHr) || (blog && blog.title) || "Blog"
  const seoTitle = seoTitleSource.slice(0, 69)

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
    const categoryEdges =
      blog && blog.categories && blog.categories.edges
        ? blog.categories.edges
        : []

    if (categoryEdges.length !== 0) {
      switch (categoryEdges[0].node.name) {
        case "ZABORAVLJENA DALMACIJA DANAS":
          cat = "FORGOTTEN DALMATIA TODAY"
          break
        case "U GOSTIMA KOD":
          cat = "VISITING..."
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
  }, [blog])

  if (!blog || !blogGraphql) {
    return (
      <>
        <Layout>
          <SEO title={seoTitle} description={seoTitleSource} />
        </Layout>
      </>
    )
  }

  return (
    <>
      <Layout>
        <SEO title={seoTitle} description={seoTitleSource} />
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
