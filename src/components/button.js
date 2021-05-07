import React from "react"

function Button({ text, ikona, color, width }) {
  return (
    <div
      style={{
        fontFamily: "Raleway",
        fontSize: "15px",
        // width: "auto",
        border: `1px solid ${color} `,
        padding: "10px 20px 6px 20px ",
        borderRadius: "14px",
        // borderColor: { color },
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        cursor: "pointer",
        // width: `${width}px`,
        width: "100%",
        // margin: "0 auto",
      }}
    >
      <div style={{ color: `${color}` }}>{text}</div>
      {ikona && (
        <div style={{ marginLeft: "12px", marginRight: "20px" }}>
          <img src={ikona} alt="cart" />
        </div>
      )}
    </div>
  )
}

export default Button
