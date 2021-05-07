import React from "react"
import styled from "styled-components"
import CROweek from "../../content/assets/CROweek.png"
import Jelsa from "../../content/assets/Jelsa.png"
import Secret from "../../content/assets/secret.png"
import Linija from "../../content/assets/linijaMont.png"
import Lottie from "lottie-react"

import animation1152 from "../animations/val/val"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 520px;
  position: relative;
  margin: 200px 0 112px 0;
  text-align: center;
  @media only screen and (max-width: 750px) {
    margin: 100px 0 12px 0;
  }
`
const WrapSponzori = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 151px;
  @media only screen and (max-width: 750px) {
    margin: 70px 0 70px 0;
  }
`
const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  line-height: 63px;
  @media only screen and (max-width: 550px) {
    font-size: 36px;
    line-height: 43px;
  }
`

function PartneriProjektaFront() {
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
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "61px",
        }}
      >
        <div
          style={{ height: "1px", width: "110px", backgroundColor: "black" }}
        ></div>
        <Naslov>Partneri projekta</Naslov>
        <div
          style={{ height: "1px", width: "110px", backgroundColor: "black" }}
        ></div>
      </div>
      <WrapSponzori>
        <img src={Jelsa} width="23%" alt="Jelsa" />
        <img src={CROweek} width="23%" alt="Cro week" />
        <img src={Secret} width="23%" alt="Secret" />
        <img src={CROweek} width="23%" alt="Cro week" />
      </WrapSponzori>
      <div>
        <Lottie
          animationData={animation1152}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      </div>
    </Wrap>
  )
}

export default PartneriProjektaFront
