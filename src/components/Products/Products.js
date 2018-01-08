import React, { Component } from 'react'

import ProductGrid from './ProductGrid/ProductGrid'
import Aside from './Aside/Aside'

import ccSkillet from '../../assets/products/cc-skillet.png'
import nsSaucePan from '../../assets/products/ns-sauce-pan.png'
import nsGrillPan from '../../assets/products/ns-grill-pan.png'

import './Products.css'

export default class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        const skillets = [
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

        const pots = [
            {
                title: "Non-Stick Sauce Pan",
                category: "Non-Stick",
                price: "$120.00",
                img: nsSaucePan
            },
            {
                title: "Non-Stick Sauce Pan",
                category: "Non-Stick",
                price: "$120.00",
                img: nsSaucePan
            },
            {
                title: "Non-Stick Sauce Pan",
                category: "Non-Stick",
                price: "$120.00",
                img: nsSaucePan
            },
        ]
        
        const pans = [
            {
                title: "Non-Stick Grill Pan",
                category: "Non-Stick",
                price: "$139.99",
                img: nsGrillPan
            },
            {
                title: "Non-Stick Grill Pan",
                category: "Non-Stick",
                price: "$139.99",
                img: nsGrillPan
            },
            {
                title: "Non-Stick Grill Pan",
                category: "Non-Stick",
                price: "$139.99",
                img: nsGrillPan
            },
        ]

        

        return (
            <div className="products-container">
                <Aside />
                <div className="products-content">
                    <h2 className="product-category-header">Cookware</h2>
                    <p className="product-category-description">All-Clad bonded cookware is handcrafted in Canonsburg, Pennsylvania, with American-made steel--the same way it was four decades ago. It is widely sought after by the world's top chefs and passionate home cooks.</p>
                    <ProductGrid products={skillets} title="skillets" />
                    <ProductGrid products={pots} title="pots" />
                    <ProductGrid products={pans} title="pans" />
                </div>
            </div>
        )
    }
}