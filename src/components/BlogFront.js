import React, { useState, useEffect } from "react"
import styled from "styled-components"
import BlogCard from "./BlogCard"
import Button from "./button"
import { useWindowSize } from "./useWindowSize"
import { RiArrowDropDownFill } from "react-icons/ri"
import { useTranslation } from "gatsby-plugin-react-i18next"
import MeniMobileBlog from "./MeniMobileBlog"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: auto;
  position: relative;
  margin: 50px 0;
  text-align: center;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`
const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  @media only screen and (max-width: 550px) {
    font-size: 36px;
  }
`
const Linija = styled.div`
  height: 1px;
  width: 110px;
  background-color: black;
  @media only screen and (max-width: 550px) {
    width: 65px;
  }
`
const ButtonWrap = styled.div`
  width: 180px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 350px) {
    width: 75%;
  }
`

function BlogFront() {
  const [t, i18n] = useTranslation()
  const [isOpen, setIsOpen] = useState(false)

  // console.log(isOpen)
  const handleClickKategorije = () => {
    setIsOpen(true)
    console.log("kliknuto")
  }
  const handleClickCloseMenu = () => {
    setIsOpen(false)
    console.log("kliknuto")
  }

  const [current, setCurrent] = useState(0)
  const size = useWindowSize()
  const handleClick = (e, id) => {
    current === id ? setCurrent(null) : setCurrent(id)
  }

  return (
    <>
      <MeniMobileBlog
        handleClickCloseMenu={handleClickCloseMenu}
        isOpen={isOpen}
      />
      <Wrap>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <Linija />
          <Naslov>BLOG</Naslov>
          <Linija />
        </div>
        {size.width > 750 ? (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                fontSize: "15px",
                justifyContent: "space-around",
                margin: "51px auto 0 auto",
                width: "85%",
                marginBottom: "42px",
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
              <div>-</div>
              <div
                className={current === 1 ? "blueLink" : ""}
                onClick={e => handleClick(e, 1)}
                style={{ cursor: "pointer", margin: "0 10px" }}
              >
                {t("priceizpovijesti")}
              </div>
              <div>-</div>
              <div
                className={current === 2 ? "blueLink" : ""}
                onClick={e => handleClick(e, 2)}
                style={{ cursor: "pointer", margin: "0 10px" }}
              >
                {t("antiknipredmeti")}
              </div>
              <div>-</div>
              <div
                className={current === 3 ? "blueLink" : ""}
                onClick={e => handleClick(e, 3)}
                style={{ cursor: "pointer", margin: "0 10px" }}
              >
                {t("zaboravljenadalmacijadanas")}
              </div>
              {/* <div>-</div> */}
            </div>{" "}
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "61px",
            }}
            onClick={() => handleClickKategorije()}
          >
            <div
              // className={current === 0 ? "blueLink" : ""}
              // onClick={e => handleClick(e, 0)}
              style={{ cursor: "pointer" }}
            >
              {t("odaberikategoriju")}
            </div>
            <RiArrowDropDownFill />
          </div>
        )}

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: "62px",
          }}
        >
          {size.width > 750 ? (
            <>
              {" "}
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </>
          ) : (
            <>
              {" "}
              <BlogCard />
              <BlogCard />
              <BlogCard />
              <BlogCard />
            </>
          )}
        </div>
        <ButtonWrap>
          <Button text={t("arhivaprica")} color="black" width="155" />
        </ButtonWrap>
      </Wrap>
    </>
  )
}

export default BlogFront
