import React, { useState } from "react"
import styled from "styled-components"
import BlogCard from "./BlogCard"
import Button from "./button"

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

function BlogFront() {
  const [current, setCurrent] = useState(null)

  const handleClick = (e, id) => {
    current === id ? setCurrent(null) : setCurrent(id)
  }

  return (
    <Wrap>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{ height: "1px", width: "110px", backgroundColor: "black" }}
        ></div>
        <div
          style={{
            fontFamily: "Playfair Display",
            fontSize: "54px",
            fontWeight: "600",
          }}
        >
          BLOG
        </div>
        <div
          style={{ height: "1px", width: "110px", backgroundColor: "black" }}
        ></div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: "15px",
          justifyContent: "space-around",
          margin: "51px auto 0 auto",
          width: "85%",
          marginBottom: "42px",
        }}
      >
        <div>-</div>

        <div
          className={current === 0 ? "blueLink" : ""}
          onClick={e => handleClick(e, 0)}
          style={{ cursor: "pointer" }}
        >
          SVE
        </div>
        <div>-</div>
        <div
          className={current === 1 ? "blueLink" : ""}
          onClick={e => handleClick(e, 1)}
          style={{ cursor: "pointer" }}
        >
          PRIČE IZ DALMATINSKE POVIJESTI
        </div>
        <div>-</div>
        <div
          className={current === 2 ? "blueLink" : ""}
          onClick={e => handleClick(e, 2)}
          style={{ cursor: "pointer" }}
        >
          ANTIKNI PREDMETI IZ DALMACIJE
        </div>
        <div>-</div>
        <div
          className={current === 3 ? "blueLink" : ""}
          onClick={e => handleClick(e, 3)}
          style={{ cursor: "pointer" }}
        >
          ZABORAVLJENA DALMACIJA DANAS
        </div>
        <div>-</div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          marginBottom: "62px",
        }}
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
      <Button text="ARHIVA PRIČA" color="black" width="137" />
    </Wrap>
  )
}

export default BlogFront
