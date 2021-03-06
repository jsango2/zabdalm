import React from "react"
import styled from "styled-components"
import Val from "../../content/assets/valCitat.png"
import { useTranslation } from "gatsby-plugin-react-i18next"
import Cart from "../../content/assets/cartblack.svg"
import { useWindowSize } from "./useWindowSize"
import Button from "./button"
import i18next from "i18next"


const ButtonWrap = styled.div`
  /* height: 100px; */
  position: relative;
  z-index: 10;
  width: 390px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 750px) {
    width: 210px;
  }
`

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 400px;
  position: relative;
  margin-top: 50px;

  @media only screen and (max-width: 750px) {
    margin-top: 139px;
    height: 300px;
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
    padding-top: 55px;

    width: 85%;
  }
`
function CitatFront() {
  const [t, i18n] = useTranslation()
  const size = useWindowSize()

  return (
    <Wrap>
      {size.width < 750 ? (
        <ButtonWrap>
          {i18next.language === 'hr' ?  <a href="https://shop.zaboravljenadalmacija.hr">
                  <Button text={t("kupiatlaskratko")} ikona={Cart} color="black" />
                </a> 
                :
                <a href="https://shop.zaboravljenadalmacija.hr/en/">
                  <Button text={t("kupiAtlas")} ikona={Cart} color="black" />
                </a> 
              }
        </ButtonWrap>
      ) : (
        <div></div>
      )}
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
