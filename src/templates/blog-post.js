import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
  I18nextContext,
} from "gatsby-plugin-react-i18next"
// import SEO from "../components/seo"

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 78%;

  height: auto;

  @media only screen and (max-width: 570px) {
    flex-direction: column;
    height: auto;
    width: 100%;
    padding-left: 30px;
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
  width: 78%;
  height: auto;
  text-align: left;
  /* margin: 0 auto 50px auto; */

  @media only screen and (max-width: 60em) {
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
  }
`
const Crta = styled.div`
  width: 110px;
  height: 1px;
  background-color: white;
  /* margin-right: 58px; */
  position: absolute;
  left: 0px;
  top: 53%;
  @media only screen and (max-width: 750px) {
    /* left: -100px;

    margin-right: 25px; */
  }
`
const BlogContentWrap = styled.div`
  font-family: "Roboto";
  font-size: 16px;
  position: relative;
  width: 78%;
  margin: 126px auto 0 auto;
  height: auto;
  & > figure > img {
    width: 73vw;
    object-fit: cover;
    height: 50vw;
  }
  @media only screen and (max-width: 570px) {
    /* flex-direction: column;
    height: auto;
    width: 100%;
    padding-left: 30px; */
  }
`

const BlogPost = ({ data }) => {
  const { languages, changeLanguage } = useI18next()
  const [t] = useTranslation()
  const [categorie, setCategorie] = useState("")
  const context = React.useContext(I18nextContext)
  const [lang, setLang] = useState(context.language)
  // ------visibility lazy loading------------
  // --------------------------------------
  console.log(data)

  useEffect(() => {
    var cat = ""
    if (data.wpgraphql.blog.categories.edges.length !== undefined) {
      console.log(data.wpgraphql.blog.categories.edges[0].node.name)

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
      }
      setCategorie(cat)
    }
    console.log("kategorija", cat)
  }, [context.language])

  return (
    <>
      <Layout>
        {lang === "hr" ? (
          <>
            <Hero
              style={{
                backgroundImage: `url(${data.wpgraphql.blog.blog_graphql.istaknutaFotografijaNaBlogu.sourceUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover ",
              }}
            >
              <Crta />

              <Wrap>
                <Kategorija>
                  {data.wpgraphql.blog.categories.edges[0].node.name}
                </Kategorija>
                <Naslov>
                  {data.wpgraphql.blog.blog_graphql.naslovBlogaHr}
                </Naslov>
              </Wrap>
            </Hero>

            <BlogContentWrap
              //   style={{ maxWidth: "600px" }}
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
      </Layout>
    </>
  )
}

export const query = graphql`
  query($language: String!, $slug: ID!) {
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
      blog(id: $slug, idType: SLUG) {
        title
        categories {
          edges {
            node {
              name
              categoryId
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
