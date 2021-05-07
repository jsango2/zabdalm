import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { IoIosClose } from "react-icons/Io"

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
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 299px;
  width: 299px;
  z-index: 99999;
  background-color: #b0c7ce;
`

function MeniMobile({ handleClickCloseMenu, isOpen }) {
  const [t, i18n] = useTranslation()
  const [current, setCurrent] = useState(null)
  //   const size = useWindowSize()
  const handleClick = (e, id) => {
    current === id ? setCurrent(null) : setCurrent(id)
    handleClickCloseMenu()
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
            {t("sve.1")}
          </div>

          <div
            className={current === 1 ? "blueLink" : ""}
            onClick={e => handleClick(e, 1)}
            style={{ cursor: "pointer", margin: "0 10px" }}
          >
            {t("priceizpovijesti.1")}
          </div>

          <div
            className={current === 2 ? "blueLink" : ""}
            onClick={e => handleClick(e, 2)}
            style={{ cursor: "pointer", margin: "0 10px" }}
          >
            {t("antiknipredmeti.1")}
          </div>

          <div
            className={current === 3 ? "blueLink" : ""}
            onClick={e => handleClick(e, 3)}
            style={{ cursor: "pointer", margin: "0 10px" }}
          >
            {t("zaboravljenadalmacijadanas.1")}
          </div>
          {/* <div>-</div> */}
        </div>
      </Wrap>
    </WrapAll>
  )
}

export default MeniMobile
