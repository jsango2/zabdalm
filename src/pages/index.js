import React, { useState } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Hero from "../components/hero"
import CitatFront from "./../components/citatFront"
import BlogFront from "../components/BlogFront"
import Nosnja from "../components/nosnja"
import NajpopularnijePrice from "../components/NajpopularnijePrice"
import RazgledniceNaMapiFront from "../components/RazgledniceNaMapiFront"
import OautoruFront from "../components/OautoruFront"
import PartneriProjektaFront from "../components/PartneriProjektaFront"
import InstagramFront from "../components/InstagramFront"
import "../../i18next"
import Montaza from "../components/Montaza"
// import FirebaseUpload from "../components/firebaseUpload"
import FirebaseUpload from "../components/firebaseUpload"
import CookieConsent, {
  Cookies,
  getCookieConsentValue,
} from "react-cookie-consent"
import { useTranslation } from "react-i18next"

import i18next from "i18next"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const { t } = useTranslation()

  const [isOpen, setisOpen] = useState(false)
  return (
    <Layout isOpen={isOpen}>
      <CookieConsent
        buttonStyle={{ backgroundColor: "#27aae0", borderRadius: "3px" }}
        location="bottom"
        cookieName="myAwesomeCookieName3"
        expires={999}
        containerClasses="cookieContainer"
        buttonText={t("razumijem")}
      >
        {t("cookie")}
      </CookieConsent>
      <SEO title="Početna" />

      <Hero />
      {/* <Montaza />
      <Montaza1 />
      <Montaza2 /> */}

      <CitatFront />
      <Montaza />
      <BlogFront blogovi={data} />
      <Nosnja />
      <NajpopularnijePrice />
      <RazgledniceNaMapiFront />
      <OautoruFront />

      <PartneriProjektaFront data={data.wpgraphql} />
      <InstagramFront />
      {/* <FirebaseUpload /> */}
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
