import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Lottie from "lottie-react"

import kolaz1152 from "../animations/kolaz1152"
import kolaz750 from "../animations/kolaz750"
import kolaz550 from "../animations/kolaz550"
import kolaz350 from "../animations/kolaz350"

import vojnik1152 from "../animations/vojnik1152"
import planine1152 from "../animations/planine1152"

const AnimationWrap = styled.div`
  position: relative;
  margin-bottom: -1600px;

  @media only screen and (max-width: 1152px) {
    top: -138vw;
    margin-bottom: -138vw;
  }
  @media only screen and (max-width: 550px) {
    top: -9vw;
    margin-bottom: -10vw;
  }
  
`

const Vojnik = styled.div`
  position: relative;
  top: -1000px;
`
const Planine = styled.div`
  position: relative;
  top: -1700px;
`

function KolazAnimation() {
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
  const interactivity750 = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.3, 1],
        type: "seek",
        frames: [0, 153],
      },
    ],
  }
  const interactivityVojnik = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [0, 133],
      },
    ],
  }
  const interactivityPlanine = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "seek",
        frames: [45, 158],
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
          animationData={kolaz350}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    } else if (width < 550) {
      return (
        <Lottie
          animationData={kolaz550}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      )
    } else if (width < 1152) {
      return (
        <Lottie
          animationData={kolaz750}
          interactivity={interactivity750}
          autoPlay={false}
          loop={false}
        />
      )
    } else {
      return (
        <>
          <Vojnik>
            <Lottie
              animationData={vojnik1152}
              interactivity={interactivityVojnik}
              autoPlay={false}
              loop={false}
            />
          </Vojnik>
          <Planine>
            <Lottie
              animationData={planine1152}
              interactivity={interactivityPlanine}
              autoPlay={false}
              loop={false}
            />
          </Planine>
        </>
      )
    }
  }

  return <AnimationWrap>{renderAnimation(windowSize.width)}</AnimationWrap>
}

export default KolazAnimation
