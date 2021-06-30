import React, { useState, useEffect } from "react"
import styled from "styled-components"
import OautoruPng from "../../content/assets/autorPng.png"
import Goles from "../../content/assets/Goles.png"
import Potpis from "../../content/assets/potpis.svg"
import Knjiga from "../../content/assets/knjiga.png"
import Button from "./button"
import Cart from "../../content/assets/cart.svg"
import { useWindowSize } from "../components/useWindowSize"
import Lottie from "lottie-react"
import { useTranslation } from "gatsby-plugin-react-i18next"
import potpisLottie from "./../animations/potpis/potpis"
import knjigadupla from "../animations/knjigaDUpla/knjigadupla"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 1775px;
  position: relative;
  background-position: center;
  background-size: cover;
  padding-top: 461px;
  overflow: hidden;
  @media only screen and (max-width: 750px) {
    padding-top: 81px;
    padding-bottom: 100px;
    height: auto;
  }
`
const GornjiDioWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 906px;
  height: 507px;
  position: relative;
  margin: 0 auto 200px auto;
  z-index: 2;

  /* top: 40%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  @media only screen and (max-width: 999px) {
    width: 95%;
  }
  @media only screen and (max-width: 750px) {
    flex-direction: column-reverse;
    height: auto;
    align-items: center;
    margin-bottom: 100px;
  }
`

const KnjigaWrap = styled.div`
  width: 624px;
  min-width: 574px;
  height: 770px;
  position: relative;
  top: 10px;
  left: -130px;
  z-index: 3;
  /* top: 40%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */
  @media only screen and (max-width: 999px) {
  }
  @media only screen and (max-width: 750px) {
    min-width: 345px;
    width: 650px;
    height: auto;
    left: 0;
  }
  @media only screen and (max-width: 550px) {
    min-width: 245px;
    width: 155vw;
    height: auto;
    left: 13px;
  }
`
const KnjigaWrapZaDesktop = styled.div`
  width: 574px;
  min-width: 574px;
  height: 0px;
  position: relative;
  bottom: 613px;
  /* top: 10px; */
  /* left: -130px; */
  z-index: 3;
  /* top: 40%;
  left: 50%; */
  /* transform: translate(-50%, -50%); */

  width: 46vw;
  min-width: 444px;
  max-width: 574px;

  @media only screen and (max-width: 999px) {
  }
`

const DonjiDioWrap = styled.div`
  display: flex;
  /* flex-direction: row-reverse; */
  justify-content: space-between;
  width: 906px;
  height: auto;
  position: relative;
  margin: 0 auto;
  z-index: 2;
  @media only screen and (max-width: 999px) {
    width: 95%;
  }
  @media only screen and (max-width: 750px) {
    flex-direction: column;
    height: auto;
    align-items: center;
  }
`
const DonjiDioTextWrap = styled.div`
  width: 450px;
  position: relative;
  left: -80px;
  align-items: center;
  @media only screen and (max-width: 999px) {
    /* width: 95%; */
  }
  @media only screen and (max-width: 750px) {
    left: 0;
    width: 95%;
    /* margin: 0 auto; */
  }
`

const TextOknjizi = styled.div`
  font-family: Raleway;
  font-size: 15px;
  font-weight: 500;
  color: white;
  width: 405px;
  line-height: 23px;
  @media only screen and (max-width: 750px) {
    margin: 0 auto;
    width: 100%;
  }
  @media only screen and (max-width: 550px) {
    margin: 0 auto;
    width: 100%;
  }
`

const TextOautoru = styled.div`
  font-family: Raleway;
  font-size: 15px;
  font-weight: 500;
  color: white;
  width: 394px;
  /* height: 58px; */
  /* text-align: left; */
  line-height: 24px;
  margin-right: 20px;
  /* margin: 0 15px 16px 0; */
  @media only screen and (max-width: 550px) {
    margin: 0 auto;
    width: 85%;
  }
`
const WrapNaslovCrtaOautoru = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  /* left: -155px; */
  @media only screen and (max-width: 750px) {
    left: 0px;
  }
  @media only screen and (max-width: 550px) {
    margin: 0 auto;
    text-align: left;
    width: 85%;
  }
