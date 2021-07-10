import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Lottie from "lottie-react"
// import { useWindowSize } from "../components/useWindowSize"

import madeBySutra from "../animations/madeBySutra"

const AnimationWrap = styled.div``

function MadeBySutra() {
  // const size = useWindowSize()

  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1],
        type: "play",
        frames: [0, 92],
      },
    ],
  }

  // const [windowSize, setWindowSize] = useState({
  //   width: undefined,
  //   height: undefined,
  // })
  // useEffect(() => {
  //   function handleResize() {
  //     setWindowSize({
  //       width: window.innerWidth,
  //       height: window.innerHeight,
  //     })
  //   }
  //   window.addEventListener("resize", handleResize)
  //   handleResize()
  //   return () => window.removeEventListener("resize", handleResize)
  // }, [])

  // function renderAnimation(width) {
  //   return (
  //     <Lottie
  //       animationData={madeBySutra}
  //       interactivity={interactivity}
  //       autoPlay={false}
  //       loop={true}
  //     />
  //   )
  //   // }
  // }

  return (
    <AnimationWrap>
      <Lottie
        animationData={madeBySutra}
        interactivity={interactivity}
        autoPlay={false}
        loop={true}
      />
    </AnimationWrap>
  )
}

export default MadeBySutra
