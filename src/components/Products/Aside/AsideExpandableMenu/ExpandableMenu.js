import React, { Component } from 'react'

import { arrow } from './../../../../assets/svg/uiIcons'
import StyledCheckbox from './../../../StyledCheckbox/StyledCheckbox'

import './ExpandableMenu.css'

export default class ExpandableMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false,
            checked: []
        }

        this.toggleExpand = this.toggleExpand.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
    }

    toggleExpand() {
        this.setState({expanded: !this.state.expanded})
    }

    handleCheck(item) {
        if (this.isChecked(item)) {
            const filtered = this.state.checked.filter(val => val !== item)
            this.setState({checked: filtered})
        } else {
            const newChecked = [...this.state.checked, item]
            this.setState({checked: newChecked})
        }
    }

    isChecked(item) {
        return this.state.checked.includes(item)
    }

    render() {

        const { title, items } = this.props
        const { expanded } = this.state

        const renderItems = items.map(item => (
            <div className="expandable-menu-item" key={item} onClick={() => this.handleCheck(item)}>
                <StyledCheckbox label={item} checked={this.isChecked(item)} />
            </div>
        ))

        const itemsStyle = expanded ? {height: 50 * items.length} : {}
        const arrowStyle = expanded ? {transform: "rotate(90deg)"} : {}

        return (
            <div className="expandable-menu-container">
                <div className="expandable-menu-button" onClick={this.toggleExpand}>
                    <span>{title}</span><span style={arrowStyle}>{arrow}</span>
                </div>  
                <div className="expandable-menu-items-container" style={itemsStyle}>
                    {renderItems}
                </div>
            </div>
        )
    }
}