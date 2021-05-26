import React, { useEffect, useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { spacing } from "@material-ui/system"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"
import { useWindowSize } from "../components/useWindowSize"

const useStyles = makeStyles({
  root: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    // paddingRight: "10px",
    width: "95%",
    height: "84%",
    // top: "100px",
    // right: "30px",
    margin: "5px auto 0 auto",
    // "@media (max-width: 750px)": {
    //   width: "85%",
    // },
  },
  title: {
    position: "relative",
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center",
    zIndex: "1",
    top: "-7px",

    color: "#664F3E",
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
  const [orientationSlidera, setOrientationSlidera] = useState("vertical")
  const size = useWindowSize()
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
      <Typography id="range-slider" className={classes.title}>
        Godina
      </Typography>
    </div>
  )
}
