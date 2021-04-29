import React from "react"

function Button({ text, ikona, color, width }) {
  return (
    <div
      style={{
        fontFamily: "Raleway",
        fontSize: "15px",
        // width: "auto",
        border: `1px solid ${color} `,
        padding: "10px 0px 6px ",
        borderRadius: "14px",
        // borderColor: { color },
        display: "flex",
        justifyContent: "center",
        cursor: "pointer",
        width: `${width}px`,
        margin: "0 auto",
      }}
    >
      <div style={{ color: `${color}` }}>{text}</div>
      {ikona && (
        <div style={{ marginLeft: "8px" }}>
          <img src={ikona} alt="cart" />
        </div>
      )}
    </div>
  )
}

export default Button
