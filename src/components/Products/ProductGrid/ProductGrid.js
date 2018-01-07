import React, { Component } from 'react'

import ProductCard from './ProductCard/ProductCard'

import './ProductGrid.css'
import product from '../../../assets/featuredProductsBanner';


export default class ProductGrid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { products } = this.props

        const productCards = products.map((prod, i) => (
            <ProductCard prod={prod} key={prod.title + i} />
        ))

        return (
            <div className="product-grid-containter">
                <div className="product-grid-bar">
                    Skillets
                </div>
                <div className="product-grid-grid">
                    {productCards}
                </div>
            </div>
        )
    }
}