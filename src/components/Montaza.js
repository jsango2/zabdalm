import React from "react"
import styled from "styled-components"
import Lottie from "lottie-react"
import animation1152 from "../animations/grad/grad"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 527px;
  position: relative;
  top: -161px;
  margin-top: 0px;
  margin-bottom: 0px;
  /* display: flex; */
  /* align-content: center; */
  /* justify-content: center; */
  /* align-items: flex-start; */
  @media only screen and (max-width: 750px) {
    top: -161px;
    height: 450px;
    width: 129%;
    position: relative;
    left: -15%;
  }
  @media only screen and (max-width: 620px) {
    top: -95px;
    height: 240px;
  }
  @media only screen and (max-width: 550px) {
    top: -137px;

    height: 180px;
  }
  @media only screen and (max-width: 458px) {
    top: -71px;

    height: 130px;
  }
  @media only screen and (max-width: 368px) {
    top: -54px;

    height: 130px;
  }
`

function Montaza() {
  const interactivity = {
    mode: "scroll",
    actions: [
      // {
      //   visibility: [0, 0.0],
      //   type: "stop",
      //   frames: [0],
      // },
      {
        visibility: [0.25, 0.6],
        type: "seek",
        frames: [0, 152],
      },
    ],
  }
  return (
    <>
      {/* <Wrap>
        <Lottie
          animationData={animation1152}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      </Wrap> */}
      <Wrap>
        <Lottie
          animationData={animation1152}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      </Wrap>
    </>
  )
}

export default Montaza
