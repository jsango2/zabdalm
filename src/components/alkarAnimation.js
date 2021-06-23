import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Lottie from "lottie-react"

import alkar750 from "../animations/alkar750"
import alkar400 from "../animations/alkar400"
import alkarNovo2 from "../animations/alkarNovo2"
import { useWindowSize } from "../components/useWindowSize"
const AnimationWrap = styled.div`
  @media (max-width: 500px) {
    margin: 27vw 0 0;
  }
  @media (max-width: 400px) {
    margin: 0;
  }
`

function AlkarAnimation() {
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
    if (size.width < 400) {
      return (
        <Lottie
          animationData={alkar400}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    } else if (size.width < 750) {
      return (
        <Lottie
          animationData={alkar750}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    } else {
      return (
        <Lottie
          animationData={alkarNovo2}
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

export default AlkarAnimation
