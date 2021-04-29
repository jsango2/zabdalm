import React from "react"
import styled from "styled-components"
import MapaFront from "../../content/assets/mapaFront.png"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 494px;
  position: relative;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

function RazgledniceNaMapiFront() {
  return (
    <Wrap
      style={{
        backgroundImage: `url(${MapaFront})`,
      }}
    >
      <div
        style={{
          fontFamily: "Playfair Display",
          fontSize: "54px",
          fontWeight: "600",
          marginBottom: "41px",
          color: "white",
        }}
      >
        Razglednice na mapi
      </div>
      <div
        style={{
          fontFamily: "Amiri",
          fontSize: "24px",
          fontWeight: "400",
          color: "white",
        }}
      >
        (klikni za ulaz u interaktivnu mapu)
      </div>
    </Wrap>
  )
}

export default RazgledniceNaMapiFront
