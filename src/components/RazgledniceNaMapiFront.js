import React, { useState, useEffect } from "react"
import styled from "styled-components"
import MapaFront from "../../content/assets/mapaFront.png"
import { useTranslation, Link } from "gatsby-plugin-react-i18next"
import Lottie from "lottie-react"

import animation1152 from "../animations/vertikalnaCrta/vertikalnaCrta"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 494px;
  position: relative;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
`
const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  line-height: 65px;
  margin-bottom: 15px;
  color: white;
  text-align: center;
  @media only screen and (max-width: 750px) {
    margin-bottom: 15px;
    line-height: 40px;
    font-size: 36px;
  }
`
const Podnaslov = styled.div`
  font-family: Amiri;
  font-size: 24px;
  font-weight: 400;
  color: white;
  @media only screen and (max-width: 750px) {
    font-size: 18px;
  }
`

function RazgledniceNaMapiFront() {
  const [t, i18n] = useTranslation()
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
      // {
      //   visibility: [0, 0.0],
      //   type: "stop",
      //   frames: [92],
      // },
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 92],
      },
    ],
  }

  return (
    <Link to="/Razglednice">
      <Wrap
        id="container"
        style={{
          // transform: `translateY(${offset * 0.07}px)`,
          backgroundSize: `${offset * 0.44}px`,
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${MapaFront})`,
          backgroundPosition: "40% 50%",
          backgroundOrigin: "content-box",
        }}
      >
        <Lottie
          style={{
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
          }}
          animationData={animation1152}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
        <Naslov>{t("razglednicenamapi")}</Naslov>
        <Podnaslov>{t("kliknizaulaz")}</Podnaslov>
      </Wrap>
    </Link>
  )
}

export default RazgledniceNaMapiFront
