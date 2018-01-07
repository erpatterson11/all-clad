import React from 'react'

import './Button.css'

const Button = ({text, onClick, red, flat, style = {}}) => {

    console.log(red, flat)

    const isFlat = flat ? "flat-link-button" : "raised-link-button"

    const redBg = red ? `link-button-red` : ""

    return (
    <button 
        className={`link-button ${isFlat} ${redBg}`}
        onClick={onClick}
        style={style}
    >
        {text}
    </button>
    )
}


export default Button