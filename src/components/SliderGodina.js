import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"

import Slider from "@material-ui/core/Slider"
import { useWindowSize } from "../components/useWindowSize"

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    // paddingRight: "10px",
    width: "45%",
    height: "51%",
    // top: "100px",
    // right: "30px",
    margin: "10px auto 0 10px",
    "@media (max-width: 630px)": {
      width: "85vw",
      margin: "40px auto",
      height: "35%",
    },
  },
  title: {
    position: "relative",
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center",
    zIndex: "1",
    top: "-7px",

    color: "#7b7b7b",
  },
})

function valuetext(value) {
  return `${value}year`
}

export default function SliderGodina({
  handleChangeGodina,
  value,
  handleChangeGodinaDelayed,
}) {
  const classes = useStyles()
  // const [orientationSlidera, setOrientationSlidera] = useState("vertical")
  // const size = useWindowSize()
  // useEffect(() => {
  //   size.width < 700
  //     ? setOrientationSlidera("horizontal")
  //     : setOrientationSlidera("vertical")
  //   console.log(orientationSlidera, size)
  // }, [size])
  return (
    <div className={classes.root}>
      <Slider
        orientation="horizontal"
        value={value}
        onChangeCommitted={handleChangeGodinaDelayed}
        onChange={handleChangeGodina}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={1889}
        max={1970}
      />{" "}
      {/* <Typography id="range-slider" className={classes.title}>
        Godina
      </Typography> */}
    </div>
  )
}
