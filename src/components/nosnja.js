import React from "react"
import styled from "styled-components"
import Lottie from "lottie-react"

import animation1152 from "./../animations/etno/etno"
import etnoNovo from "./../animations/etno/etnoNovo"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 473px;
  position: relative;
  margin: 29px 0 2px 0;
  @media only screen and (max-width: 950px) {
    height: 349px;

    /* height: 473px; */
  }
  @media only screen and (max-width: 750px) {
    height: 500px;
    width: 180%;
    left: -15%;

    /* height: 473px; */
  }
  @media only screen and (max-width: 500px) {
    height: 310px;

    /* height: 473px; */
  }
`

function Nosnja() {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0, 0.0],
        type: "stop",
        frames: [0],
      },
      {
        visibility: [0.25, 0.6],
        type: "seek",
        frames: [0, 152],
      },
    ],
  }
  return (
    <Wrap>
      <Lottie
        style={{ textAlign: "center" }}
        animationData={etnoNovo}
        interactivity={interactivity}
        autoPlay={false}
        loop={false}
      />
    </Wrap>
  )
}

export default Nosnja
