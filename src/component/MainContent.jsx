import React from "react"
import ColorDesc from "./ColorDesc"


const MainContent = ({ colors }) => {

    return (


        <div className="mainContent" >
            <ColorDesc className="desc" colors={colors} />
        </div >
    )
}

export default MainContent