import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Lottie from "lottie-react"


import Knjiga from "../../content/assets/knjiga.png"
import knjigaSlide1152 from "../animations/knjigaSlide1152"
import knjigaSlide350 from "../animations/knjigaSlide350"
import knjiga370 from "../animations/knjiga370"

const AnimationWrap = styled.div`
  @media only screen and (max-width: 1152px) {
    transform: scale(1.1);
  }
  @media only screen and (max-width: 999px) {
    transform: scale(1.3);
  }
`

function KnjigaSlideAnimation() {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 91],
      },
    ],
  }

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function renderAnimation(width) {
    if (width < 350) {
      return (
        <Lottie
          animationData={knjigaSlide350}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    } else {
      return (
        <Lottie
          animationData={knjigaSlide1152}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    }
  }

  return <AnimationWrap>{renderAnimation(windowSize.width)}</AnimationWrap>
}

export default KnjigaSlideAnimation
