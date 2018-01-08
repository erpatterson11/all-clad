import React, { Component } from 'react'

import { CheckBox, checkBoxEmpty } from './../../assets/svg/uiIcons'

import './StyledCheckbox.css'

export default function StyledCheckbox ({ checked = false, onClick, label = "" }) {
        return (
            <div onClick={onClick} className="styled-checkbox-container">
                {checkBoxEmpty}
                <CheckBox open={checked} />
                <span className="styled-checkbox-label">{label}</span>
            </div>
        )
    }