`
const WrapNaslovCrtaOknjizi = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  position: relative;
  /* left: -125px; */
  @media only screen and (max-width: 750px) {
    text-align: left;
    width: 85%;
    left: 30px;
  }
  @media only screen and (max-width: 550px) {
    margin: 0 auto;
    text-align: left;
    width: 85%;
    left: 0px;
  }
`

const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  margin-bottom: 40px;
  margin-left: 20px;
  color: white;
  padding-top: 30px;
  /* width: 250px; */
  @media only screen and (max-width: 750px) {
    font-size: 36px;
    width: 250px;
    margin-left: 0px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 28px;
    width: 200px;
  }
`
const Naslov1 = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  margin-bottom: 40px;
  /* margin-left: 20px; */
  color: white;
  padding-top: 30px;
  /* width: 250px; */
  @media only screen and (max-width: 750px) {
    font-size: 36px;
    width: 250px;
  }
  @media only screen and (max-width: 350px) {
    font-size: 28px;
    width: 200px;
  }
`
const Crta = styled.div`
  width: 78px;
  height: 1px;
  background-color: white;
  margin-right: 58px;
  position: absolute;
  left: -130px;
  @media only screen and (max-width: 750px) {
    left: -100px;

    margin-right: 25px;
  }
`
const Crta2 = styled.div`
  width: 78px;
  height: 1px;
  background-color: white;
  margin-right: 33px;
  left: -130px;

  /* margin-top: 13px; */
  position: absolute;
  @media only screen and (max-width: 750px) {
    left: -100px;

    /* margin-right: 25px; */
  }
`
const Image = styled.div`
  width: 452px;
  height: 507px;
  background-image: url(${Goles});
  background-position: left center;
  background-size: cover;
  @media only screen and (max-width: 550px) {
    width: 90%;
    height: 90vw;
  }
`
const ButtonWrap = styled.div`
  width: 220px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`
const BGPhoto = styled.div`
  position: absolute;
  top: -350px;
  width: 100%;
  height: 105%;
  background-image: url(${OautoruPng});
  background-position: center;
  background-size: cover;
  z-index: 1;
`

