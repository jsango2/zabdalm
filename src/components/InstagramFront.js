import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Drnis from "../../content/assets/drnis.png"
import Val from "../../content/assets/valinstagram.svg"
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
const ButtonWrap = styled.div`
  width: 214px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 750px) {
    /* width: 200px; */
  }
`
const ImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 560px;
  background-image: url(${Drnis});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: 1;
`

function InstagramFront() {
  const [offset, setOffset] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
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
      <ButtonWrap>
        <Button text="KONTAKTIRAJTE NAS" color="black" />
      </ButtonWrap>

      <ImgWrap className="imgWrapInstagram">
        {" "}
        {/* <img src={Drnis} alt="" srcset="" /> */}
        <div style={{ position: "absolute", bottom: "18px", width: "100%" }}>
          <img src={Val} alt="" srcset="" />
        </div>
      </ImgWrap>
    </Wrap>
  )
}

export default InstagramFront
