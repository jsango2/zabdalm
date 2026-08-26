import React from "react"
import styled from "styled-components"
import Button from "./button"
import { useTranslation } from "react-i18next"
import BlogPostCards from "./BlogPostCards"
import { Link } from "gatsby"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: auto;
  min-height: 600px;
  position: relative;
  margin: 110px 0 10px 0;
  text-align: center;
  @media only screen and (max-width: 620px) {
    margin: 150px 0 10px 0;
  }
  @media only screen and (max-width: 370px) {
    margin: 150px 0 10px 0;
  }
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

function BlogFront({ blogovi }) {
  const [t] = useTranslation()

  const query = blogovi.wpgraphql.blogovi.edges.slice(0, 15)

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

        <BlogPostCards blogovi={query} carousel />

        <ButtonWrap>
          <Link to="/Blog">
            <Button text={t("arhivaprica")} color="black" width="155" />
          </Link>
        </ButtonWrap>
      </Wrap>
    </>
  )
}

export default BlogFront
