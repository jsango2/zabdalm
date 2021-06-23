import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Lottie from "lottie-react"
import { useWindowSize } from "../components/useWindowSize"

import animation1152 from "../animations/footer1152"
import animation750 from "../animations/footer750"
import animation550 from "../animations/footer550"
import animation350 from "../animations/footer350"
import etnoAboutUs from "../animations/etno/etnoAboutUs"

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

function FooterAnimation2() {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.15, 0.9],
        type: "seek",
        frames: [0, 90],
      },
    ],
  }
  const [Anim, setAnim] = useState(
    <Lottie
      animationData={animation1152}
      interactivity={interactivity}
      autoPlay={false}
      loop={false}
    />
  )
  const size = useWindowSize()

  useEffect(() => {
    if (size.width < 350) {
      setAnim(
        <Lottie
          animationData={animation350}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    } else if (size.width < 550) {
      setAnim(
        <Lottie
          animationData={animation550}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    } else if (size.width < 750) {
      setAnim(
        <Lottie
          animationData={animation750}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    } else {
      setAnim(
        <Lottie
          animationData={animation1152}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    }
  }, [])

  return (
    <AnimationWrap>
      {/* {size.width < 350 ? (
        <Lottie
          animationData={animation550}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      ) : size.width < 550 ? (
        <Lottie
          animationData={animation550}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      ) : size.width < 750 ? (
        <Lottie
          animationData={animation750}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      ) : (
        <Lottie
          animationData={animation1152}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )} */}
      {Anim}
    </AnimationWrap>
  )
}

export default FooterAnimation2
