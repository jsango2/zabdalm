import React from "react"
import styled from "styled-components"
import MapaFront from "../../content/assets/mapaFront.png"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 494px;
  position: relative;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  line-height: 65px;
  margin-bottom: 31px;
  color: white;
  text-align: center;
  @media only screen and (max-width: 750px) {
    margin-bottom: 15px;

    font-size: 36px;
  }
`
const Podnaslov = styled.div`
  font-family: Amiri;
  font-size: 24px;
  font-weight: 400;
  color: white;
  @media only screen and (max-width: 750px) {
    font-size: 18px;
  }
`

function RazgledniceNaMapiFront() {
  const [t, i18n] = useTranslation()

  return (
    <Link to="/Razglednice">
      <Wrap
        style={{
          backgroundImage: `url(${MapaFront})`,
        }}
      >
        <Naslov>{t("razglednicenamapi")}</Naslov>
        <Podnaslov>{t("kliknizaulaz")}</Podnaslov>
      </Wrap>
    </Link>
  )
}

export default RazgledniceNaMapiFront
