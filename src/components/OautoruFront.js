import React from "react"
import styled from "styled-components"
import OautoruPng from "../../content/assets/autorPng.png"
import Goles from "../../content/assets/Goles.png"
import Potpis from "../../content/assets/potpis.svg"
import Knjiga from "../../content/assets/knjiga.png"
import Button from "./button"
import Cart from "../../content/assets/cart.svg"

const Wrap = styled.div`
  ${"" /* background-color: grey; */}
  width: 100%;
  height: 1775px;
  position: relative;
  ${"" /* @media only screen and (max-width: 76em) {
    height: 450px;
  } */}
`
function OautoruFront() {
  return (
    <Wrap
      style={{
        backgroundImage: `url(${OautoruPng})`,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "906px",
          height: "507px",
          //   backgroundColor: "grey",
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              left: "-125px",
            }}
          >
            <div
              style={{
                width: "93px",
                height: "1px",
                backgroundColor: "white",
                marginRight: "33px",
              }}
            ></div>
            <div
              style={{
                fontFamily: "Playfair Display",
                fontSize: "54px",
                fontWeight: "600",
                marginBottom: "40px",
                color: "white",
                paddingTop: "30px",
              }}
            >
              O autoru
            </div>
          </div>

          <div
            style={{
              fontFamily: "Raleway",
              fontSize: "15px",
              fontWeight: "500",
              //   marginBottom: "41px",
              color: "white",
              lineHeight: "23.43px",
              width: "394px",
            }}
          >
            Igor Goleš kolekcionar je rijetkih, raritetnih razglednica Dalmacije
            čije fotografije svjedoče bitne detalje, donose na trenutak
            zaustavljenu povijest toga kraja. U Golešovoj su zbirci kartoline
            koje pripovijedaju etnografski, socijalno, politički i na ine načine
            zanimljive priče o Dalmaciji s konca 19. i početka 20. stoljeća, do
            1940. godine.
            <br />
            <br />
            Autor je kod odabira razglednica koje će prikazati publici odabirao
            one najrjeđe i nepoznate javnosti, pa tako u knjigama možete
            doživjeti kako su izgledala vjenčanja na početku 20. stoljeća,
            kulturne i sportske događaje, panorame sela i gradova, početke
            turizma na ovim prostorima, prve hotele i pansione, gostionice,
            crkve, ljude i običaje… Ovaj serijal je produkt njegovog
            15-godišnjeg rada u kolekcionarstvu i traganja za najrjeđim
            fotografijama Dalmacije.
          </div>
          <div
            style={{ marginTop: "20px", float: "right", position: "relative" }}
          >
            <img src={Potpis} alt="signature" />
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
        <div>
          <img src={Goles} alt="autor photo" />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          width: "906px",
          height: "507px",
          //   backgroundColor: "grey",
          position: "relative",
          top: "1200px",
          left: "50%",
          transform: "translate(-50%, -15%)",
        }}
      >
        <div
          style={{
            width: "674px",
            height: "770px",
            position: "absolute",
            left: "-180px",
            backgroundImage: `url(${Knjiga})`,
            backgroundPosition: "center",
            backgroundSize: "cover ",
            zIndex: "3",
          }}
        ></div>
        <div style={{ width: "450px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              position: "relative",
              left: "-125px",
            }}
          >
            <div
              style={{
                width: "93px",
                height: "1px",
                backgroundColor: "white",
                marginRight: "33px",
                marginTop: "13px",
              }}
            ></div>
            <div
              style={{
                fontFamily: "Playfair Display",
                fontSize: "54px",
                fontWeight: "600",
                marginBottom: "50px",
                color: "white",
                paddingTop: "60px",
              }}
            >
              O atlasu
            </div>
          </div>
          <div
            style={{
              fontFamily: "Raleway",
              fontSize: "15px",
              fontWeight: "500",
              //   marginBottom: "41px",
              color: "white",
              lineHeight: "23px",
              width: "405px",
            }}
          >
            <ul>
              <li>948 stranica, tvrdi uvez</li>
              <li>Luksuzna izvedba, atlas format, knjiga ima gotovo 5kg</li>
              <li>Hrvatsko - engleski prijevod</li>
              <li>
                1.646 starih razglednica 300-njak dalmatinskih sela i gradova
              </li>
              <li>
                Tekstove potpisuju Igor Goleš, Jakša Fiamengo, Joško Belamarić,
                Božo V. Žigo, Ivana Vuković, a naslovnicu i ilustracije jedan od
                najpoznatijih hrvatskih ilustratora i dizajnera Filipa Peraića
              </li>
              <li>
                De luxe izdanje od 25 primjeraka je obogaćeno originalnim
                crtežima dalmatinskih motiva u olovci, od najpoznatijeg i
                najskupljeg hrvatskog slikara današnjice Zvonimira Mihanovića.
              </li>
            </ul>
          </div>
          <div style={{ width: "179px", paddingLeft: "25px" }}>
            <Button text="KUPI KNJIGU" ikona={Cart} color="white" width="179" />
          </div>
        </div>
      </div>
    </Wrap>
  )
}

export default OautoruFront
