import React, { useState, useEffect, useRef } from "react"
import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from "gatsby-plugin-react-i18next"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import { IoIosArrowDropdown, IoIosArrowDropright } from "react-icons/io"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import "../../i18next.js"

// import ProjektiHome from "../components/projekti"
// import Projekti from "./projekti"
// import SEO from "../components/SEO"
// import { useHasBeenVisible } from "./../components/useVisibility"
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

const IndexPage = ({ data }) => {
  const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()
  console.log("index t", t)
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
      <BlogFront />
      <Nosnja />
      <NajpopularnijePrice />
      <RazgledniceNaMapiFront />
      <OautoruFront />
      <PartneriProjektaFront />
      {/* <InstagramFront />  */}
    </Layout>
  )
}

export default IndexPage

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
  }
`
