import React, { Component } from 'react'

import ProductGrid from './ProductGrid/ProductGrid'

import ccSkillet from '../../assets/products/cc-skillet.png'

import './Products.css'

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        const products = [
            {
                title: "Copper Core Skillet",
                category: "Copper",
                price: "$189.99",
                img: ccSkillet
            },
            {
                title: "Copper Core Skillet",
                category: "Copper",
                price: "$189.99",
                img: ccSkillet
            },
            {
                title: "Copper Core Skillet",
                category: "Copper",
                price: "$189.99",
                img: ccSkillet
            },
    ]

        return (
            <div className="products-container">
                <div className="products-aside">
                    Aside
                </div>
                <div className="products-content">
                    <h2 className="product-category-header">Cookware</h2>
                    <p className="product-category-description">All-Clad bonded cookware is handcrafted in Canonsburg, Pennsylvania, with American-made steel--the same way it was four decades ago. It is widely sought after by the world's top chefs and passionate home cooks.</p>
                    <ProductGrid products={products} />
                </div>
            </div>
        )
    }
}