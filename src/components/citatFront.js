import React from "react"
import styled from "styled-components"
import Val from "../../content/assets/valCitat.svg"
import { useTranslation } from "gatsby-plugin-react-i18next"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 300px;
  position: relative;
  margin-top: 50px;

  @media only screen and (max-width: 750px) {
    margin-top: 170px;
  }
`
const Citat = styled.div`
  position: relative;
  padding-top: 136px;
  width: 701px;
  min-width: 280px;
  height: auto;
  margin: 0 auto;
  text-align: center;
  font-size: 24px;
  font-family: Amiri;
  font-weight: 400;
  margin-bottom: 100px;
  @media only screen and (max-width: 750px) {
    font-size: 18px;

    width: 85%;
  }
`
function CitatFront() {
  const [t, i18n] = useTranslation()

  return (
    <Wrap>
      <Citat>{t("citat")}</Citat>
      <div
        style={{
          position: "absolute",
          top: "170px",
          left: "50%",
          width: "562px",
          //   margin: "0 auto",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src={Val} alt="val" />
      </div>
    </Wrap>
  )
}

export default CitatFront
