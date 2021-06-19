import React, { useState, useEffect } from "react"
import styled from "styled-components"

import Lottie from "lottie-react"

// import alkar1152 from "../animations/alkar1152"
// import alkar1152 from "../animations/alkar2"
import alkarNovo2 from "../animations/alkarNovo2"
// import animation750 from "../animations/footer750";
// import animation550 from "../animations/footer550";
// import animation350 from "../animations/footer350";

const AnimationWrap = styled.div`
  @media (max-width: 650px) {
    transform: scale(1.5);
  }
  @media (max-width: 500px) {
    margin: 27vw 0 0;
  }
  @media (max-width: 400px) {
    margin: 0;
  }
`

function AlkarAnimation() {
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
    //       animationData={animation350}
    //       interactivity={interactivity}
    //       autoPlay={false}
    //       loop={false}
    //     />
    //   );
    // } else if (width < 550) {
    //   return (
    //     <Lottie
    //       animationData={animation550}
    //       interactivity={interactivity}
    //       autoPlay={false}
    //       loop={false}
    //     />
    //   );
    // } else if (width < 750) {
    //   return (
    //     <Lottie
    //       animationData={animation750}
    //       interactivity={interactivity}
    //       autoPlay={false}
    //       loop={false}
    //     />
    //   );
    // } else {
    return (
      <Lottie
        animationData={alkarNovo2}
        interactivity={interactivity}
        autoPlay={false}
        loop={false}
      />
    )
    // }
  }

  return <AnimationWrap>{renderAnimation(windowSize.width)}</AnimationWrap>
}

export default AlkarAnimation
