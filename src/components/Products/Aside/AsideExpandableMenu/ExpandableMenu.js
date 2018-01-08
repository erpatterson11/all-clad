import React, { Component } from 'react'

import { arrow } from './../../../../assets/svg/uiIcons'
import StyledCheckbox from './../../../StyledCheckbox/StyledCheckbox'

import './ExpandableMenu.css'

export default class ExpandableMenu extends Component {
    constructor(props) {
        super(props)
        this.state = {
            expanded: false
        }

        this.toggleExpand = this.toggleExpand.bind(this)
    }

    toggleExpand() {
        this.setState({expanded: !this.state.expanded})
    }

    render() {

        const { title, items } = this.props
        const { expanded } = this.state

        const renderItems = items.map(item => (
            <div className="expandable-menu-item" key={item}>
                <StyledCheckbox />
                <span> {item}</span>
            </div>
        ))

        const itemsStyle = expanded ? {height: 41.5 * items.length} : {}
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