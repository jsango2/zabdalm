import React, { useState, useEffect } from "react"
import { CgMenuGridR } from "react-icons/cg"
import Headroom from "react-headroom"
import styled from "styled-components"
import { Link } from "gatsby"
// import {
//   Link,
//   Trans,
//   useTranslation,
//   useI18next,
//   I18nextContext,
// } from "gatsby-plugin-react-i18next"
import { useTranslation } from "react-i18next"
import i18next from "i18next"

import MeniMobile from "./meniMobile"

const HeaderWrap = styled.div`
  margin: 0 auto;
  max-width: 1152px;
  ${"" /* padding: 1.85rem 0; */}
  height: 80px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #b0c7ce;
  color: white;
  position: relative;
  @media only screen and (max-width: 999px) {
    /* display: block;
    padding: 0 0; */
    width: 100%;
  }
  @media only screen and (max-width: 820px) {
    display: none;
  }
`

const Hamburger = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: black;
  background-color: #b0c7ce;
  position: relative;
  width: 100%;
  height: 55px;
  /* top: 2px; */
  margin-right: 30px;
  padding-left: 48px;
  /* display: none; */

  @media screen and (min-width: 820px) {
    display: none;
  }
  @media screen and (max-width: 450px) {
    padding-left: 20px;
  }
`

const Header = () => {
  const [display, setDisplay] = useState("")
  const [current, setCurrent] = useState(1)
  // const { languages, changeLanguage } = useI18next()
  const [t, i18n] = useTranslation()
  // const context = React.useContext(I18nextContext)
  const [isOpen, setIsOpen] = useState(false)
  const handleClickMenu = () => {
    setIsOpen(false)
    // allowScroll()
  }

  useEffect(() => {
    i18next.language === "hr" ? setCurrent(1) : setCurrent(2)
  }, [])
  const handleClick = (e, id) => {
    // setKategorija(e.target.innerText)
    e.preventDefault()
    current === id ? setCurrent(1) : setCurrent(id)
    let lang = id === 1 ? "hr" : "en"
    i18n.changeLanguage(lang)
  }
  return (
    <Headroom
      disableInlineStyles
      upTolerance={50}
      downTolerance={50}
      onPin={() => setDisplay("animation")}
      onUnpin={() => setDisplay("")}
      style={{
        zIndex: "9999",
      }}
    >
      <>
        <MeniMobile handleClick={handleClickMenu} isOpen={isOpen} />
        <Hamburger>
          <Link to="/">
            <div
              style={{
                fontFamily: "Playfair Display",
                color: "white",
                fontWeight: "500",
                fontSize: "24",
              }}
            >
              ZaboravljenaDalmacija.hr
            </div>
          </Link>
          <CgMenuGridR
            style={{
              color: "white",
              width: "28px",
              height: "28px",
              position: "absolute",
              top: "15px",
              right: "10px",
              zIndex: "11",
            }}
            onClick={() => {
              setIsOpen(() => !isOpen)
              // blockScroll()
            }}
          />
        </Hamburger>{" "}
        <header
          className="headerShadow2"
          style={{
            position: "relative",
            background: `white`,
            zIndex: "9999",
          }}
        >
          <HeaderWrap className="header-wrap">
            <div className="logoHeader">
              <div
                className="title-group"
                style={{
                  display: `flex`,
                  flexDirection: `column`,
                  justifyContent: `center`,
                  alignItems: `flex-start`,
                }}
              ></div>
            </div>
            <div className={`primary-nav ${display}`}>
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
                style={{ cursor: "pointer" }}
                href="https://shop.zaboravljenadalmacija.hr"
                className="LinkHeader LinkHeaderProjekti"
              >
                WEBSHOP
              </a>

              <Link
                to="/Kontakt"
                className="LinkHeader"
                activeClassName="active"
              >
                {t("kontakt")}
              </Link>
            </div>
            <div
              style={{
                position: "absolute",
                top: "13px",
                right: "33px",
                display: "flex",
                cursor: "pointer",
                fontSize: "12px",
              }}
            >
              <p
                className={current === 1 ? "blueLink" : ""}
                onClick={e => handleClick(e, 1)}
                style={{ margin: "0 3px" }}
              >
                HR
              </p>
              <p
                className={current === 2 ? "blueLink" : ""}
                onClick={e => handleClick(e, 2)}
                style={{ margin: "0 3px" }}
              >
                ENG
              </p>
            </div>
          </HeaderWrap>
        </header>
      </>
    </Headroom>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
//   siteDesc: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
//   siteDesc: ``,
// }

export default Header
