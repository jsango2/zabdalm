import React from "react"
import styled from "styled-components"
import CROweek from "../../content/assets/CROweek.png"
import Jelsa from "../../content/assets/Jelsa.png"
import Secret from "../../content/assets/secret.png"
import Linija from "../../content/assets/linijaMont.png"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { useWindowSize } from "../components/useWindowSize"
import Lottie from "lottie-react"

import animation1152 from "../animations/val/val2"
import animation370 from "../animations/val/val370"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 545px;
  position: relative;
  margin: 200px 0 112px 0;
  text-align: center;
  @media only screen and (max-width: 750px) {
    margin: 100px 0 12px 0;
    height: 410px;
  }
  @media only screen and (max-width: 550px) {
    /* margin: 100px 0 12px 0; */
    height: 265px;
  }
`
const WrapSponzori = styled.div`
  /* display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 151px; */

  @media only screen and (max-width: 750px) {
    /* margin: 70px 0 70px 0; */
  }
`
const WrapSponzorSlider = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 750px) {
    height: 150px;
  }
`
const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  line-height: 63px;
  @media only screen and (max-width: 550px) {
    font-size: 36px;
    line-height: 43px;
  }
`
const WrapNaslov = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 61px;
  @media only screen and (max-width: 550px) {
    margin-bottom: 15px;
  }
`
const WrapLottie = styled.div`
  position: relative;

  @media only screen and (max-width: 430px) {
    top: -80px;
  }
`
// const Naslov = styled.div`
//   font-family: Playfair Display;
//   font-size: 54px;
//   font-weight: 600;
//   @media only screen and (max-width: 550px) {
//     font-size: 36px;
//   }
// `

function PartneriProjektaFront({ data }) {
  const [t, i18n] = useTranslation()
  const size = useWindowSize()
  console.log(data)
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 1100,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       lazyLoad: true,
    //       arrows: true,
    //       speed: 500,
    //     },
    //   },
    //   {
    //     breakpoint: 780,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       lazyLoad: true,
    //       arrows: true,
    //       speed: 500,
    //     },
    //   },
    //   {
    //     breakpoint: 633,
    //     settings: {
    //       className: "center",
    //       centerMode: true,
    //       centerPadding: "40px",
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       lazyLoad: true,
    //       arrows: false,
    //       speed: 500,
    //     },
    //   },
    // ],
  }
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.0],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.3, 0.8],
        type: "seek",
        frames: [0, 152],
      },
    ],
  }
  return (
    <Wrap>
      <WrapNaslov>
        <div
          style={{ height: "1px", width: "110px", backgroundColor: "black" }}
        ></div>
        <Naslov>{t("partneriProjekta")}</Naslov>
        <div
          style={{ height: "1px", width: "110px", backgroundColor: "black" }}
        ></div>
      </WrapNaslov>

      <WrapSponzori>
        <Slider {...settings}>
          {data.partneriProjekta.edges.map(partner => (
            <WrapSponzorSlider className="WrapSponzorSlider">
              {" "}
              <img
                width="200px"
                src={partner.node.featuredImage.node.sourceUrl}
                alt=""
              />
            </WrapSponzorSlider>
          ))}
        </Slider>
      </WrapSponzori>

      <WrapLottie>
        <Lottie
          animationData={size.width < 430 ? animation370 : animation1152}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      </WrapLottie>
    </Wrap>
  )
}

export default PartneriProjektaFront
