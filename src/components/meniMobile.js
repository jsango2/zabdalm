import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import Tovar from "../../content/assets/tovar.png"

import { AnchorLink } from "gatsby-plugin-anchor-links"

const WrapAll = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vhvw;
  z-index: 998;
  background-color: #0f0f0fbd;
`
const Wrap = styled.div`
  position: fixed;
  top: 10%;
  left: 50%;
  transform: translate(-50%, 0%);
  height: 80vh;
  width: 85vw;
  z-index: 999;
  background-color: #b0c7ce;
`

function MeniMobile({ handleClick, isOpen }) {
  const [current, setCurrent] = useState(1)

  const [t, i18n] = useTranslation()
  const handleClickLang = id => {
    // setKategorija(e.target.innerText)
    current === id ? setCurrent(null) : setCurrent(id)
    let lang = id === 1 ? "hr" : "en"
    i18n.changeLanguage(lang)
    // console.log("t", t)
  }
  return (
    <>
      <WrapAll className={`${isOpen ? "dark" : ""} `}>
        {" "}
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
          <nav className={"primary-nav-mobile-meni"}>
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
              {t("oKnjizi.1")}
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
              {t("razgledniceNaMapi.1")}
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
              {t("kontakt.1")}
            </AnchorLink>
          </nav>
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
      </WrapAll>
    </>
  )
}

export default MeniMobile
