import React, { Component } from 'react'

import FeaturedContent from './../FeaturedContent/FeaturedContent'

import featuredProducts from '../../assets/featuredProducts'
import featuredRecipes from '../../assets/featuredRecipes'
import productsBanner from '../../assets/featuredProductsBanner'


import './Homepage.css'

export default class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: '',
            lastName: '',
            email: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {

        const { firstName, lastName, email } = this.state


        return (
            <div className="homepage-container">
                <FeaturedContent content={featuredProducts} type="Products" subtitle="Latest & Greatest" />
                <div className="homepage-products-banner" style={{backgroundImage: `url(${productsBanner.img})`}}>
                    <img className="banner-text-image" src={productsBanner.text} />
                </div>
                <FeaturedContent content={featuredRecipes} type="Recipes" subtitle="Depth of Flavor" />
                <div className="newsletter-signup-container">
                    <h2 className="newsletter-signup-header">News & Special Offers</h2>
                    <p className="newsletter-signup-subheader">Sign up to receive fresh news and special offers from All-Clad.</p>
                    <div className="input-container">
                        <input 
                            id="first-name" 
                            name="firstName" 
                            className="newsletter-signup-input"
                            value={firstName}
                            onChange={this.handleChange} 
                            required
                            type="text" 
                        />
                        <label className="input-label" htmlFor="first-name">First Name</label>
                    </div>
                    <div className="input-container">
                        <input 
                            id="last-name" 
                            name="lastName" 
                            className="newsletter-signup-input" 
                            value={lastName}
                            onChange={this.handleChange}
                            required
                            type="text" 
                        />
                        <label className="input-label" htmlFor="last-name">Last Name</label>
                    </div>
                    <div className="input-container">
                        <input 
                            id="email-input" 
                            name="email" 
                            type="email"
                            className="newsletter-signup-input" 
                            value={email}
                            onChange={this.handleChange}
                            required
                            // pattern="[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+.[a-zA-Z]{2,4}"
                            type="text" 
                        />
                        <label className="input-label" htmlFor="email-input">Email</label>
                    </div>
                    <button className="newsletter-signup-button">Sign up</button>
                </div>
            </div>
        )
    }
}