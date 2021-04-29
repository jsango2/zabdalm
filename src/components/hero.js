import React from "react"
import styled from "styled-components"
import HeroPhoto from "../../content/assets/heroPhoto.png"
import Knjiga from "../../content/assets/knjiga.png"
import Brodi from "../../content/assets/brodi.png"
import Pas from "../../content/assets/pas.png"
import Cart from "../../content/assets/cart.svg"
import Button from "./button"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Wrap = styled.div`
  /* background-color: grey; */
  width: 100%;
  height: 544px;

  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`
const WrapItems = styled.div`
  /* background-color: grey; */
  width: 872px;
  height: 554px;
  ${"" /* z-index: "5";
  position: "absolute";
  left: "50%";
  top: "100px";
  transform: translate(-50%, -50%); */}

  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`

const Hero = () => {
  const settingsSlick = {
    dots: false,
    fade: true,
    infinite: false,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <>
      <Slider
        dots={false}
        fade={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
      >
        <div>
          <img src={HeroPhoto} alt="hero" srcset="" />
        </div>
        <div>
          <img src={Brodi} alt="brod" srcset="" />
        </div>
        <div>
          <img src={Pas} alt="pas" srcset="" />
        </div>
      </Slider>

      <Wrap>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${HeroPhoto})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
            zIndex: "1",
          }}
        >
          <div
            style={{
              //   backgroundColor: "grey",
              width: "872px",
              height: "554px",
              position: "relative",
              top: "97px",
              margin: "0 auto",
              display: "flex",
            }}
          >
            <div
              style={{
                width: "424px",
                height: "554px",
                backgroundImage: `url(${Knjiga})`,
                backgroundPosition: "center",
                backgroundSize: "cover ",
                zIndex: "2",
              }}
            ></div>
            <div>
              <div
                style={{
                  width: "400px",
                  fontFamily: "Playfair Display",
                  fontSize: "54px",
                  lineHeight: "55px",
                  color: " white",
                  margin: "60px 0 30px 0",
                }}
              >
                Priča o tome kako je nekada bilo
              </div>
              <Button
                text="KUPI ATLAS ZABORAVLJENE DALMACIJE"
                ikona={Cart}
                color="white"
              >
                {" "}
              </Button>
              <div
                style={{
                  width: "330px",
                  fontFamily: "Raleway",
                  fontSize: "15px",
                  lineHeight: "23px",
                  color: " white",
                  margin: "25px 0 30px 0",
                }}
              >
                948 stranica, tvrdi uvez • Luksuzna izvedba, atlas format,
                težina 5kg • Hrvatsko-engleski prijevod • 1.646 starih
                razglednica
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default Hero
