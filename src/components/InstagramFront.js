import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Drnis from "../../content/assets/drnis.png"
// import Val from "../../content/assets/valinstagram.svg"
import Button from "./button"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 1330px;
  position: relative;
  margin-top: 200px;
  text-align: center;
  @media only screen and (max-width: 800px) {
    height: 1250px;
  }
  @media only screen and (max-width: 520px) {
    height: 1050px;
  }
  @media only screen and (max-width: 370px) {
    height: 1050px;
  }
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
const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  line-height: 54px;
  @media only screen and (max-width: 550px) {
    font-size: 36px;
    line-height: 44px;
  }
`
const WrapNaslov = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 61px;
  @media only screen and (max-width: 550px) {
    margin-bottom: 31px;
  }
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
  @media only screen and (max-width: 750px) {
    width: 75%;
    min-width: 300px;
  }
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
const ButtonWrapInvisible = styled.div`
  position: relative;
  top: -44px;
  z-index: 2;
  opacity: 0;
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
  bottom: 915px;
  /* top: -177px;
  background-image: url(${Drnis});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat; */
  z-index: 1;
  @media only screen and (max-width: 700px) {
    /* width: 200px; */
    bottom: 965px;
  }
  @media only screen and (max-width: 550px) {
    /* width: 200px; */
    bottom: 897px;
  }
`
const Linija = styled.div`
  height: 1px;
  width: 73px;
  background-color: black;
  @media only screen and (max-width: 550px) {
    width: 55px;
  }
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
      <WrapNaslov>
        <Linija />
        <Naslov>Pratite nas na Instagramu</Naslov>
        <Linija />
      </WrapNaslov>

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

      <ButtonWrapInvisible>
        <Button text="KONTAKTIRAJTE NAS" color="black" />
      </ButtonWrapInvisible>

      <ImgWrap className="imgWrapInstagram">
        <img
          style={{
            transform: `translateY(${offset * 0.11}px)`,
          }}
          src={Drnis}
          alt=""
        />
      </ImgWrap>
    </Wrap>
  )
}

export default InstagramFront
