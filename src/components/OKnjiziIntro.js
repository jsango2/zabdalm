import React from 'react'
import styled from "styled-components"
import { graphql } from "gatsby"

import {
    Link,
    Trans,
    useTranslation,
    useI18next,
  } from "gatsby-plugin-react-i18next"

const WrapNaslov = styled.div`
  font-family: Playfair Display;
  font-size: 48px;
  font-weight: 600;
  line-height: 55px;
  color: #000;
  margin: 60px 0 40px 0;
  max-width: 600px;
  line-height: 103.3%;

  @media only screen and (max-width: 999px) {
  }
  @media only screen and (max-width: 750px) {
    width: 100%;
    font-size: 44px;
    line-height: 46px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 34px;
  }
  @media only screen and (max-width: 330px) {
  }
`
const IntroAbout = styled.div`
`
const AboutP = styled.p`
  font-size: 15px;
  line-height: 23.43px;
  color: #000000;
  font-weight: 500;
`
const TextContainer = styled.div`
  max-width: 812px;
  margin: 0 auto;

  @media only screen and (max-width: 850px) {
    padding: 0 10%;
  }
  @media only screen and (max-width: 750px) {
    padding: 0 48px;
  }
  @media only screen and (max-width: 450px) {
    padding: 0 20px;
  }
`
const BreakContainer = styled.div`
  max-width: 742px;
`
const SecBreakContainer = styled.div`
  max-width: 629px;

  @media only screen and (max-width: 850px) {
    max-width: 500px;
  }
`
const NaslovSideCrta = styled.div`
  width: 120px;
  height: 1.2px;
  background-color: #292929;
  position: relative;
  left: -21%;
  top: 90px;

  @media only screen and (max-width: 1152px) {
    width: 18%;
  }
`

const OKnjiziIntro = () => {

    const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()

    return (
        <TextContainer>
        <NaslovSideCrta />
        <WrapNaslov>{t("mozelidalmacija")}</WrapNaslov>
        <IntroAbout>
          <AboutP>{t("oknjizi1")}</AboutP>
          <AboutP>{t("oknjizi2")}</AboutP>
          <AboutP>{t("oknjizi3")}</AboutP>
        </IntroAbout>
        <BreakContainer>
          <AboutP>{t("oknjizi4")}</AboutP>
          <AboutP>{t("oknjizi5")}</AboutP>
          <AboutP>{t("oknjizi6")}</AboutP>
        </BreakContainer>
        <SecBreakContainer>
          <AboutP>{t("oknjizi7")}</AboutP>
          <AboutP>{t("oknjizi8")}</AboutP>
          <AboutP>{t("oknjizi9")}</AboutP>
          <AboutP>Igor Goleš</AboutP>
        </SecBreakContainer>
      </TextContainer>
    )
}

export default OKnjiziIntro

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