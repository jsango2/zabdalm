import React from "react"
import styled from "styled-components"

const Wrap = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  background-color: white;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  left: 40px;
  top: 40px;
  z-index: 5;
  color: #4e370c;
  cursor: pointer;
  padding: 20px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 15px;
  line-height: 18px;

  @media screen and (min-width: 750px) {
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
