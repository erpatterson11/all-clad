import React from 'react'

import './ProductCard.css'

export default function ProductCard(props) {
    const { img, title } = props
    return (
        <div className="product-card-container">
            <div 
                className="product-card-image" 
                style={{backgroundImage: `url(${img})`}}
            >
            </div>
            <p className="product-card-title">{title}</p>
        </div>
        )
    }
    
    
    // <img className="product-card-image" src={img} alt={title} />