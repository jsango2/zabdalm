import React, { useState, useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import { useTranslation } from "react-i18next"
import { Link } from "gatsby"
import i18next from "i18next"
import { useWindowSize } from "./useWindowSize"

const MAX_PRICA = 12
const MOBILE_PRIKAZ = 5

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: auto;
  position: relative;
  margin: 25px 0 25px 0;
  text-align: center;
`
const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  line-height: 43px;
  @media only screen and (max-width: 750px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 430px) {
    font-size: 32px;
  }
`
const Linija = styled.div`
  height: 1px;
  width: 110px;
  background-color: black;
  @media only screen and (max-width: 550px) {
    width: 55px;
  }
`
const Clanci = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 40px;
  row-gap: 32px;
  width: 90%;
  max-width: 1100px;
  margin: 0 auto;
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 550px) {
    grid-template-columns: 1fr;
    row-gap: 20px;
  }
`
const Clanak = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  text-align: left;
`
const Slicica = styled.div`
  flex-shrink: 0;
  width: 84px;
  height: 60px;
  background-color: #e0e0e0;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`
const TextClanci = styled.div`
  position: relative;
  font-family: Raleway;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
`
const PrikaziViseWrap = styled.div`
  margin: 32px auto 0 auto;
  width: 180px;
`
const PrikaziVise = styled.div`
  font-family: Raleway;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.05em;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 14px;
  padding: 10px 20px;
`

function NajpopularnijePrice() {
  const [lang, setLang] = useState(i18next.language)
  const [prikaziSve, setPrikaziSve] = useState(false)
  const size = useWindowSize()

  const [t] = useTranslation()

  useEffect(() => {
    setLang(i18next.language)
  }, [i18next.language])

  const isMobile = size.width && size.width <= 550

  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
            blogovi(first: 70) {
              edges {
                node {
                  blog_graphql {
                    najcitanijaPrica
                    naslovBlogaEng
                    naslovBlogaHr
                    istaknutaFotografijaNaBlogu {
                      sourceUrl
                    }
                  }
                  slug
                }
              }
            }
          }
        }
      `}
      render={data => {
        const svePrice = data.wpgraphql.blogovi.edges
          .filter(
            e =>
              e.node.blog_graphql.najcitanijaPrica ===
              "Istakni kao najčitaniju priču"
          )
          .slice(0, MAX_PRICA)

        const prikazanePrice =
          isMobile && !prikaziSve ? svePrice.slice(0, MOBILE_PRIKAZ) : svePrice

        return (
          <Wrap>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "64px",
              }}
            >
              <Linija />
              <Naslov>{t("najpopularnijeprice")}</Naslov>
              <Linija />
            </div>

            <Clanci>
              {prikazanePrice.map(clanak => (
                <Link
                  key={clanak.node.slug}
                  style={{ textDecoration: "none", color: "black" }}
                  to={`/Blog/${clanak.node.slug}`}
                >
                  <Clanak>
                    <Slicica
                      style={{
                        backgroundImage: `url(${clanak.node.blog_graphql.istaknutaFotografijaNaBlogu?.sourceUrl})`,
                      }}
                    />
                    <TextClanci>
                      {lang === "hr"
                        ? clanak.node.blog_graphql.naslovBlogaHr
                        : clanak.node.blog_graphql.naslovBlogaEng}
                    </TextClanci>
                  </Clanak>
                </Link>
              ))}
            </Clanci>

            {isMobile && !prikaziSve && svePrice.length > MOBILE_PRIKAZ && (
              <PrikaziViseWrap onClick={() => setPrikaziSve(true)}>
                <PrikaziVise>{t("prikazivise")}</PrikaziVise>
              </PrikaziViseWrap>
            )}
          </Wrap>
        )
      }}
    ></StaticQuery>
  )
}

export default NajpopularnijePrice
