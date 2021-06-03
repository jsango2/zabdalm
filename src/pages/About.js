import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"

import {
  Link,
  Trans,
  useTranslation,
  useI18next,
} from "gatsby-plugin-react-i18next"

import OKnjiziIntro from "../components/OKnjiziIntro"
import OKnjiziBlogFront from "../components/oKnjiziBlogFront"
import OMonografiji from "../components/oMonografiji"
import Press from "../components/Press"

import KolazAnimation from "../components/kolazAnimation"
import AlkarAnimation from "../components/alkarAnimation"
import KnjigaAnimation from "../components/knjigaAnimation"

import Knjiga from "../../content/assets/knjiga.png"
import Ulomak from "../../content/assets/ulomakStamp.png"
import Arrow from "../../content/assets/arrow.png"
import Rope from "../../content/assets/rope.png"

import AliceCarousel from "react-alice-carousel"
import "react-alice-carousel/lib/alice-carousel.css"

const KolazWrapper = styled.div`
  position: relative;
  top: -1070px;
  margin-bottom: -1110px;
  @media only screen and (max-width: 1152px) {
    top: -88vw;
    margin-bottom: -96vw;
  }
  @media only screen and (max-width: 750px) {
    top: -125vw;
    margin-bottom: -130vw;
  }
  @media only screen and (max-width: 550px) {
    top: initial;
    margin: 0;
  }
`
const KnjigeSection = styled.div`
  display: none;
  @media only screen and (max-width: 850px) {
    display: initial;
  }
  @media only screen and (max-width: 500px) {
    height: 500px;
    display: block;
  }
`
const Knjige750 = styled.div`
  height: 800px;
  margin: 60px 0;

  @media only screen and (max-width: 850px) {
    display: flex;
    justify-content: flex-end;
  }
  @media only screen and (max-width: 750px) {
    justify-content: center;
  }
  @media only screen and (max-width: 650px) {
    justify-content: flex-start;
  }
`
const Knjiga1 = styled.div`
  width: 45%;
  transform: rotate(-2deg);
  @media only screen and (max-width: 550px) {
    width: 100%;
    transform: rotate(0);
  }
  @media only screen and (max-width: 500px) {
    & > img {
      width: 100%;
    }
  }
`
const Knjiga2 = styled.div`
  width: 45%;
  position: relative;
  left: -200px;
  top: 45px;
  transform: rotate(5deg);
  @media only screen and (max-width: 550px) {
    display: none;
  }
`
const UlomakKnjige = styled.div`
  width: 150px;
  position: relative;
  top: -560px;
  left: 65vw;
  @media only screen and (max-width: 850px) {
    margin-bottom: -240px;
  }
  @media only screen and (max-width: 550px) {
    left: 65vw;
  }
  @media only screen and (max-width: 500px) {
    top: -700px;
    left: 50vw;
    /* margin-bottom: -50vw; */
  }
`
const OthersSection = styled.div`
  margin: 90px 0 60px;
  background-image: url(${Rope});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`
const OthersTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  /* @media only screen and (max-width: 750px) {
    padding: 0 80px;
  } */
  @media only screen and (max-width: 550px) {
    display: block;
    padding: 0 30px;
  }
`
const OthersLineLeft = styled.div`
  height: 1.2px;
  width: 120px;
  background-color: #292929;

  @media only screen and (max-width: 750px) {
    width: 110px;
  }
  @media only screen and (max-width: 650px) {
    width: 65px;
  }
  @media only screen and (max-width: 550px) {
    position: relative;
    top: 27px;
    left: -80px;
  }
`
const OthersLineRight = styled.div`
  height: 1.2px;
  width: 120px;
  background-color: #292929;

  @media only screen and (max-width: 750px) {
    width: 110px;
  }
  @media only screen and (max-width: 650px) {
    width: 65px;
  }
  @media only screen and (max-width: 550px) {
    display: none;
  }
`
const MiddleTitle = styled.h2`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  color: #3a3a3a;
  line-height: 103.3%;
  margin: 0;

  @media only screen and (max-width: 550px) {
    font-size: 46px;
  }
`
const OthersSay = styled.div`
  display: flex;

  margin: 0 auto;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 750px) {
    padding: 0 80px;
  }
  @media only screen and (max-width: 550px) {
    padding: 0 30px;
  }
`
const OthersBy = styled.div`
  margin-top: 15px;
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
`
const OthersRemark = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  padding: 5px;
  color: #000;
`
const KnjigaWrapper = styled.div``
const Ulomak2Wrap = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  top: -470px;
  left: 189px;

  @media only screen and (max-width: 1152px) {
    left: 18vw;
    top: -42vw;
  }
`
const PressSection = styled.div`
  height: 400px;
`

// const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
//   return items.map((item, i) => (
//     <div
//       className="thumb"
//       onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
//     >
//       {item}
//     </div>
//   ))
// }

const About = ({ data }) => {
  //
  return <div>about test</div>
}

export default About

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
    wpgraphql {
      komentari {
        edges {
          node {
            komentariIRecenzije {
              autorKomentaraEng
              autorKomentaraHr
              komentarIliRecenzijaEng
              komentarRecenzijaHr
            }
          }
        }
      }
      pressObjave {
        edges {
          node {
            pressObjaveWp {
              poveznicaZaKlik
              pressObjavaEng
              pressObjavaHr
            }
            databaseId
          }
        }
      }
      blogovi(where: { orderby: { field: DATE, order: DESC } }, first: 3) {
        edges {
          node {
            blog_graphql {
              istaknutaFotografijaNaBlogu {
                sourceUrl
              }
              naslovBlogaEng
              naslovBlogaHr
              tekstBlogaEng
              tekstBlogaHr
              tekstSponzorira
              tekstSponzoriraEng
              logoSponzora {
                sourceUrl
              }
            }
            categories {
              edges {
                node {
                  name
                }
              }
            }
            slug
            databaseId
          }
        }
      }
    }
  }
`
