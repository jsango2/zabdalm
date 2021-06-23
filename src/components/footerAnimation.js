import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Lottie from "lottie-react"

import animation1152 from "../animations/footer1152"
import animation750 from "../animations/footer750"
import animation550 from "../animations/footer550"
import animation350 from "../animations/footer350"
import { useWindowSize } from "../components/useWindowSize"

const AnimationWrap = styled.div`
  position: relative;
  top: 140px;
  @media (max-width: 1500px) {
    top: 10vw;
  }
  @media (max-width: 999px) {
    top: 15vw;
  }
  @media (max-width: 750px) {
    top: 20vw;
  }
  @media (max-width: 588px) {
    top: 25vw;
  }
  @media (max-width: 370px) {
    top: 30vw;
  }
`

function FooterAnimation() {
  const size = useWindowSize()

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 153],
      },
    ],
  }

  function RenderAnimation() {
    if (size.width < 550) {
      return (
        <Lottie
          animationData={animation350}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    } else if (size.width < 750) {
      return (
        <Lottie
          animationData={animation750}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    } else {
      return (
        <Lottie
          animationData={animation1152}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    }
  }

  return (
    <AnimationWrap>
      <RenderAnimation />
    </AnimationWrap>
  )
}

export default FooterAnimation
