import React, { Component } from 'react'

import './ProductCard.css'

export default class ProductCard extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="product-card-container-2">
                <img alt="image" />
                <p className="product-card-title-2">
                    Product Title 
                </p>
                <p className="product-card-category">
                    Category
                </p>
                <p className="product-card-price">
                    $299.99
                </p>
                <div className="product-card-actions">
                    <input type="checkbox" /><span>Compare</span>
                    <button className="product-card-buy-button">Buy now</button>
                </div>

            </div>
        )
    }
}