import React from "react"
import { graphql } from "gatsby"

import SEO from "../components/seo"
// import Header from "../components/header"
// import Footer from "../components/footer"
// import Logo from "../images/LogoTopsvg.svg"
import styled from "styled-components"
import Layout from "./../components/layout"

const Wrap = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  height: 700px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  @media only screen and (max-width: 60em) {
    display: block;
    padding: 0 0;
  }
`

const NotFoundPage = ({ data, location }) => {
  return (
    <>
      <Layout>
        <Wrap>
          <SEO title="404: Not Found" />
          <div>Zabravljena Dalmacija</div>
          <h1>404: Stranica nije pronađena</h1>
          <p>Provjerite vaš link</p>{" "}
        </Wrap>
      </Layout>
    </>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
