import React, { useEffect, useState } from "react"
import styled from "styled-components"
import Quote from "../images/quote.svg"
import Guy from "../images/luka.jpg"
import Radnici from "../images/pozadinska2.jpg"

const Wrap = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 100px;
  @media only screen and (max-width: 70em) {
    ${"" /* display: flex; */}
  }
  @media only screen and (max-width: 48em) {
    display: flex;
    flex-direction: column;
    height: auto;
  }
`
const LukaHero = styled.div`
  position: relative;
  left: 171px;
  top: -82px;
  z-index: 950;
  width: 533px;
  height: 528px;
  background-color: #71a8bf;
  @media only screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;
    left: 0;
    top: 0;
  }
  @media only screen and (max-width: 48em) {
    width: 100%;
    height: auto;
    padding-bottom: 56px;
  }
`
const OnamaHero = styled.div`
  position: relative;
  ${"" /* left: auto; */}
  top: 130px;
  left: 100px;
  bottom: 0%;
  z-index: 2;
  width: 473px;
  height: 458px;
  overflow: hidden;
  @media only screen and (max-width: 1000px) {
    transform: none !important;
    ${"" /* position: relative; */}
    top: 0;
    left: 0;
    width: 45%;
    height: 528px;
  }
  @media only screen and (max-width: 768px) {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 100%;
    height: auto;
  }
  @media only screen and (max-width: 48em) {
  }
`
const Pwrap = styled.div`
  font-weight: 300;
  font-size: 22px;
  line-height: 28.5px;
  position: relative;
  color: white;
  margin-top: 152px;
  margin-left: 60px;
  width: 239px;
  height: 226px;
  @media only screen and (max-width: 1000px) {
    margin-left: 0px;
    width: 249px;
  }
  @media only screen and (max-width: 48em) {
    margin: 152px auto 0 auto;
    width: 70%;
    height: auto;
  }
`
const LukaPikunic = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;

  position: relative;
  color: white;
  margin-top: 52px;
  margin-left: 60px;
  width: 192px;
  height: 34px;
  @media only screen and (max-width: 1000px) {
    margin-left: -50px;
  }
  @media only screen and (max-width: 48em) {
    right: -25%;
  }
`
const OnamaText = styled.div`
  font-family: "Montserrat";
  position: relative;
  z-index: 5;
  color: #393939;
  width: 258px;
  height: 179px;
  font-weight: 500;
  line-height: 19px;
  font-size: 14px;
  margin: 0 auto 45px 130px;
  @media only screen and (max-width: 1000px) {
    marginleft: 108px;
  }
  @media only screen and (max-width: 768px) {
    margin: 0 auto 39px auto;
    width: 70%;
    height: auto;
  }
  @media only screen and (max-width: 48em) {
  }
`
const OnamaNaslov = styled.div`
  position: relative;
  z-index: 111;
  color: #71a8bf;
  font-weight: bold;
  font-size: 35px;
  margin: 70px auto 30px 130px;
  @media only screen and (max-width: 1000px) {
    marginleft: 108px;
  }
  @media only screen and (max-width: 768px) {
    margin: 70px auto 32px auto;
    width: 70%;
  }
  @media only screen and (max-width: 320px) {
  }
`

const Img = styled.div`
  position: absolute;
  top: 32px;
  left: 159px;
  @media only screen and (max-width: 1000px) {
    left: 25%;
  }
  @media only screen and (max-width: 48em) {
    left: 15%;
  }
`

const LukaFoto = styled.div`
  position: absolute;
  top: 82px;
  right: 0;
  z-index: 2;
  margin-top: 0;
  width: 198px;
  height: 253px;
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`
const Button = styled.a`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: transparent;
  z-index: 2;
  border: 1px solid #393939;
  width: 197px;
  height: 37px;
  color: #393939;
  font-weight: 300;
  font-size: 16px;
  text-decoration: none;
  margin: 0 auto 0 130px;
  @media only screen and (max-width: 1000px) {
    marginleft: 108px;
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 54px;
    margin-left: 15%;
  }
  @media only screen and (max-width: 420px) {
    ${"" /* bottom: 49px;
    left: 50%;
    transform: translate(-50%, -50%); */}
  }
`

const Onama = () => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => setOffsetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <Wrap>
      <LukaHero style={{}}>
        <Img>
          <img src={Quote} alt="logo" width="96" />
        </Img>

        <Pwrap>
          Izvodimo sve vrste građevinskih radova, a više samostalnih radnih
          skupina omogućuje nam da brzo odgovorimo na zahtjeve naših klijenata.
        </Pwrap>

        <LukaPikunic>
          LUKA PIKUNIĆ <br />
          <span style={{ color: "#393939" }}>INŽENJER GRAĐEVINE</span>{" "}
        </LukaPikunic>
        <LukaFoto>
          {" "}
          <img
            src={Guy}
            style={{ objectFit: "contain" }}
            width="100%"
            alt="logo"
          />
        </LukaFoto>
      </LukaHero>

      <OnamaHero style={{ transform: `translateY(-${offsetY * 0.1}px)` }}>
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#eaeaea",
            opacity: "0.9",
            position: "absolute",
            zIndex: "2",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${Radnici})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
            zIndex: "1",
          }}
        ></div>
        <OnamaNaslov> O NAMA</OnamaNaslov>
        <OnamaText>
          {" "}
          Građevinski obrt Dom ovlaštena je izvođačka firma s 22 godine dugom
          tradicijom poslovanja na širem Zadarskom području (posebno na otocima
          Pašmanu i Ugljanu). Prikupljeno iskustvo koristimo da bi povezali
          moderne potrebe i zahtjeve u gradnji uvažajući tradicionalne stilove i
          način gradnje u Dalmaciji.
        </OnamaText>

        <Button href="mailto: info@go-dom.hr?subject=Upit">
          POŠALJITE NAM UPIT
        </Button>
      </OnamaHero>
    </Wrap>
  )
}

export default Onama
