import React from 'react';
import ColorCircle from "./ColorCircle"


const NavBar = ({ colors, onChange }) => {

    return (
        <ul className="NavBar" >
            {
                colors.map((col, i) => <ColorCircle key={i} onChange={onChange} colors={col} color={col[0]} />)
            }
        </ul>
    )
}

export default NavBar