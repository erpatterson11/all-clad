import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import './StyledLink.css'


export default class StyledLink extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hover: false
        }
    }


    render() {
        const { to, children } = this.props
        const { hover } = this.state

        const style = hover ? {width: '100%'} : {}

        return (
            <div 
                className="styled-link-container" 
                onMouseEnter={()=>this.setState({hover: true})}
                onMouseLeave={()=>this.setState({hover: false})}
            >
                <Link className="styled-link" to={to}>{children}</Link>
                <div className="styled-link-hover-bar" style={style}></div>
            </div>
        )
    }
}