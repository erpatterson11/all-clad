import React, { Component } from 'react'

import ProductImgCarousel from './ProductImgCarousel/ProductImgCarousel'

import './ProductDetails.css'

export default class ProductDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="product-details-container">
                <ProductImgCarousel />
            </div>
        )
    }
}