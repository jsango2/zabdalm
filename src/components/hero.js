import React, { useState } from "react"
import styled from "styled-components"
import HeroPhoto from "../../content/assets/heroPhoto.png"
import Knjiga from "../../content/assets/knjiga.png"
import KnjigaOld from "../../content/assets/knjigaOld.png"
import KnjigaArhiva from "../../content/assets/knjigaArhiva.webp"
import KnjigaPopust from "../../content/assets/Knjiga_popust.png"
import Brodi from "../../content/assets/brodi.png"
import Pas from "../../content/assets/pas.png"
import Cart from "../../content/assets/cart.svg"
import Sticker from "../../content/assets/stickerSale2022.png"
import StickerHr from "../../content/assets/saleHr.svg"
import StickerEng from "../../content/assets/saleEng.svg"
import SOLDOUTENG from "../../content/assets/SOLDOUTENG.svg"
import SOLDOUTHR from "../../content/assets/SOLDOUTHR.svg"
import Button from "./button"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useWindowSize } from "./useWindowSize"
// import { useTranslation } from "gatsby-plugin-react-i18next"
import { useTranslation } from "react-i18next"
import MeniMobile from "./meniMobile"
import heroLottie1152 from "./../animations/hero/HeroLottie"
import i18next from "i18next"

import Lottie from "lottie-react"
import animationHero from "../animations/hero/heroLottieNovo"

const Wrap = styled.div`
  background-color: rgb(28, 17, 0);
  position: relative;
  width: 100%;
  height: 680px;

  @media only screen and (max-width: 750px) {
    height: 478px;
  }
  @media only screen and (max-width: 550px) {
    height: 478px;
  }
`
const WrapItems = styled.div`
  width: 879px;
  height: 554px;
  position: absolute;
  top: 220px;
  left: 166px;
  margin: 0 auto;
  display: flex;
  z-index: 10;
  @media only screen and (max-width: 999px) {
    top: 100px;

    left: 68px;
    width: 760px;
  }
  @media only screen and (max-width: 750px) {
    transform: translate(-50%, -2%);

    left: 50%;
    width: 306px;
    height: 563px;
    flex-direction: column-reverse;
    align-items: center;
  }
`
const WrapSticker = styled.div`
  /* width: 230px;
  height: 304px;
  position: absolute;
  top: 197px;
  right: -90px;

  z-index: 10; */

  width: 82%;
  height: 304px;
  position: absolute;
  top: 232px;
  right: -13px;
  z-index: 10;
  transform: rotate(342deg);
  @media only screen and (max-width: 999px) {
  }
  @media only screen and (max-width: 750px) {
    top: 100px;
    right: -20px;

    /* width: 120px;
    height: 144px;
    top: 77px;

    right: -50px; */
  }
`
const WrapSoldOut = styled.div`
  width: 223px;
  height: 52px;
  position: absolute;
  top: 300px;
  right: 58px;
  transform: rotate(-12deg);
  background-color: #b0c7ce;
  z-index: 10;
  display: flex;
  color: white;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  border: 2px solid white;
  @media only screen and (max-width: 999px) {
  }
  @media only screen and (max-width: 750px) {
    width: 157px;
    height: 51px;
    top: 112px;
    right: -11px;
  }
`
const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  width: 336px;
  @media only screen and (max-width: 750px) {
    align-items: center;
    width: 313px;
  }
`
const WrapNaslov = styled.div`
  /* width: 400px; */
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 500;
  line-height: 55px;
  color: white;
  margin: 60px 0 30px 0;

  @media only screen and (max-width: 999px) {
    width: 350px;
  }
  @media only screen and (max-width: 750px) {
    width: 100%;
    font-size: 44px;
    text-align: center;
    line-height: 42px;

    margin: 0;
  }
  @media only screen and (max-width: 550px) {
    font-size: 34px;
  }
  @media only screen and (max-width: 330px) {
    width: 280px;
  }