function OautoruFront() {
  const [t, i18n] = useTranslation()
  const size = useWindowSize()

  const [offset, setOffset] = useState(0)
  useEffect(() => {
    function handleScroll() {
      setOffset(window.pageYOffset)
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleShopLink = () => {
    window.location.href = "https://shop.zaboravljenadalmacija.hr"
  }
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.25, 0.6],
        type: "seek",
        frames: [0, 90],
      },
    ],
  }
  return (
    <>
      {size.width < 750 ? (
        <Wrap>
          <BGPhoto
            style={{
              transform: `translateY(${offset * 0.07}px)`,
            }}
          ></BGPhoto>
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.534)",
              top: "0",
              zIndex: "1",
            }}
          ></div>
          <GornjiDioWrap>
            <div>
              <WrapNaslovCrtaOautoru>
                <Crta />
                <Naslov1>{t("oautoru")}</Naslov1>
              </WrapNaslovCrtaOautoru>

              <TextOautoru>
                {t("igorgoles1")}
                <br />
                <br />
                {t("igorgoles2")}
              </TextOautoru>
              <div
                style={{
                  marginTop: "20px",
                  float: "right",
                  position: "relative",
                }}
              >
                {/* <img src={Potpis} alt="signature" /> */}
                <Lottie
                  // style={{ textAlign: "center" }}
                  animationData={potpisLottie}
                  interactivity={interactivity}
                  autoPlay={false}
                  loop={false}
                />
                <div
                  style={{
                    fontSize: "16px",
                    color: "white",
                    position: "absolute",
                    right: "10%",
                    bottom: "10%",
                  }}
                >
                  Igor Goleš
                </div>
              </div>
            </div>

            <Image>{/* <img src={Goles} alt="autor photo" /> */}</Image>
          </GornjiDioWrap>
          <DonjiDioWrap>
            <KnjigaWrap>
              {/* <img src={Knjiga} width="100%" alt="knjiga" /> */}
              <Lottie
                // style={{ textAlign: "center" }}
                animationData={knjigadupla}
                interactivity={interactivity}
                autoPlay={false}
                loop={false}
              />
            </KnjigaWrap>
            <DonjiDioTextWrap>
              <WrapNaslovCrtaOknjizi>
                <Crta2 />
                <Naslov> {t("oatlasu")}</Naslov>
              </WrapNaslovCrtaOknjizi>
              <TextOknjizi>
                <ul>
                  <li> {t("948stranica")}</li>
                  <li>{t("luksuz")}</li>
                  <li>{t("hreng")}</li>
                  <li>{t("razglednice")}</li>
                  <li>{t("potpisnici")}</li>
                  <li>{t("deluxe")}</li>
                </ul>
              </TextOknjizi>
              <div style={{ width: "179px", paddingLeft: "25px" }}>
                <ButtonWrap onClick={() => handleShopLink()}>
                  <Button
                    text={t("kupiatlaskratko")}
                    ikona={Cart}
                    color="white"
                  />
                </ButtonWrap>
              </div>
            </DonjiDioTextWrap>
          </DonjiDioWrap>
        </Wrap>
      ) : (
        <>
          <Wrap>
            <BGPhoto
              style={{
                transform: `translateY(${offset * 0.07}px)`,
              }}
            ></BGPhoto>
            {/* <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.534)",
                top: "0",
                zIndex: "1",
              }}
            ></div> */}
            <GornjiDioWrap>
              <div>
                <WrapNaslovCrtaOautoru>
                  <Crta />
                  <Naslov1>{t("oautoru")}</Naslov1>
                </WrapNaslovCrtaOautoru>

                <TextOautoru>
                  {t("igorgoles1")}
                  <br />
                  <br />
                  {t("igorgoles2")}
                </TextOautoru>
                <div
                  style={{
                    marginTop: "20px",
                    float: "right",
                    position: "relative",
                  }}
                >
                  {/* <img src={Potpis} alt="signature" /> */}
                  <Lottie
                    // style={{ textAlign: "center" }}
                    animationData={potpisLottie}
                    interactivity={interactivity}
                    autoPlay={false}
                    loop={false}
                  />
                  <div
                    style={{
                      fontSize: "16px",
                      color: "white",
                      position: "absolute",
                      right: "10%",
                      bottom: "10%",
                    }}
                  >
                    Igor Goleš
                  </div>
                </div>
              </div>

              <Image>{/* <img src={Goles} alt="autor photo" /> */}</Image>
            </GornjiDioWrap>
            <DonjiDioWrap>
              <KnjigaWrap>
                {/* <img src={Knjiga} width="100%" alt="knjiga" /> */}
              </KnjigaWrap>
              <DonjiDioTextWrap>
                <WrapNaslovCrtaOknjizi>
                  <Crta2 />
                  <Naslov> {t("oatlasu")}</Naslov>
                </WrapNaslovCrtaOknjizi>
                <TextOknjizi>
                  <ul>
                    <li> {t("948stranica")}</li>
                    <li>{t("luksuz")}</li>
                    <li>{t("hreng")}</li>
                    <li>{t("razglednice")}</li>
                    <li>{t("potpisnici")}</li>
                    <li>{t("deluxe")}</li>
                  </ul>
                </TextOknjizi>
                <div style={{ width: "179px", paddingLeft: "25px" }}>
                  <ButtonWrap onClick={() => handleShopLink()}>
                    <Button
                      text={t("kupiatlaskratko")}
                      ikona={Cart}
                      color="white"
                    ></Button>
                  </ButtonWrap>
                </div>
              </DonjiDioTextWrap>
            </DonjiDioWrap>
          </Wrap>

          <KnjigaWrapZaDesktop>
            <img src={Knjiga} width="100%" alt="knjiga" />
          </KnjigaWrapZaDesktop>
        </>
      )}
    </>
  )
}

export default OautoruFront
