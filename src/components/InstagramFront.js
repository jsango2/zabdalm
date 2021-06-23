import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Drnis from "../../content/assets/drnis.png"
// import Val from "../../content/assets/valinstagram.svg"
import Button from "./button"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import { useWindowSize } from "../components/useWindowSize"
import { InstaMobile } from "./instaMobile"
import { InstaDesktop } from "./instaDesktop"
import Lottie from "lottie-react"

import animacijaInstagram from "./../animations/instagram/instagramAnimacija"
import animacijaInstagram750 from "./../animations/instagram/instagramAnimacija750"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  margin-top: 200px;
  text-align: center;
<<<<<<< HEAD
  @media only screen and (max-width: 800px) {
    height: 1217px;
  }
  @media only screen and (max-width: 620px) {
    height: 1022px;
  }
  @media only screen and (max-width: 520px) {
    height: 855px;
  }
=======
>>>>>>> 5b04970480176678ea732fe591c87209ff505ad6
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
  margin: 30px auto 61px;
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
  /* height: 560px; */
  bottom: 915px;
  /* top: -177px;
  background-image: url(${Drnis});
  background-position: bottom;
  background-size: contain;
  background-repeat: no-repeat; */
  z-index: 1;
  @media only screen and (max-width: 700px) {
    /* width: 200px; */
    bottom: 937px;
  }
  @media only screen and (max-width: 550px) {
    /* width: 200px; */
    bottom: 828px;
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
  const [t, i18n] = useTranslation()
  const size = useWindowSize()

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
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.8],
        type: "seek",
        frames: [0, 129],
      },
    ],
  }
  return (
    <Wrap>
      {/* <WrapNaslov>
        <Linija />
        <Naslov>{t("pratiteNasNaInstagramu")}</Naslov>
        <Linija />
      </WrapNaslov> */}

      {/* {size.width < 750 ? <InstaMobile /> : <InstaDesktop />} */}
      <a href="http://www.instagram.com/zaboravljena_dalmacija">
        <Lottie
          style={{ textAlign: "center", position: "relative", zIndex: "3" }}
          animationData={
            size.width > 750 ? animacijaInstagram : animacijaInstagram750
          }
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      </a>

      <Paragraf>{t("otkupljujemo")}</Paragraf>
      <ButtonWrap>
        <Button text={t("kontaktirajteNas")} color="black" />
      </ButtonWrap>

      <ButtonWrapInvisible>
        <Link to="/Kontakt">
          {" "}
          <Button text={t("kontaktirajteNas")} color="black" />
        </Link>
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
