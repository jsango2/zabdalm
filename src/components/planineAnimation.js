import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Lottie from "lottie-react"

import planine1152 from "../animations/planine1152"
import kolaz750 from "../animations/kolaz750"
import kolaz550 from "../animations/kolaz550"
import kolaz350 from "../animations/kolaz350"

const AnimationWrap = styled.div`
position:relative;
top: -1700px;
  /* position: relative;
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
  } */
`

function PlanineAnimation() {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [50,158],
      }
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
    // if (width < 350) {
    //   return (
    //     <Lottie
    //       animationData={kolaz350}
    //       interactivity={interactivity}
    //       autoPlay={false}
    //       loop={false}
    //     />
    //   )
    // } else if (width < 550) {
    //   return (
    //     <Lottie
    //       animationData={kolaz550}
    //       interactivity={interactivity}
    //       autoPlay={false}
    //       loop={false}
    //     />
    //   )
    // } else if (width < 750) {
    //   return (
    //     <Lottie
    //       animationData={kolaz750}
    //       interactivity={interactivity}
    //       autoPlay={false}
    //       loop={false}
    //     />
    //   )
    // } else {
      return (
        <Lottie
          animationData={planine1152}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    // }
  }

  return <AnimationWrap>{renderAnimation(windowSize.width)}</AnimationWrap>
}

export default PlanineAnimation
