import React, { Component } from 'react'


import Button from '../../../Buttons/Button/Button'

import './ProductCard.css'

export default class ProductCard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { img, title, category, price } = this.props.prod
        return (
            <div className="product-card-container-2">
                <div className="product-card-img-container-2">
                    <img className="product-card-img-2" src={img} alt="image" />
                </div>
                <p className="product-card-title-2">
                    {title}
                </p>
                <p className="product-card-category">
                    {category}
                </p>
                <p className="product-card-price">
                    {price}
                </p>
                <div className="product-card-actions">
                    <input type="checkbox" /><span>Compare</span>
                    <Button text="Buy now" flat red onClick={() => ""} />
                </div>

            </div>
        )
    }
}