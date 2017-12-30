import React, { Component } from 'react'

import ProductCard from './ProductCard/ProductCard'

import './Homepage.css'

export default class Homepage extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="homepage-container">
                <h3 className="featured-section-sub-header">Latest & Greatest</h3>
                <div className="divider-bar-small"></div>
                <h2 className="featured-section-header">Featured Products</h2>
                <div className="card-container">
                    <ProductCard 
                        img='http://cdn.cutleryandmore.com/products/large/35239.jpg' 
                        title="Pan" 
                    />
                    <ProductCard 
                        img='http://cdn.cutleryandmore.com/products/large/35239.jpg' 
                        title="Skillet" 
                    />
                    <ProductCard 
                        img='http://cdn.cutleryandmore.com/products/large/35239.jpg' 
                        title="Metal Thing" 
                    />
                    <ProductCard 
                        img='http://cdn.cutleryandmore.com/products/large/35239.jpg' 
                        title="Pan" 
                    />
                    <ProductCard 
                        img='http://cdn.cutleryandmore.com/products/large/35239.jpg' 
                        title="Skillet" 
                    />
                    <ProductCard 
                        img='http://cdn.cutleryandmore.com/products/large/35239.jpg' 
                        title="Metal Thing" 
                    />
                </div>
                <div>
                    Featured recipes
                </div>
                <div>
                    Newsletter signup
                </div>
            </div>
        )
    }
}