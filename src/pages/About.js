import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"

import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from "gatsby-plugin-react-i18next"

import KolazAnimation from "../components/kolazAnimation"

import Knjiga from "../../content/assets/knjiga.png"
import Ulomak from "../../content/assets/ulomakStamp.png"

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
    width: 350px;
  }
  @media only screen and (max-width: 750px) {
    width: 100%;
    font-size: 44px;
    text-align: center;
    line-height: 46px;

    margin: 0;
  }
  @media only screen and (max-width: 550px) {
    font-size: 34px;
  }
  @media only screen and (max-width: 330px) {
    width: 280px;
  }
`

const IntroAbout = styled.div``

const AboutP = styled.p`
  font-size: 15px;
  line-height: 23.43px;
  color: #000000;
  font-weight: 500;
`

const TextContainer = styled.div`
  max-width: 812px;
  margin: 0 auto;
`
const BreakContainer = styled.div`
  max-width: 742px;
`
const SecBreakContainer = styled.div`
  max-width: 629px;
`
const NaslovSideCrta = styled.div`
  width: 120px;
  height: 1.2px;
  background-color: #292929;
  position: relative;
  left: -21%;
  top: 90px;
`
const KolazWrapper = styled.div`
  position: relative;
  top: -1070px;
  margin-bottom: -1070px;
`

const MonoDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 90px;
`

const MonoSection = styled.div`
  max-width: 550px;
`

const MonoNaslovSideCrta = styled.div`
  background-color: #292929;
  width: 200px;
  height: 1.2px;
  position: relative;
  top: 33px;
  left: -225px;
`

const MonoNaslov = styled.h2`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  line-height: 55px;
  color: #000;
  margin: 0 0 50px 0;
  max-width: 600px;
  line-height: 103.3%;
`

const KnjigaWrap = styled.div`
  width: 544px;
  position: relative;
  top: 120px;
  left: -60px;
`
const UlomakWrap = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  top: -400px;
  left: 290px;
`

const About = () => {
  const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()
  const [current, setCurrent] = useState(0)

  const handleClick = (e, id) => {
    current === id ? setCurrent(null) : setCurrent(id)
  }

  return (
    <Layout>
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

      <KolazWrapper>
        <KolazAnimation />
      </KolazWrapper>

      <MonoDiv>
        <KnjigaWrap>
          <img src={Knjiga} width="100%" alt="knjiga" />
          <UlomakWrap>
            <img src={Ulomak} width="100%" alt="ulomak" />
          </UlomakWrap>
        </KnjigaWrap>
        <MonoSection>
          <MonoNaslovSideCrta />
          <MonoNaslov>{t("omonografiji")}</MonoNaslov>
          <AboutP>{t("omonografijitekst1")}</AboutP>
          <AboutP>{t("omonografijitekst2")}</AboutP>
          <AboutP>{t("omonografijitekst3")}</AboutP>
          <AboutP>{t("omonografijitekst4")}</AboutP>
        </MonoSection>
      </MonoDiv>
    </Layout>
  )
}

export default About

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
