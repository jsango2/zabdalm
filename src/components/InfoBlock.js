import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  position: absolute;
  width: 300px;
  height: auto;
  background-color: white;
  /* display: flex; */
  /* justify-content: center;
  align-items: center; */
  border-radius: 10px;
  top: 110px;
  right: 53px;
  z-index: 5;
  color: #4e370c;
  cursor: pointer;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 18px;

  @media screen and (max-width: 1152px) {
  }
  @media screen and (max-width: 630px) {
    top: 110px;
    right: 53px;
  }
  @media screen and (max-width: 380px) {
    top: 128px;
    right: 53px;
    width: 75vw;
  }
`
function InfoBlock({ isOpen }) {
  return (
    <>
      {isOpen ? (
        <Wrap>
          {" "}
          Na mapi možete uvećati pojedinu lokaciju te klikom na ikonu kamere
          pogledati razglednicu. Odaberite interval godina za selekciju
          razglednica napravljenih u tom periodu.{" "}
        </Wrap>
      ) : (
        <div></div>
      )}
    </>
  )
}

export default InfoBlock
