import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { spacing } from "@material-ui/system"
import Typography from "@material-ui/core/Typography"
import Slider from "@material-ui/core/Slider"

const useStyles = makeStyles({
  root: {
    width: 400,
    marginLeft: 30,
  },
  title: {
    marginBottom: 40,
  },
  valueLabel: {
    fontSize: "0.8rem",
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

  return (
    <div className={classes.root}>
      <Typography id="range-slider" className={classes.title}>
        Godina
      </Typography>
      <Slider
        value={value}
        onChangeCommitted={handleChangeGodinaDelayed}
        onChange={handleChangeGodina}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        min={1889}
        max={1970}
      />
    </div>
  )
}
