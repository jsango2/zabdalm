import React from "react"
import styled from "styled-components"
import { text } from "./dummyData/textPrice"
import { useTranslation } from "react-i18next"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  min-height: 316px;
  position: relative;
  margin: 50px 0 55px 0;
  text-align: center;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`
const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  line-height: 43px;
  @media only screen and (max-width: 750px) {
    font-size: 36px;
  }
`
const Linija = styled.div`
  height: 1px;
  width: 110px;
  background-color: black;
  @media only screen and (max-width: 550px) {
    width: 55px;
  }
`
const Clanci = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 90%;
  margin: 0 auto;
  /* @media only screen and (max-width: 550px) {
    width: 55px; */
  /* } */
`
const TextClanci = styled.div`
  font-family: Raleway;
  font-size: 12px;
  font-weight: 500;
  width: 250px;
  height: 58px;
  text-align: left;
  line-height: 16px;
  margin: 0 15px 16px 0;
  /* @media only screen and (max-width: 550px) {
    width: 55px; */
  /* } */
`

function NajpopularnijePrice() {
  const [t, i18n] = useTranslation()

  return (
    <Wrap>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "61px",
        }}
      >
        <Linija />
        <Naslov>{t("najpopularnijeprice.1")}</Naslov>
        <Linija />
      </div>
      <Clanci>
        {text.map(clanak => (
          <TextClanci>{clanak.title}</TextClanci>
        ))}
      </Clanci>
    </Wrap>
  )
}

export default NajpopularnijePrice
