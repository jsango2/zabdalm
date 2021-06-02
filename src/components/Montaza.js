import React from "react"
import styled from "styled-components"
import Lottie from "lottie-react"
import animation1152 from "../animations/grad/grad"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 527px;
  position: relative;
  margin-top: -100px;
  margin-bottom: 150px;
  @media only screen and (max-width: 750px) {
    margin-top: 0px;
    width: 120%;
    height: 450px;
  }
  @media only screen and (max-width: 620px) {
    height: 240px;
  }
  @media only screen and (max-width: 550px) {
    height: 180px;
  }
  @media only screen and (max-width: 378px) {
    height: 130px;
  }
`

function Montaza() {
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
        animationData={animation1152}
        interactivity={interactivity}
        autoPlay={false}
        loop={false}
      />
    </Wrap>
  )
}

export default Montaza
