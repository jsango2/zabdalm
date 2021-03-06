import React, { useState, useEffect } from "react"
import styled from "styled-components"
// import {
//   Link,
//   useTranslation,
//   useI18next,
//   I18nextContext,
// } from "gatsby-plugin-react-i18next"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import i18next from "i18next"
import Tovar from "../../content/assets/tovar.png"
import Close from "../../content/assets/close.png"

// const WrapAll = styled.div`
//   /* position: fixed;
//   top: 0;
//   left: 0;

//   height: 100vh;
//   width: 100vw;
//   z-index: 998;
//   background-color: #0f0f0fbd; */
// `
const Wrap = styled.div`
  position: fixed;
  top: 89%;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 80vh;
  width: 85vw;
  z-index: 999;
  background-color: #b0c7ce;
`

const CloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 8%;
`

function MeniMobile({ handleClick, isOpen }) {
  const [current, setCurrent] = useState(1)
  // const { languages, changeLanguage } = useI18next()
  const [t, i18n] = useTranslation()
  // const context = React.useContext(I18nextContext)
  useEffect(() => {
    i18next.language === "hr" ? setCurrent(1) : setCurrent(2)
  }, [])
  const handleClickLang = id => {
    // setKategorija(e.target.innerText)
    current === id ? setCurrent(1) : setCurrent(id)
    let lang = id === 1 ? "hr" : "en"
    i18n.changeLanguage(lang)
    handleClick()
  }
  return (
    <>
      <div className={`${isOpen ? "dark" : null} `}>
        <CloseButton onClick={e => handleClick()}>
          <img src={Close} width="100%" alt="close" />
        </CloseButton>
        {isOpen ? (
          <div
            style={{
              position: "absolute",
              zIndex: "1000",
              bottom: "-15px",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          >
            <img src={Tovar} width="200px" alt="tovar" />
          </div>
        ) : (
          <div></div>
        )}
        <Wrap className={`${isOpen ? "show-menu" : "hide-menu"} `}>
          {" "}
          <div className={"primary-nav-mobile-meni"}>
            <Link
              to="/"
              className="LinkHeader LinkHeaderProjekti"
              activeClassName="active"
            >
              HOME
            </Link>
            <Link
              to="/About"
              className="LinkHeader LinkHeaderProjekti"
              activeClassName="active"
            >
              {t("oKnjizi")}
            </Link>
            <Link
              to="/Blog"
              className="LinkHeader LinkHeaderProjekti"
              activeClassName="active"
            >
              BLOG
            </Link>
            <Link
              to="/Razglednice"
              className="LinkHeader LinkHeaderProjekti"
              activeClassName="active"
            >
              {t("razgledniceNaMapi")}
            </Link>

            <a
              href="https://shop.zaboravljenadalmacija.hr"
              className="LinkHeader LinkHeaderProjekti"
            >
              WEBSHOP
            </a>

            <Link to="/Kontakt" className="LinkHeader" activeClassName="active">
              {t("kontakt")}
            </Link>
          </div>
          <div
            style={{
              position: "absolute",
              top: "60px",
              left: "50%",
              color: "white",
              transform: "translate(-50%, -50%)",
              display: "flex",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            <p
              className={current === 1 ? "blueLink" : ""}
              onClick={e => handleClickLang(1)}
              style={{ margin: "0 3px" }}
            >
              HR
            </p>
            <p
              className={current === 2 ? "blueLink" : ""}
              onClick={e => handleClickLang(2)}
              style={{ margin: "0 3px" }}
            >
              ENG
            </p>
          </div>
        </Wrap>
      </div>
    </>
  )
}

export default MeniMobile
