import React, { useState } from "react"
import styled from "styled-components"
import { useTranslation, useI18next } from "gatsby-plugin-react-i18next"
import { IoIosClose } from "react-icons/io"

const WrapAll = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vhvw;
  z-index: 99998;
  background-color: #0f0f0fbd;
`
const Wrap = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  height: 299px;
  width: 299px;
  z-index: 99999;
  background-color: #b0c7ce;
`

function MeniMobile({
  handleClickCloseMenu,
  handleChooseMobileCategory,
  isOpen,
}) {
  const [t, i18n] = useTranslation()
  const [current, setCurrent] = useState(null)
  // const { languages, changeLanguage } = useI18next()
  //   const size = useWindowSize()
  const handleClick = (e, id) => {
    // current === id ? setCurrent(null) : setKategorija(e.target.innerText)

    // let lang = id === 1 ? "hr" : "en"
    // changeLanguage(lang)
    handleClickCloseMenu()
    handleChooseMobileCategory(e, id)
  }
  return (
    <WrapAll className={`${isOpen ? "dark" : ""} `}>
      <Wrap className={`${isOpen ? "show-menu" : "hide-menu"} `}>
        <IoIosClose
          style={{
            position: "absolute",
            color: "white",
            right: "10px",
            top: "10px",
            cursor: "pointer",
          }}
          onClick={() => handleClickCloseMenu()}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontSize: "15px",
            color: "white",
            textAlign: "center",
            justifyContent: "space-around",
            // alignItems: "center",
            margin: "40px auto 0  auto",
            width: "85%",
            height: "75%",
            lineHeight: "18.5px",
            // marginBottom: "42px",
          }}
        >
          {/* <div>-</div> */}

          <div
            className={current === 0 ? "blueLink" : ""}
            onClick={e => handleClick(e, 0)}
            style={{ cursor: "pointer", margin: "0 10px" }}
          >
            {t("sve")}
          </div>

          <div
            className={current === 1 ? "blueLink" : ""}
            onClick={e => handleClick(e, 1)}
            style={{ cursor: "pointer", margin: "0 10px" }}
          >
            {t("priceizpovijesti")}
          </div>

          <div
            className={current === 2 ? "blueLink" : ""}
            onClick={e => handleClick(e, 2)}
            style={{ cursor: "pointer", margin: "0 10px" }}
          >
            {t("antiknipredmeti")}
          </div>

          <div
            className={current === 3 ? "blueLink" : ""}
            onClick={e => handleClick(e, 3)}
            style={{ cursor: "pointer", margin: "0 10px" }}
          >
            {t("zaboravljenadalmacijadanas")}
          </div>
          {/* <div>-</div> */}
        </div>
      </Wrap>
    </WrapAll>
  )
}

export default MeniMobile
