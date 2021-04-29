import React from "react"
import styled from "styled-components"
import CROweek from "../../content/assets/CROweek.png"
import Jelsa from "../../content/assets/Jelsa.png"
import Secret from "../../content/assets/secret.png"
import Linija from "../../content/assets/linijaMont.png"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 520px;
  position: relative;
  margin: 200px 0 112px 0;
  text-align: center;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`

function PartneriProjektaFront() {
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
        <div
          style={{
            fontFamily: "Playfair Display",
            fontSize: "54px",
            fontWeight: "600",
          }}
        >
          Partneri projekta
        </div>
        <div
          style={{ height: "1px", width: "110px", backgroundColor: "black" }}
        ></div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginBottom: "151px",
        }}
      >
        <img src={Jelsa} alt="Jelsa" />
        <img src={CROweek} alt="Cro week" />
        <img src={Secret} alt="Secret" />
        <img src={CROweek} alt="Cro week" />
      </div>
      <div>
        <img src={Linija} width="100%" alt="linija" />
      </div>
    </Wrap>
  )
}

export default PartneriProjektaFront
