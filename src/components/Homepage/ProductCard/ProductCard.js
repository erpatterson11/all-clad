import React from 'react'

import './ProductCard.css'

export default function ProductCard(props) {
    const { img, title } = props
    return (
        <div className="product-card-container">
            <div className="product-card-image-container">
                <a>
                    <img className="product-card-image" src={img} alt={title} />
                </a>
            </div>
            <p className="product-card-title">{title}</p>
        </div>
    )
}