`
const WrapPodaci = styled.div`
  width: 330px;
  font-family: Raleway;
  font-size: 15px;
  line-height: 21px;
  color: white;
  padding: 25px 0 30px 0;

  @media only screen and (max-width: 750px) {
    text-align: center;
    font-size: 12px;
    width: 457px;
    padding-bottom: 30px;
  }
  @media only screen and (max-width: 450px) {
    width: 90%;
  }
`

const KnjigaWrap = styled.div`
  width: 444px;
  height: 574px;
  /* background-image: url(${Knjiga}); */
  position: relative;
  /* background-position: center;
  background-size: cover; */
  z-index: 10;
  @media only screen and (max-width: 999px) {
    top: 20px;
  }
  @media only screen and (max-width: 750px) {
    top: unset;
    width: 34vw;
    min-width: 200px;
    height: 363px;
  }
`
// const Hamburger = styled.div`
//   display: flex;
//   align-items: center;
//   cursor: pointer;
//   color: black;
//   background-color: #b0c7ce;
//   position: relative;
//   width: 100%;
//   height: 55px;
//   /* top: 2px; */
//   margin-right: 30px;
//   padding-left: 48px;
//   /* display: none; */

//   @media screen and (min-width: 750px) {
//     display: none;
//   }
//   @media screen and (max-width: 450px) {
//     padding-left: 20px;
//   }
// `
const Img = styled.div`
  width: 100%;
  height: 544px;

  @media screen and (max-width: 750px) {
    height: 478px;
  }
  /* @media screen and (max-width: 550px) {
    height: 76vh;
  } */
`
const ImgOverflowHidden = styled.div`
  width: 100%;
  height: 544px;
  overflow: hidden;
  @media screen and (max-width: 750px) {
    height: 478px;
  }
  /* @media screen and (max-width: 550px) {
    height: 74.5vh;
  } */
`
const ButtonWrap = styled.div`
  width: 390px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  @media only screen and (max-width: 750px) {
    width: 200px;
  }
`
const Hero = () => {
  const [t, i18n] = useTranslation()
  // const [innerwidth, setInnerwidth] = useState(window.innerWidth)
  const [lang, setLang] = useState(i18next.language)

  const [isOpen, setIsOpen] = useState(false)

  const size = useWindowSize()
  // console.log(isOpen)
  const handleClickMenu = () => {
    setIsOpen(false)
    // allowScroll()
  }

  return (
    <>
      <MeniMobile handleClick={handleClickMenu} isOpen={isOpen} />
      <Wrap className="wrapHero">
        <Lottie
          className="lottieHero"
          animationData={animationHero}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
        />
        <WrapItems>
          <KnjigaWrap>
            <img src={KnjigaArhiva} width="100%" alt="knjiga" />
            {/* <WrapSoldOut>
              {i18next.language === "hr" ? (
                <div>RASPRODANO</div>
              ) : (
                <div>SOLD OUT</div>
              )}
            </WrapSoldOut>  */}

            {/* <WrapSticker>
              {" "}
              <img
                src={i18next.language === "hr" ? SOLDOUTHR : SOLDOUTENG}
                width="100%"
                alt="sticker"
              />
            </WrapSticker> */}
          </KnjigaWrap>
          <WrapText>
            <WrapNaslov>{t("pricaKakoJe")}</WrapNaslov>
            {size.width > 750 ? (
              <ButtonWrap>
                {i18next.language === "hr" ? (
                  <a href="https://webshop.zaboravljenadalmacija.hr/product/dalmacija-iz-arhive-jednog-kolekcionara/?v=c4cc1a1ba567">
                    <Button text={t("kupiAtlas")} color="white" />
                  </a>
                ) : (
                  <a href="https://webshop.zaboravljenadalmacija.hr/product/dalmacija-iz-arhive-jednog-kolekcionara/?v=c4cc1a1ba567">
                    <Button text={t("kupiAtlas")} color="white" />
                  </a>
                )}
              </ButtonWrap>
            ) : (
              <div></div>
            )}{" "}
            <WrapPodaci>{t("podaciOKnjizi")}</WrapPodaci>
          </WrapText>
        </WrapItems>
        {/* </div> */}
      </Wrap>
    </>
  )
}

export default Hero
