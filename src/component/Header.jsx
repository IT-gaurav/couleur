import React from "react"

import NavBar from './NavBar';




const Header = ({ colors, onChange }) => {




    return (
        <header>
            <h1>This is Header</h1>
            <NavBar colors={colors} onChange={onChange} />
        </header>
    )

}

export default Header