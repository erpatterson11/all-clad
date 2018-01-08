import React, { Component } from 'react'

import ProductCard from './ProductCard/ProductCard'
import Button from './../../Buttons/Button/Button'

import product from '../../../assets/featuredProductsBanner';

import './ProductGrid.css'


export default class ProductGrid extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { products, title } = this.props

        const productCards = products.map((prod, i) => (
            <ProductCard prod={prod} key={prod.title + i} />
        ))

        return (
            <div className="product-grid-containter">
                <div className="product-grid-bar">
                    {title}
                </div>
                <div className="product-grid-grid">
                    {productCards}
                </div>
                <Button text="See more" style={{width: 200, margin: 0, marginBottom: 20}} />
            </div>
        )
    }
}