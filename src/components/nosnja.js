import React from "react"
import NarNosnja from "../../content/assets/nosnja.png"
import styled from "styled-components"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 473px;
  position: relative;
  margin: 59px 0 83px 0;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`

function Nosnja() {
  return (
    <Wrap>
      <img src={NarNosnja} alt="nosnja" />
    </Wrap>
  )
}

export default Nosnja
