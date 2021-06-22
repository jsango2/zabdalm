import React from "react"
import { StaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import i18next from "i18next"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: auto;
  position: relative;
  margin: -40px 0 90px;
  text-align: center;
  @media only screen and (max-width: 1152px) {
    margin: 50px 0 90px;
  }
`
const Naslov = styled.div`
  font-family: Playfair Display;
  font-size: 54px;
  font-weight: 600;
  @media only screen and (max-width: 550px) {
    font-size: 36px;
  }
`
const Linija = styled.div`
  height: 1px;
  width: 110px;
  background-color: black;
  @media only screen and (max-width: 550px) {
    width: 65px;
  }
`

const PressUl = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: left;

  @media only screen and (max-width: 1152px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media only screen and (max-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }
`

const PressLi = styled.div`
  display: flex;
  align-items: baseline;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  margin: 10px 5px;

  & > a {
    color: #000;
  }
`

const Dot = styled.div`
  width: 5px;
  height: 5px;
  display: inline-table;
  background-color: #e0e0e0;
  margin-right: 10px;
  position: relative;
  top: -1px;
`

function Press() {
  return (
    <StaticQuery
      query={graphql`
        {
          wpgraphql {
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
          }
        }
      `}
      render={data => (
        <Wrap>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "42px",
            }}
          >
            <Linija />
            <Naslov>PRESS</Naslov>
            <Linija />
          </div>

          {i18next.language === "hr" ? (
            <PressUl>
              {data.wpgraphql.pressObjave.edges.map(item => (
                <PressLi key={item.node.databaseId}>
                  <Dot />
                  <a
                    href={
                      item.node.pressObjaveWp.poveznicaZaKlik !== undefined
                        ? item.node.pressObjaveWp.poveznicaZaKlik
                        : ""
                    }
                  >
                    {item.node.pressObjaveWp.pressObjavaHr}
                  </a>
                </PressLi>
              ))}
            </PressUl>
          ) : (
            <PressUl>
              {data.wpgraphql.pressObjave.edges.map(item => (
                <PressLi key={item.node.databaseId}>
                  <Dot />
                  <a
                    href={
                      item.node.pressObjaveWp.poveznicaZaKlik !== undefined
                        ? item.node.pressObjaveWp.poveznicaZaKlik
                        : ""
                    }
                  >
                    {item.node.pressObjaveWp.pressObjavaEng}
                  </a>
                </PressLi>
              ))}
            </PressUl>
          )}
        </Wrap>
      )}
    ></StaticQuery>
  )
}

export default Press
