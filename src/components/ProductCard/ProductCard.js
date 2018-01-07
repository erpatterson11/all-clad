import React from 'react'

import './ProductCard.css'

export default function ProductCard(props) {
    const { img, title, focus, type, onMouseEnter, onMouseLeave } = props

    const isFocused = focus ? "product-card-unfocus" : ''

    return (
        <div 
            className="product-card-container"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            <div 
                className={`product-card-image ${isFocused}`} 
                style={{backgroundImage: `url(${img})`}}
            >
            </div>
            <div className="product-card-text-container">
                <p className="product-card-title">{title}</p>
                <p className="product-card-link-description">View {type}</p>
            </div>
        </div>
        )
    }
    
    
    // <img className="product-card-image" src={img} alt={title} />