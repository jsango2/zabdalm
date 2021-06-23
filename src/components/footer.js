import React from "react"
import styled from "styled-components"
import { useTranslation } from "react-i18next"
import FooterAnimation from "./footerAnimation"
import MadeByAnimation from "./madeByAnimation"
import { Link } from "gatsby"
import FooterAnimation2 from "./footerAnimation2"

const Container = styled.div`
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  margin-top: -150px;
`

const FooterWrap = styled.footer`
  padding-top: 155px;
  width: 100%;
  max-width: 1152px;
  margin: 0 auto;
  background: #b0c7ce;
  color: #fff;
`

const FooterContainer = styled.div`
  margin: 0 auto 0 90px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (max-width: 999px) {
    margin: 0 auto 0 60px;
  }
  @media (max-width: 658px) {
    margin: 0 auto 0 40px;
  }
  @media (max-width: 588px) {
    margin: 0 auto 0 30px;
  }
`

const FooterSection = styled.div`
  width: 33%;

  @media (max-width: 588px) {
    width: 43%;
  }
`

const FooterTitle = styled.h3`
  font-family: Raleway, sans-serif;
  text-transform: uppercase;
  font-weight: 500;
  font-size: 24px;
`

const ContactList = styled.ul`
  font-size: 12px;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 20px;

  @media (max-width: 999px) {
    max-width: 230px;
  }

  @media (max-width: 750px) {
    max-width: 173px;
  }

  @media (max-width: 680px) {
    max-width: 163px;
    font-size: 10px;
  }
`

const ContactItem = styled.li`
  margin-bottom: 0;
  line-height: initial;
`

const FooterDescription = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 17px;
  max-width: 300px;
  margin-top: 0;
  margin-bottom: 25px;

  @media (max-width: 999px) {
    max-width: 250px;
  }
  @media (max-width: 750px) {
    max-width: 192px;
  }
  @media (max-width: 680px) {
    max-width: 163px;
    font-size: 10px;
  }
`

const AboutProject = styled.div`
  @media (max-width: 588px) {
    display: none;
  }
`

const FooterSocial = styled.ul`
  font-size: 24px;
  margin: 0;
  padding: 0;
  margin-left: 100px;
  list-style: none;
  margin-bottom: 16px;

  @media (max-width: 999px) {
    margin-left: 70px;
  }
  @media (max-width: 750px) {
    margin-left: 50px;
  }
  @media (max-width: 680px) {
    margin-left: 35px;
    font-size: 14px;
    margin-bottom: 12px;
    position: relative;
    top: 40px;
  }
  @media (max-width: 588px) {
    top: 0;
  }
`

const SocialItem = styled.li`
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
`

const FooterLine = styled.div`
  width: 1000px;
  height: 1.2px;
  background: #f5f5f5;
  margin-left: 15px;
  @media (max-width: 680px) {
    opacity: 0.55;
  }
`

const FooterMadeBy = styled.div`
  color: #fff;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  margin: 0 auto;
  margin-top: 50px;
  padding: 48px;
  max-width: 370px;
  line-height: 17px;
`

function Footer() {
  const [t, i18n] = useTranslation()

  return (
    <Container>
      <FooterAnimation />
      <FooterWrap>
        <FooterContainer>
          <FooterSection>
            <FooterTitle>{t("kontakt")}</FooterTitle>
            <ContactList>
              <ContactItem>DALMATIAN STORY  j.d.o.o</ContactItem>
              <ContactItem>Mosećka  56</ContactItem>
              <ContactItem>21 000 Split</ContactItem>
              <ContactItem>Croatia</ContactItem>
            </ContactList>
            <ContactList>
              <ContactItem>Mail: dalmatian.story2020@gmail.com</ContactItem>
              <ContactItem>Tel: +385916019277</ContactItem>
            </ContactList>
          </FooterSection>
          <FooterSection>
            <AboutProject>
              <FooterTitle>{t("oprojektu")}</FooterTitle>
              <FooterDescription>{t("citat")}</FooterDescription>
              <FooterDescription>{t("produkt")}</FooterDescription>
            </AboutProject>
          </FooterSection>
          <FooterSection>
            <FooterSocial>
              <Link to="/About">
                <SocialItem>
                  Atlas
                  <FooterLine />
                </SocialItem>
              </Link>
              <a href="https://shop.zaboravljenadalmacija.hr">
                <SocialItem>
                  Webshop
                  <FooterLine />
                </SocialItem>
              </a>
              <Link to="/Blog">
                <SocialItem>
                  Blog
                  <FooterLine />
                </SocialItem>
              </Link>
              <a href="https://www.instagram.com/zaboravljena_dalmacija">
                {" "}
                <SocialItem>
                  Instagram
                  <FooterLine />
                </SocialItem>
              </a>
            </FooterSocial>
          </FooterSection>
        </FooterContainer>
        <FooterMadeBy>
          <MadeByAnimation />
        </FooterMadeBy>
      </FooterWrap>
    </Container>
  )
}

export default Footer
