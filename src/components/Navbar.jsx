import React from 'react'
import '../styles/navbar.css'

export const Navbar = (props) => {
    return (
        <div id="padreNavbar">
        <img id="iconNavbar" src="./assets/images/MARVEL.png" alt="MARVEL - Logo" />
        {props.form}
        </div>
    )
}
