import React from "react"
import ColorCircle from "./ColorCircle"

const ColorDesc = ({ colors }) => {

    return (
        <h2 className="colorDesc" >
            {
                colors.map((e, i) => <ColorCircle key={i} color={e} />)
            }
        </h2>
    )
}

export default ColorDesc