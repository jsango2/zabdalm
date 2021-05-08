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
import { useTranslation } from "gatsby-plugin-react-i18next"
import MeniMobile from "./meniMobile"

const Wrap = styled.div`
  /* background-color: grey; */
  position: relative;
  width: 100%;
  height: 544px;
  @media only screen and (max-width: 750px) {
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
    transform: translate(-50%, 10%);

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
  }
  @media only screen and (max-width: 550px) {
    font-size: 28px;
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

  @media only screen and (max-width: 750px) {
    width: 245px;
    height: 336px;
    /* margin-top: 10px; */
  }
`
const Hamburger = styled.div`
  cursor: pointer;
  color: black;
  position: relative;
  top: 2px;
  margin-right: 30px;
  /* display: none; */

  @media screen and (min-width: 750px) {
    display: none;
  }
`
const Img = styled.div`
  width: 100%;
  height: 544px;

  @media screen and (max-width: 750px) {
    height: 559px;
  }
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
  const handleClick = () => {
    setIsOpen(false)
    // allowScroll()
  }

  return (
    <>
      <MeniMobile handleClick={handleClick} isOpen={isOpen} />
      <Wrap>
        <Hamburger
          onClick={() => {
            setIsOpen(() => !isOpen)
            // blockScroll()
          }}
        >
          <CgMenuGridR
            style={{
              color: "white",
              width: "28px",
              height: "28px",
              position: "absolute",
              top: "25px",
              right: "0",
              zIndex: "11",
            }}
          />
        </Hamburger>{" "}
        <Slider
          dots={false}
          fade={true}
          infinite={true}
          speed={8000}
          slidesToShow={1}
          slidesToScroll={1}
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
        <WrapItems>
          <KnjigaWrap>
            <img src={Knjiga} width="100%" alt="knjiga" />
          </KnjigaWrap>
          <WrapText>
            <WrapNaslov>{t("pricaKakoJe")}</WrapNaslov>
            {size.width > 750 ? (
              <ButtonWrap>
                <Button text={t("kupiAtlas")} ikona={Cart} color="white" />
              </ButtonWrap>
            ) : (
              <ButtonWrap>
                <Button
                  text={t("kupiatlaskratko")}
                  ikona={Cart}
                  color="white"
                />
              </ButtonWrap>
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
