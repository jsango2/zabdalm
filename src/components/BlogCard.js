import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 342px;
  height: 323px;
  margin-bottom: 34px;
  @media only screen and (max-width: 350px) {
    width: 100%;
  }
`
const Kategorija = styled.div`
  ${"" /* background-color: grey; */}
  font-family: Amiri;
  font-size: 10px;
  color: #676767;
  text-align: left;

  @media only screen and (max-width: 700px) {
    text-align: center;
  }
`
const CardText = styled.div`
  ${"" /* background-color: grey; */}
  font-family: Raleway;
  font-size: 15px;
  line-height: 23px;
  margin-top: 12px;
  font-weight: 500;
  color: #676767;
  text-align: left;

  @media only screen and (max-width: 700px) {
    width: 95%;
    text-align: center;
  }
`

function BlogCard() {
  return (
    <Wrap>
      <Kategorija>ZABORAVLJENA DALMACIJA DANAS </Kategorija>
      <div
        style={{ width: "100%", height: "233px", backgroundColor: "grey" }}
      ></div>
      <CardText>
        Kako su naši stari na Otoku visu lovili ribu prije masovnog odlaska u
        Ameriku početkom (do 100 znakova)
      </CardText>
    </Wrap>
  )
}

export default BlogCard
