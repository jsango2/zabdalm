import React from "react"
import styled from "styled-components"
import Logo from "../images/LogoVelikiBijeli.svg"
import { Link } from "gatsby"

const Wrap = styled.div`
  width: 100%;
  height: 510px;
  background-color: #b0c7ce;
  color: white;
  margin-top: 100px;
  position: relative;
  ${"" /* clip-path: polygon(0 0, 100% 25%, 100% 100%, 0 100%); */}/* @media only screen and (max-width: 520px) {
    height: 370px;
    clip-path: polygon(0 0, 100% 14%, 100% 100%, 0 100%);
    padding-top: 80px;
  } */
`

const FooterText = styled.div`
  /* justify-content: center; */
  ${"" /* margin-top: 45px; */}
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.06em;
  text-align: center;
  line-height: 16px;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);

  /* @media only screen and (max-width: 57em) {
    width: 80%;
  }
  @media only screen and (max-width: 440px) {
    margin-top: 45px;
  } */
`

const Footer = () => (
  <Wrap>
    <FooterText>
      Copyright © 2021 All rights reserved.
      <br /> Web development by sutra.hr
    </FooterText>
  </Wrap>
)

export default Footer
