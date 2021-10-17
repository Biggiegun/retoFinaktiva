import React from 'react'

export const Navbar = (props) => {
    return (
        <div id="padreNavbar">
        <img src="./assets/images/MARVEL.png" alt="MARVEL - Logo" />
        {props.form}
        </div>
    )
}
