import React from "react"
import styled from "styled-components"

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useTranslation } from "gatsby-plugin-react-i18next"
import { useWindowSize } from "../components/useWindowSize"
// import Lottie from "lottie-react"

// import animation1152 from "../animations/val/val"
// import animation370 from "../animations/val/val2"
// import val999 from "../animations/val/val999"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 191px;
  position: relative;
  margin: 200px 0 112px 0;
  text-align: center;
  @media only screen and (max-width: 750px) {
    margin: 100px 0 12px 0;
    height: 200px;
  }
  @media only screen and (max-width: 550px) {
    /* margin: 100px 0 12px 0; */
    height: 200px;
  }
  @media only screen and (max-width: 430px) {
    /* margin: 100px 0 12px 0; */
    height: 100px;
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
    width: 100%;
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
  margin-bottom: 41px;
  @media only screen and (max-width: 550px) {
    margin-bottom: 15px;
  }
`
const WrapLottie = styled.div`
  position: relative;

  @media only screen and (max-width: 430px) {
    top: -55px;
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
  let settings = {}
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.3, 0.7],
        type: "seek",
        frames: [0, 152],
      },
    ],
  }
  if (size.width > 750) {
    settings = {
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    }
  } else {
    settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
      cssEase: "linear",
    }
  }
  // function RenderAnimation() {
  //   if (size.width < 750) {
  //     return (
  //       <Lottie
  //         animationData={animation370}
  //         interactivity={interactivity}
  //         autoPlay={false}
  //         loop={false}
  //       />
  //     )
  //   } else {
  //     return (
  //       <Lottie
  //         animationData={val999}
  //         interactivity={interactivity}
  //         autoPlay={false}
  //         loop={false}
  //       />
  //     )
  //   }
  // }

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
            <a
              href={partner.node.partneriProjekta.weblinkpartnerprojekta}
              key={partner.node.id}
            >
              <WrapSponzorSlider className="WrapSponzorSlider">
                {" "}
                <img
                  width="200px"
                  src={partner.node.featuredImage.node.sourceUrl}
                  alt=""
                />
              </WrapSponzorSlider>
            </a>
          ))}
        </Slider>
      </WrapSponzori>
    </Wrap>
  )
}

export default PartneriProjektaFront
