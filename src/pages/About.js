import React, { useState, useEffect } from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import { graphql } from "gatsby"
import i18next from "i18next"

// import {
//   Link,
//   Trans,
//   useTranslation,
//   useI18next,
// } from "gatsby-plugin-react-i18next"
import { useTranslation } from "react-i18next"

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

const thumbItems = (items, [setThumbIndex, setThumbAnimation]) => {
  return items.map((item, i) => (
    <div
      className="thumb"
      onClick={() => (setThumbIndex(i), setThumbAnimation(true))}
    >
      {item}
    </div>
  ))
}

const About = ({ data }) => {
  // console.log(i18next.language)
  const reviews = data.wpgraphql.komentari.edges
  const items = []

  if (i18next.language == "hr") {
    reviews.forEach(review => {
      items.push(
        <OthersRemark className="OthersSayItem" data-value="1">
          {review.node.komentariIRecenzije.komentarRecenzijaHr}
          <OthersBy>
            {review.node.komentariIRecenzije.autorKomentaraHr}
          </OthersBy>
        </OthersRemark>
      )
    })
  } else {
    reviews.forEach(review => {
      items.push(
        <OthersRemark className="OthersSayItem" data-value="1">
          {review.node.komentariIRecenzije.komentarIliRecenzijaEng}
          <OthersBy>
            {review.node.komentariIRecenzije.autorKomentaraEng}
          </OthersBy>
        </OthersRemark>
      )
    })
  }

  const { t } = useTranslation()
  // const { languages, changeLanguage } = useI18next()
  const [current, setCurrent] = useState(0)

  const [dots, setDots] = useState(true)

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  })
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
      makeDotsVisible(window.innerWidth)
    }
    window.addEventListener("resize", handleResize)
    handleResize()
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const makeDotsVisible = width => {
    if (width < 950) {
      setDots(false)
    } else {
      setDots(true)
    }
  }

  const handleClick = (e, id) => {
    current === id ? setCurrent(null) : setCurrent(id)
  }

  const [mainIndex, setMainIndex] = useState(0)
  const [mainAnimation, setMainAnimation] = useState(false)
  const [thumbIndex, setThumbIndex] = useState(0)
  const [thumbAnimation, setThumbAnimation] = useState(false)
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  )

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex + 1)
    }
  }

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true)
      setThumbIndex(thumbIndex - 1)
    }
  }

  const syncThumbs = e => {
    setThumbIndex(e.item)
    setThumbAnimation(false)

    if (!mainAnimation) {
      setMainIndex(e.item)
    }
  }

  return (
    <Layout>
      <OKnjiziIntro />

      <KolazWrapper>
        <KolazAnimation />
      </KolazWrapper>

      <OMonografiji />

      <KnjigeSection>
        <Knjige750>
          <Knjiga1>
            <img src={Knjiga} alt="knjiga" />
          </Knjiga1>
          <Knjiga2>
            <img src={Knjiga} alt="knjiga" />
          </Knjiga2>
        </Knjige750>
        <UlomakKnjige>
          <img src={Ulomak} width="100%" alt="ulomak" />
        </UlomakKnjige>
      </KnjigeSection>

      <AlkarAnimation />

      <OthersSection>
        <OthersTitle>
          <OthersLineLeft />
          <MiddleTitle>Drugi o knjizi</MiddleTitle>
          <OthersLineRight />
        </OthersTitle>

        <OthersSay>
          <div className="btn-prev" onClick={slidePrev}>
            <img src={Arrow} alt="arrow" />
          </div>
          <AliceCarousel
            activeIndex={thumbIndex}
            autoWidth
            disableDotsControls={dots}
            disableButtonsControls
            items={thumbs}
            mouseTracking={false}
            onSlideChanged={syncThumbs}
            touchTracking={!mainAnimation}
          />

          <div className="btn-next" onClick={slideNext}>
            <img src={Arrow} alt="arrow" />
          </div>
        </OthersSay>
      </OthersSection>

      <KnjigaWrapper>
        <KnjigaAnimation />
        <Ulomak2Wrap>
          <img src={Ulomak} width="100%" alt="ulomak" />
        </Ulomak2Wrap>
      </KnjigaWrapper>

      {/* <Press data={data} /> */}

      <OKnjiziBlogFront blogovi2={data.wpgraphql.blogovi.edges} />
    </Layout>
  )
}

export default About

export const query = graphql`
  query {
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
// pressObjave {
//   edges {
//     node {
//       pressObjaveWp {
//         poveznicaZaKlik
//         pressObjavaEng
//         pressObjavaHr
//       }
//       databaseId
//     }
//   }
// }
