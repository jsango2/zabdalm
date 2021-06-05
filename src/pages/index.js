import React, { useState } from "react"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Hero from "../components/hero"
import CitatFront from "./../components/citatFront"
import Montaza from "../components/Montaza"
import BlogFront from "../components/BlogFront"
import Nosnja from "../components/nosnja"
import NajpopularnijePrice from "../components/NajpopularnijePrice"
import RazgledniceNaMapiFront from "../components/RazgledniceNaMapiFront"
import OautoruFront from "../components/OautoruFront"
import PartneriProjektaFront from "../components/PartneriProjektaFront"
import InstagramFront from "../components/InstagramFront"
import "../../i18next"

const IndexPage = ({ data }) => {
  // const { t } = useTranslation()
  // const { languages, changeLanguage } = useI18next()
  // ------visibility lazy loading------------

  // const halfPage = useRef()
  // const preload = useRef()
  // const hasScrolled = useHasBeenVisible(halfPage)
  // const isScrolling = useHasBeenVisible(preload)

  // --------------------------------------

  // const [kategorija, setKategorija] = useState("SVI")
  // const [current, setCurrent] = useState(null)
  const [isOpen, setisOpen] = useState(false)

  // const handleClick = (e, id) => {
  //   setisOpen(false)
  //   setKategorija(e.target.innerText)
  //   current === id ? setCurrent(null) : setCurrent(id)
  // }

  return (
    <Layout isOpen={isOpen}>
      {/* <SEO title="Početna" /> */}
      <Hero />
      <CitatFront />
      <Montaza />
      <BlogFront blogovi={data} />
      <Nosnja />
      <NajpopularnijePrice data={data.wpgraphql} />
      <RazgledniceNaMapiFront />
      <OautoruFront />
      <PartneriProjektaFront data={data.wpgraphql} />
      <InstagramFront />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    wpgraphql {
      partneriProjekta {
        edges {
          node {
            partneriProjekta {
              weblinkpartnerprojekta
            }
            title
            featuredImage {
              node {
                sourceUrl
              }
            }
            content
            id
          }
        }
      }
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
                  id
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
