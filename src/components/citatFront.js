import React from "react"
import styled from "styled-components"
import Val from "../../content/assets/valCitat.svg"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 300px;
  position: relative;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`
function CitatFront() {
  return (
    <Wrap>
      <div
        style={{
          position: "relative",
          paddingTop: "136px",
          width: "701px",
          height: "116px",
          margin: "0 auto",
          textAlign: "center",
          fontSize: "20px",
          fontFamily: "Amiri",
          fontWeight: "400",
        }}
      >
        ˝Zaboravljena Dalmacija˝ priča je o tome kako je nekada bilo, ona
        podsjeća na to da živimo u jednom od najljepših kutaka svemira,
        približava vam fotografijom autentične vizure Dalmacije iz vremena od
        same pojave fotografije sredinom 19. stoljeća pa do 1970.
      </div>
      <div
        style={{
          position: "absolute",
          top: "170px",
          left: "50%",
          width: "562px",
          //   margin: "0 auto",
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src={Val} alt="val" />
      </div>
    </Wrap>
  )
}

export default CitatFront
