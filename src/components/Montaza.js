import React from "react"
import styled from "styled-components"
import MontazaFoto from "../../content/assets/montaza.png"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 457px;
  position: relative;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`

function Montaza() {
  return (
    <Wrap>
      <img src={MontazaFoto} alt="" srcset="" />
    </Wrap>
  )
}

export default Montaza
