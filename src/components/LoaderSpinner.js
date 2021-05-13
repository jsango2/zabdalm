import React from "react"
import Loader from "react-loader-spinner"

export default class LoaderSpinner extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="ThreeDots"
        color="rgba(102, 76, 37, 0.342)"
        height={80}
        width={120}
      />
    )
  }
}
