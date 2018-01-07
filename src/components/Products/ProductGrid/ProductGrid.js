import React, { Component } from 'react'

import ProductCard from './ProductCard/ProductCard'

import './ProductGrid.css'


export default class ProductGrid extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="product-grid-containter">
                <div className="product-grid-bar">
                    Skillets
                </div>
                <div className="product-grid-grid">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        )
    }
}