import React from "react"
// import ReactDOM from 'react-dom'
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Radnici from "../images/radniciSQ.jpg"

class ParallaxDemo extends React.Component {
  render() {
    return (
      <Parallax
        style={{
          zIndex: "99999",
        }}
        ref={ref => (this.parallax = ref)}
        pages={1}
      >
        <ParallaxLayer
          offset={-0.3}
          speed={2}
          factor={1}
          style={{
            zIndex: "99999",
            backgroundImage: `url(${Radnici})`,
            backgroundSize: "cover",
          }}
        />
      </Parallax>
    )
  }
}
export default ParallaxDemo
