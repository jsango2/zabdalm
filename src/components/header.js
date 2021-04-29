import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import logo from "../images/LogoTopsvg.svg"
import Headroom from "react-headroom"
import styled from "styled-components"
import { useTranslation } from "react-i18next"

const HeaderWrap = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  ${"" /* padding: 1.85rem 0; */}
  height: 114px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-between;
  background-color: #b0c7ce;
  color: white;
  position: relative;
  @media only screen and (max-width: 60em) {
    display: block;
    padding: 0 0;
  }
`
const Telefon = styled.div`
  @media only screen and (max-width: 60em) {
    display: none;
  }
`

const Logo = styled.div`
  ${"" /* display: inline-block; */}
  margin-bottom: 0;
  margin-right: 15px;
  margin-left: 175px;
  width: 97px;
  @media only screen and (max-width: 960px) {
    position: relative;
    top: 15px;
    margin-left: 130px;
  }

  @media only screen and (max-width: 530px) {
    position: relative;
    top: 15px;
    margin-left: 70px;
    width: 60px;
  }
  @media only screen and (max-width: 430px) {
    margin-left: 40px;
  }
`

const Header = () => {
  const [display, setDisplay] = useState("")
  const [current, setCurrent] = useState(1)
  const [t, i18n] = useTranslation()

  const handleClick = id => {
    // setKategorija(e.target.innerText)
    current === id ? setCurrent(null) : setCurrent(id)
    let lang = id === 1 ? "hr" : "en"
    i18n.changeLanguage(lang)
    console.log(i18n)
  }
  return (
    // <Headroom
    //   disableInlineStyles
    //   onPin={() => setDisplay("animation")}
    //   onUnpin={() => setDisplay("")}
    //   style={{
    //     zIndex: "9999",
    //   }}
    // >
    <header
      className="headerShadow"
      style={{
        position: "relative",
        background: `white`,
        zIndex: "9999",
      }}
    >
      <HeaderWrap className={`header-wrap`}>
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
        <nav className={`primary-nav ${display}`}>
          <AnchorLink
            offset={100}
            to="/#projekti"
            className="LinkHeader LinkHeaderProjekti"
            activeClassName="active"
          >
            HOME
          </AnchorLink>
          <AnchorLink
            offset={100}
            to="/#projekti"
            className="LinkHeader LinkHeaderProjekti"
            activeClassName="active"
          >
            O KNJIZI
          </AnchorLink>
          <AnchorLink
            offset={100}
            to="/#projekti"
            className="LinkHeader LinkHeaderProjekti"
            activeClassName="active"
          >
            BLOG
          </AnchorLink>
          <AnchorLink
            offset={100}
            to="/#projekti"
            className="LinkHeader LinkHeaderProjekti"
            activeClassName="active"
          >
            RAZGLEDNICE NA MAPI
          </AnchorLink>

          <AnchorLink
            offset={100}
            to="/#projekti"
            className="LinkHeader LinkHeaderProjekti"
            activeClassName="active"
          >
            WEBSHOP
          </AnchorLink>

          <AnchorLink
            to="/#kontakt"
            className="LinkHeader"
            activeClassName="active"
          >
            KONTAKT
          </AnchorLink>
        </nav>
        <div
          style={{
            position: "absolute",
            top: "13px",
            right: "43px",
            display: "flex",
            cursor: "pointer",
            fontSize: "12px",
          }}
        >
          <p
            className={current === 1 ? "blueLink" : ""}
            onClick={e => handleClick(1)}
            style={{ margin: "0 3px" }}
          >
            HR
          </p>
          <p
            className={current === 2 ? "blueLink" : ""}
            onClick={e => handleClick(2)}
            style={{ margin: "0 3px" }}
          >
            ENG
          </p>
        </div>
      </HeaderWrap>
    </header>
    // </Headroom>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDesc: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDesc: ``,
}

export default Header
