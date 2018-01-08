import React, { Component } from 'react'

import { CheckBox, checkBoxEmpty } from './../../assets/svg/uiIcons'

import './StyledCheckbox.css'

class StyledCheckbox extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({checked: !this.state.checked})
    }

    render() {
        const { checked } = this.state
        return (
            <div onClick={this.handleClick} className="styled-checkbox-container">
                {checkBoxEmpty}
                <CheckBox open={checked} />
            </div>
        )
    }
}


export default StyledCheckbox