import React from "react"
import NarNosnja from "../../content/assets/nosnja.png"
import styled from "styled-components"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 473px;
  background-image: url(${NarNosnja});
  background-size: cover;
  background-position: center;
  position: relative;
  margin: 59px 0 83px 0;
  @media only screen and (max-width: 750px) {
    height: 85vw;
    max-height: 473px;
  }
`

function Nosnja() {
  return <Wrap></Wrap>
}

export default Nosnja
