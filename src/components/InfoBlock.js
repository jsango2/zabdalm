import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

const Wrap = styled.div`
  position: absolute;
  width: 300px;
  height: auto;
  background-color: white;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  border-radius: 10px;
  top: 110px;
  right: 53px;
  z-index: 5;
  color: #4e370c;
  cursor: pointer;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 18px;

  @media screen and (max-width: 1152px) {
  }
  @media screen and (max-width: 630px) {
    top: 110px;
    right: 53px;
  }
  @media screen and (max-width: 380px) {
    top: 128px;
    right: 53px;
    width: 75vw;
  }
`
function InfoBlock({ isOpen }) {
  const { t } = useTranslation()

  return <>{isOpen ? <Wrap>{t("infoblokmapa")}</Wrap> : <div></div>}</>
}

export default InfoBlock
