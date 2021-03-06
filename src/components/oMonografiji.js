import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import Knjiga from "../../content/assets/knjiga.png"
import Ulomak from "../../content/assets/ulomakStamp.svg"
import ulomakPdf from "../../content/assets/ulomakPdf.pdf"

import KnjigaSlideAnimation from "./knjigaSlideAnimation"

const MonoDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0;
  @media only screen and (max-width: 1152px) {
    margin-top: 90px;
  }
`
const MonoSection = styled.div`
  width: 50%;

  @media only screen and (max-width: 850px) {
    max-width: 812px;
    width: 100%;
    margin: 0 auto;
    padding: 0 10%;
  }
`
const MonoNaslovSideCrta = styled.div`
  background-color: #292929;
  width: 200px;
  height: 1.2px;
  position: relative;
  top: 33px;
  left: -225px;

  @media only screen and (max-width: 550px) {
    top: 22px;
  }
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

  @media only screen and (max-width: 550px) {
    font-size: 36px;
  }
`
const KnjigaWrap = styled.div`
  width: 45%;
  position: relative;
  @media only screen and (max-width: 1052px) {
    left: -6vw;
    & > img {
      transform: scale(1.3);
    }
  }

  @media only screen and (max-width: 850px) {
    display: none;
  }
`
const UlomakWrap = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  top: -400px;
  left: 290px;

  @media only screen and (max-width: 1152px) {
    left: 27vw;
  }
`
const AboutP = styled.p`
  font-size: 15px;
  line-height: 23.43px;
  color: #000000;
  font-weight: 500;
`

const OMonografiji = () => {
  const { t } = useTranslation()
  // const { languages, changeLanguage } = useI18next()

  return (
    <MonoDiv>
      <KnjigaWrap>
        <a href={ulomakPdf} download>
          <KnjigaSlideAnimation />
        </a>
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
  )
}

export default OMonografiji
