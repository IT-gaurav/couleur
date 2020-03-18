import React from "react"
// import ColorDesc from "./ColorDesc"



const ColorCircle = ({ colors, color, onChange }) => (
    <div className="outerCircle" onClick={() => onChange(colors)}>
        <div className="circle" style={{ backgroundColor: `${color}` }}></div>
    </div>
)

export default ColorCircle




