import React from "react"
import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"
// import styled from "styled-components"

import Header from "./header"

import "./layout.css"

import Footer from "./footer"

const Layout = ({ isOpen, children }) => {
  return (
    <div style={{ width: "100%", height: "auto", overflow: "hidden" }}>
      <div className={` ${isOpen ? "dark" : ""} `}></div>

      <Header />
      {children}
      <Footer />
    </div>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
