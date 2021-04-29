import React from "react"
import styled from "styled-components"
import Drnis from "../../content/assets/drnis.png"
import Button from "./button"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 1396px;
  position: relative;
  margin-top: 200px;
  text-align: center;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`
const Title = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  margin-bottom: 55px;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`
const Paragraf = styled.div`
  font-family: Amiri;
  font-size: 24px;
  font-weight: 400;
  line-height: 27px;
  margin-bottom: 55px;
  width: 673px;
  margin: 0 auto 61px;
  text-align: center;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`

function InstagramFront() {
  return (
    <Wrap>
      <Title>Pratite nas na Instagramu</Title>
      <div
        style={{
          height: "508px",
          width: "100%",
          backgroundColor: "grey",
          marginBottom: "63px",
        }}
      ></div>
      <Paragraf>
        Otkupljujemo sve stare predmete iz dalmatinske povijesti! Stare
        fotografije i razglednice, pisma, dokumente, novac, knjige, grafike i
        mape i ostalo!!!
      </Paragraf>
      <Button text="KONTAKTIRAJTE NAS" color="black" width="214" />
      <div>
        <img src={Drnis} alt="drnis" />
      </div>
    </Wrap>
  )
}

export default InstagramFront
