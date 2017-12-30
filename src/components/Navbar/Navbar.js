import React, { Component } from 'react'

import { withRouter, Link } from 'react-router-dom'
import logo from '../../assets/allclad-logo-light.png'

import StyledLink from '../StyledLink/StyledLink'

import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link to="/">
                    <img className="navbar-logo" src={logo} />
                </Link>
                <div className="navbar-link-container">
                    <StyledLink to="/collection">Collection</StyledLink>
                    <StyledLink to="/products">Products</StyledLink>
                    <StyledLink to="/recipes">Recipes</StyledLink>
                    <StyledLink to="/registry">Registry</StyledLink>
                    <StyledLink to="/chefs">Chefs</StyledLink>
                    <StyledLink to="/about">About</StyledLink>
                    <StyledLink to="/customer-service">Customer Service</StyledLink>
                </div>
            </div>
        )
    }
}

// <Link to="/collection">Collections</Link>
// <Link to="/products">Products</Link>
// <Link to="/recipes">Recipes</Link>
// <Link to="/registry">Registry</Link>
// <Link to="/chefs">Chefs</Link>
// <Link to="/about">About</Link>
// <Link to="/cutsomer-service">Customer Service</Link>


export default withRouter(Navbar)