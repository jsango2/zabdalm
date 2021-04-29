import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 342px;
  height: 323px;
  margin-bottom: 34px;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`

function BlogCard() {
  return (
    <Wrap>
      <div
        style={{
          fontFamily: "Amiri",
          fontSize: "10px",
          color: "#676767",
          textAlign: "left",
        }}
      >
        ZABORAVLJENA DALMACIJA DANAS{" "}
      </div>
      <div
        style={{ width: "100%", height: "233px", backgroundColor: "grey" }}
      ></div>
      <div
        style={{
          fontFamily: "Raleway",
          fontSize: "15px",
          textAlign: "left",
          lineHeight: "23px",
          marginTop: "12px",
          fontWeight: "500px",
        }}
      >
        Kako su naši stari na Otoku visu lovili ribu prije masovnog odlaska u
        Ameriku početkom (do 100 znakova)
      </div>
    </Wrap>
  )
}

export default BlogCard
