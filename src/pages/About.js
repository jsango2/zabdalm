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

import OKnjiziIntro from "../components/oKnjiziIntro"
import OKnjiziBlogFront from "../components/oKnjiziBlogFront"
import OMonografiji from "../components/oMonografiji"

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
  margin-top: 90px;
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
`
const OthersLine = styled.div`
  height: 1.2px;
  width: 120px;
  background-color: #292929;

  @media only screen and (max-width: 750px) {
   width: 110px;
  }
  @media only screen and (max-width: 650px) {
   width: 65px;
  }
`
const MiddleTitle = styled.h2`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  color: #3a3a3a;
  line-height: 103.3%;
 
`
const OthersSay = styled.div`
  display: flex;
  max-width: 90%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`
const OthersBy = styled.p`
  margin-top: 15px;
  font-family: Roboto;
  font-style: italic;
  font-weight: 300;
  font-size: 16px;
  line-height: 19px;
  text-align: right;
`
const OthersRemark = styled.p`
  font-weight: 500;
  font-size: 15px;
  line-height: 23px;
  padding: 5px;
  color: #000;
`
const KnjigaWrapper = styled.div`
`
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

const items = [
  <OthersRemark className="OthersSayItem" data-value="1">
    Riječ je o golemom ikonografskom rezervoaru s nizom dosad neviđenih slika po
    kojima se ova knjiga ne okreće samo melankoličnim proučavateljima zavičajne
    prošlosti i baštine, brojnim namjernicima koji sa sve većim zanimanjem žele
    razumjeti ono što gledaju, nego i specijalistima različitih disciplina.
    Urednik knjige Igor Goleš poznati je kolekcionar starih razglednica. Isprva
    koncentriran na motive Šibenika i okolnih mjesta, on je svoja istraživanja
    tijekom godina značajno proširio kako bi, naposljetku, uvidom u niz drugih,
    jednako dragocjenih zbirki, sačinio ovu, u pravom smislu antologijsku
    monografiju, u kojoj se poseban naglasak stavlja ne samo na
    kulturno-povijesnu baštinu, spomenike, panorame manje razglašenih
    dalmatinskih mjesta i gradova, nego i na ljude, običaje, događaje, proslave,
    procesije… Stoga na ovim slikama buja svakodnevni i svečani život, u
    prizorima koji Dalmaciju od prije stotinu godina ne idealiziraju, ali je
    otkrivaju u mnogim zaboravljenim sastavnicama.
    <OthersBy>Joško Belamarić, povjesničar umjetnosti</OthersBy>
  </OthersRemark>,
  <OthersRemark className="OthersSayItem" data-value="1">
    Knjiga Pozdrav iz zaboravljene Dalmacije vrijedan je memento prošlosti
    Dalmacije za koju često ističemo da je nepovratno izgubljena, a na koju nas,
    uz fotografije, podsjeća i ovo dragocjeno, ponekad pomalo i zanemareno,
    kartofilsko gradivo. Riječ je o zaista iznimnoj knjizi koja će biti
    zanimljiva i korisna ne samo kolekcionarima već i stručnjacima različitih
    profila i polja istraživanja: povjesničarima, povjesničarima umjetnosti,
    etnolozima, arheolozima, konzervatorima, povjesničarima fotografije,
    arhitekture, dizajna i reklamnog oglašavanja. Podjednako, bit će zanimljiva
    i najširoj publici i svima koje zanima povijest Dalmacije predstavljena
    slikom, koja često govori više i sugestivnije od riječi.
    <OthersBy>Sandi Bulimbašić, povjesničarka umjetnosti</OthersBy>
  </OthersRemark>,
  <OthersRemark className="OthersSayItem" data-value="1">
    Pregledavanjem knjige Pozdrav iz zaboravljene Dalmacije bivamo začuđeni kako
    to da su neka zabitna mjesta još onda imala svoju razglednicu, da su
    unutrašnjost trgovine mješovite robe, tečaj šivanja ili punjenje konzervi
    sardina bili zanimljivi motivi za razglednice, ovjekovječena je igra
    šijavice, gledamo osobe kao što su hajduk Andrija Šimić i galantar Paul
    Merčep, „prisustvujemo“ brojnim vjerskim i sportskim događajima, pred nama
    poziraju članovi raznih društava itd. Golešova knjiga izvrstan je izvor
    mnogima koji se žele upoznati s poviješću Dalmacije, njenom kulturom,
    urbanizmom, spomenicima, športom, običajima itd. Svatko u njoj može naći
    nešto zanimljivo, dokumentarno, što će proširiti njegovo znanje i što će ga
    potaknuti na daljnja istraživanja. Neosporno je da će ona postati
    nezaobilazna u pisanju tekstova o Dalmaciji i da će naći istaknuto mjesto u
    mnogim javnim i privatnim knjižnicama.
    <OthersBy>Arsen Duplančić, povjesničar</OthersBy>
  </OthersRemark>,
  <OthersRemark className="OthersSayItem" data-value="1">
    Bez pisama Cicerona, Plinija Mlađeg, Goethea i brojnih drugih bili bismo
    mnogo siromašniji za brojne kulturne, umjetničke, povijesne i druge
    vrijednosti. Ciceron nam je u pismima prenio dramatičnu potjeru za svojim
    robom Dionizijem koji mu je ukrao dragocjenu biblioteku i pobjegao u Naronu.
    Plinije Mlađi opisao je kako su izgledali tajni sastanci ranih kršćanskih
    zajednica. Goethe je pak pisma obogaćivao gotovo transcendentnim crtežima od
    kojih se koža ježi. Za pismo se podrazumijeva da bude dugo i sadržajno.
    Naprotiv, bit poštanske razglednice jest prenošenje kratke, nerijetko
    jednostavne pa i banalne poruke, ali koja je najčešće nabijena emocijama.
    Duboko sam uvjeren da će razglednice iz velikih zbirka urednika ove
    monografije Igora Goleša i njegovih kolega kolekcionara pružiti
    reprezentativnu dijakronijsku sliku Dalmacije. Bit ćemo, ne sumnjam,
    zadivljeni bogatstvom motiva i podataka. Zato se svrstavam među one koji
    ovakvu knjigu podupiru i očekuju.
    <OthersBy>Akademik Nenad Cambi, arheolog</OthersBy>
  </OthersRemark>,
]

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
  const { t } = useTranslation()
  const { languages, changeLanguage } = useI18next()
  const [current, setCurrent] = useState(0)

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

  const syncMainBeforeChange = e => {
    setMainAnimation(true)
  }

  const syncMainAfterChange = e => {
    setMainAnimation(false)

    if (e.type === "action") {
      setThumbIndex(e.item)
      setThumbAnimation(false)
    } else {
      setMainIndex(thumbIndex)
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
          <OthersLine />
          <MiddleTitle>Drugi o knjizi</MiddleTitle>
          <OthersLine />
        </OthersTitle>

        <OthersSay>
          <div className="btn-prev" onClick={slidePrev}>
            <img src={Arrow} alt="arrow" />
          </div>
          <AliceCarousel
            activeIndex={thumbIndex}
            autoWidth
            disableDotsControls
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

      <PressSection></PressSection>

      <OKnjiziBlogFront blogovi={data.wpgraphql.blogovi.edges} />
    </Layout>
  )
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
          }
        }
      }
    }
  }
`
