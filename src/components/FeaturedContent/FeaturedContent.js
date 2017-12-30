import React, { Component } from 'react'

import ProductCard from './../ProductCard/ProductCard'


import './FeaturedContent.css'

export default class FeaturedContent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        const { content, type, subtitle } = this.props

        const products = content.map( item => {
            return <ProductCard 
                key={item.title}
                img={item.img}
                title={item.title}
            />
        })

        return (
            <div>
                <h3 className="featured-section-sub-header">{subtitle}</h3>
                <div className="divider-bar-small"></div>
                <h2 className="featured-section-header">Featured {type}</h2>
                <div className="card-container">
                {products}
                </div>
                <button className="link-button">View All {type}</button>
            </div>
        )
    }
}