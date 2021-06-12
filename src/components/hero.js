import React, { useState, useEffect } from "react"
import styled from "styled-components"
import HeroPhoto from "../../content/assets/heroPhoto.png"
import Knjiga from "../../content/assets/knjiga.png"
import Brodi from "../../content/assets/brodi.png"
import Pas from "../../content/assets/pas.png"
import Cart from "../../content/assets/cart.svg"
import Button from "./button"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { CgMenuGridR } from "react-icons/cg"
import { useWindowSize } from "./useWindowSize"
import { graphql } from "gatsby"
// import { useTranslation } from "gatsby-plugin-react-i18next"
import { useTranslation } from "react-i18next"
import MeniMobile from "./meniMobile"

const Wrap = styled.div`
  background-color: rgb(28, 17, 0);
  position: relative;
  width: 100%;
  height: 544px;
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
  top: 97px;
  left: 166px;
  margin: 0 auto;
  display: flex;
  z-index: 10;
  @media only screen and (max-width: 999px) {
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
const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  width: 385px;
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
const WrapPodaci = styled.div`
  width: 330px;
  font-family: Raleway;
  font-size: 15px;
  line-height: 23px;
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
const Hamburger = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: black;
  background-color: #b0c7ce;
  position: relative;
  width: 100%;
  height: 55px;
  /* top: 2px; */
  margin-right: 30px;
  padding-left: 48px;
  /* display: none; */

  @media screen and (min-width: 750px) {
    display: none;
  }
  @media screen and (max-width: 450px) {
    padding-left: 20px;
  }
`
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
  justify-content: center;
  @media only screen and (max-width: 750px) {
    width: 200px;
  }
`
const Hero = () => {
  const [t, i18n] = useTranslation()
  // const [innerwidth, setInnerwidth] = useState(window.innerWidth)
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
        {/* <Hamburger
          onClick={() => {
            setIsOpen(() => !isOpen)
            // blockScroll()
          }}
        >
          <div
            style={{
              fontFamily: "Playfair Display",
              color: "white",
              fontWeight: "500",
              fontSize: "24",
            }}
          >
            ZaboravljenaDalmacija.hr
          </div>
          <CgMenuGridR
            style={{
              color: "white",
              width: "28px",
              height: "28px",
              position: "absolute",
              top: "15px",
              right: "10px",
              zIndex: "11",
            }}
          />
        </Hamburger>{" "} */}
        <ImgOverflowHidden>
          <Slider
            dots={false}
            fade={true}
            infinite={true}
            speed={6000}
            // slidesToShow={1}
            // slidesToScroll={1}
            // autoplaySpeed={8000}
            autoplay={true}
            cssEase="cubic-bezier(0,0,0,1.01)"
          >
            <Img>
              <img src={HeroPhoto} alt="hero" />
            </Img>
            <Img>
              <img src={Brodi} alt="brod" />
            </Img>
            <Img>
              <img src={Pas} alt="pas" />
            </Img>
          </Slider>
        </ImgOverflowHidden>
        <WrapItems>
          <KnjigaWrap>
            <img src={Knjiga} width="100%" alt="knjiga" />
          </KnjigaWrap>
          <WrapText>
            <WrapNaslov>{t("pricaKakoJe")}</WrapNaslov>
            {size.width > 750 ? (
              <ButtonWrap>
                <a href="https://shop.zaboravljenadalmacija.hr">
                  <Button text={t("kupiAtlas")} ikona={Cart} color="white" />
                </a>
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

// {size.width > 750 ? (
//   <ButtonWrap>
//     <Button text={t("kupiAtlas")} ikona={Cart} color="white" />
//   </ButtonWrap>
// ) : (
//   <ButtonWrap>
//     <Button
//       text={t("kupiatlaskratko")}
//       ikona={Cart}
//       color="white"
//     />
//   </ButtonWrap>
// )}{" "}
