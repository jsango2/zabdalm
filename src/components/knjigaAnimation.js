import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Lottie from "lottie-react";

import knjiga1152 from "../animations/knjiga1152";
import knjiga370 from "../animations/knjiga370";

const AnimationWrap = styled.div`
  /* position: relative;
  top: 140px;
  @media (max-width: 1500px) {
    top: 10vw;
  }
  @media (max-width: 999px) {
    top: 15vw;
  }
  @media (max-width: 750px) {
    top: 20vw;
  }
  @media (max-width: 588px) {
    top: 25vw;
  }
  @media (max-width: 370px) {
    top: 30vw;
  } */
`;

function KnjigaAnimation() {
  const interactivity = {
    mode: "scroll",
    actions: [
      {
        visibility: [0.2, 0.45],
        type: "play",
        frames: [0, 30],
      },
    ],
  };

  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function renderAnimation(width) {
    if (width < 370) {
      return (
        <Lottie
          animationData={knjiga370}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      );
      }else{
      return (
        <Lottie
          animationData={knjiga1152}
          interactivity={interactivity}
          autoPlay={false}
          loop={false}
        />
      );
    }
  }

  return <AnimationWrap>{renderAnimation(windowSize.width)}</AnimationWrap>;
}

export default KnjigaAnimation;
