import React, { useState } from "react"
import "../../i18next"
import axios from "axios"
import Layout from "../components/layout"
import styled from "styled-components"
import Brodi from "../../content/assets/brodi.png"
import Tovar from "../../content/assets/tovarBaba.png"
import HeroPhoto from "../../content/assets/heroPhoto.png"
import Trogir from "../../content/assets/trogir.jpg"
import backMobile from "../../content/assets/imageKontakt.png"
import Etno from "../../content/assets/etno.png"
import { graphql } from "gatsby"
import { useTranslation } from "react-i18next"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { useWindowSize } from "../components/useWindowSize"

const Wrap = styled.div`
  /* background-color: grey; */
  position: relative;
  width: 100%;
  height: 544px;

  @media only screen and (max-width: 550px) {
    height: 880px;
  }
`
const WrapFormAndText = styled.div`
  /* background-color: grey; */
  position: absolute;
  max-width: 731px;
  width: 70vw;
  height: 358px;
  top: 114px;
  left: 132px;
  z-index: 1;
  /* background-color: rgba(255, 0, 0, 0.267); */
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 750px) {
    left: 71px;
    width: 75vw;
  }
  @media only screen and (max-width: 550px) {
    top: 74px;
    flex-direction: column;
    left: 20px;
    width: 90vw;
  }
`
const WrapForm = styled.div`
  /* background-color: grey; */
  position: relative;
  width: 362px;
  height: 358px;

  /* background-color: rgba(0, 81, 255, 0.267); */
  display: flex;
  & > form {
    width: 100%;
  }
  flex-direction: column;
  @media only screen and (max-width: 850px) {
    & > form {
      width: 80%;
    }
  }
  @media only screen and (max-width: 550px) {
    width: 100%;
    margin-bottom: 45px;
    margin: 0 auto;
    & > form {
      width: 100%;
    }
  }
`
const WrapText = styled.div`
  /* background-color: grey; */
  margin-top: 20px;
  position: relative;
  width: 271px;
  height: 224px;
  font-family: Playfair Display;
  font-size: 24px;
  color: white;
  /* background-color: rgba(238, 255, 0, 0.267); */
  /* display: flex; */
  @media only screen and (max-width: 750px) {
    font-size: 18px;
    line-height: 20px;
  }
  @media only screen and (max-width: 550px) {
    margin-top: 46px;
    width: 80vw;
    font-size: 24px;
    line-height: 30px;
  }
`
// const Img = styled.div`
//   width: 100%;
//   height: 635px;

//   @media screen and (max-width: 750px) {
//     height: 100%;
//   }
// `
const EtnoWrap = styled.div`
  position: absolute;

  width: 244px;

  height: 428px;
  bottom: -58px;
  right: 28px;

  @media screen and (max-width: 1096px) {
    width: 156px;

    height: 272px;
    bottom: -78px;
    right: 48px;
  }
  @media screen and (max-width: 550px) {
    display: none;
  }
`
const Fotka = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  @media screen and (max-width: 550px) {
    height: 880px;
  }
`

function Kontakt() {
  const size = useWindowSize()
  const [state, setState] = useState({})
  const [issubmiting, setIssubmiting] = useState(false)

  const { t } = useTranslation()

  const handleChange = event => {
    const { name, value } = event.target

    setState({
      ...state,
      [name]: value,
    })
  }
  const [result, setResult] = useState(null)

  const sendEmail = event => {
    setIssubmiting(true)
    event.preventDefault()
    axios
      .post("https://zabdalmserve.herokuapp.com/send", { ...state })
      .then(response => {
        setResult(response.data)
        setState({ Ime: "", mail: "", poruka: "" })
        setTimeout(function () {
          setIssubmiting(false)
        }, 3000)
      })
      .catch(err => {
        setResult({
          success: false,
          message: "Something went wrong. Try again later.",
        })
        console.error(err)
      })
  }

  return (
    <Layout>
      <Wrap>
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(51, 31, 6)",
          }}
        ></div>
        {size.width > 550 ? (
          <div style={{ height: "544px", width: "100%", overflow: "hidden" }}>
            <Slider
              dots={false}
              fade={true}
              infinite={true}
              speed={8000}
              slidesToShow={1}
              slidesToScroll={1}
              autoplay={true}
              cssEase="cubic-bezier(0,0,0,1.01)"
            >
              <Fotka>
                <img
                  src={Brodi}
                  alt=""
                  style={{
                    height: "100%",
                  }}
                />
              </Fotka>
              <Fotka>
                <img
                  src={HeroPhoto}
                  alt=""
                  style={{
                    height: "100%",
                  }}
                />
              </Fotka>
              <Fotka>
                <img
                  src={Tovar}
                  alt=""
                  style={{
                    height: "100%",
                  }}
                />
              </Fotka>
            </Slider>
          </div>
        ) : (
          <>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",

                backgroundColor: "rgb(51 31 6 / 45%)",
                zIndex: "1",
              }}
            ></div>
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundPosition: "left bottom",
                backgroundImage: `url(${backMobile})`,
              }}
            ></div>
          </>
        )}
        <WrapFormAndText>
          <WrapForm>
            <form className="formular" onSubmit={sendEmail}>
              <div>
                <label>{t("ime")}</label>
                <br />
                <input
                  type="text"
                  value={state.Ime || ""}
                  onChange={handleChange}
                  name="Ime"
                  placeholder={t("Vase ime")}
                />
              </div>

              <div style={{ marginTop: "5px" }}>
                <label>Email</label>
                <br />

                <input
                  type="email"
                  value={state.mail || ""}
                  onChange={handleChange}
                  name="mail"
                  placeholder={t("Vas Email")}
                />
              </div>
              <div style={{ marginTop: "5px" }}>
                <label>{t("Poruka")}</label>
                <br />
                <textarea
                  type="text"
                  name="poruka"
                  value={state.poruka || ""}
                  onChange={handleChange}
                  placeholder={t("Vasa poruka")}
                  className="kontaktArea"
                />
              </div>
              <div style={{ float: "right", marginTop: "25px" }}>
                <button type="submit">{t("Posalji poruku")}</button>
              </div>
            </form>
            {issubmiting ? (
              <div
                style={{
                  color: "white",
                  position: "relative",
                  top: "-155px",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "#00000078",
                  padding: "20px",
                  textAlign: "center",
                  borderRadius: "5px",
                  width: "80%",
                }}
              >
                Poruka poslana
              </div>
            ) : (
              <div></div>
            )}
          </WrapForm>
          <WrapText>
            <div>{t("Imate kod kuce")}</div>

            <div style={{ marginTop: "30px" }}>{t("Podijelite")}</div>
            <div
              style={{
                fontSize: "12px",
                fontFamily: "Roboto",
                fontWeight: "normal",
                marginTop: "20px",
              }}
            >
              dalmatianstory@gmail.com
            </div>
          </WrapText>
        </WrapFormAndText>
        <EtnoWrap>
          <img src={Etno} alt="etno" width="100%" />
        </EtnoWrap>
      </Wrap>
    </Layout>
  )
}

export default Kontakt

// export const query = graphql`
//   query($language: String!) {
//     locales: allLocale(filter: { language: { eq: $language } }) {
//       edges {
//         node {
//           ns
//           data
//           language
//         }
//       }
//     }
//   }
// `
