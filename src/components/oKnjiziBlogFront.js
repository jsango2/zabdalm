import React, { useState, useEffect } from "react"
import styled from "styled-components"
import BlogCard from "./BlogCard"
import Button from "./button"
import { useWindowSize } from "./useWindowSize"
import { RiArrowDropDownFill } from "react-icons/ri"
import { useTranslation } from "react-i18next"
import MeniMobileBlog from "./MeniMobileBlog"
import BlogPostCards from "./BlogPostCards"

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

function OKnjiziBlogFront({ blogovi2 }) {
  const [t, i18n] = useTranslation()

  const [current, setCurrent] = useState(0)
  const size = useWindowSize()
  const handleClick = (e, id) => {
    current === id ? setCurrent(null) : setCurrent(id)
  }

  return (
    <>
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

        <BlogPostCards blogovi={blogovi2} />
      </Wrap>
    </>
  )
}

export default OKnjiziBlogFront
