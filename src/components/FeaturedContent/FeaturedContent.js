import React, { Component } from 'react'

import ProductCard from './../ProductCard/ProductCard'
import Button from './../Buttons/Button/Button'

import './FeaturedContent.css'

export default class FeaturedContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hovered: null
        }
        this.setHovered = this.setHovered.bind(this)
        this.removeHovered = this.removeHovered.bind(this)
    }

    setHovered(item) {
        this.setState({hovered: item})
    }

    removeHovered() {
        this.setState({hovered: null})
    }

    render() {

        const { content, type, subtitle } = this.props
        const { hovered } = this.state

        const products = content.map( item => {
            const focus = hovered ? hovered.title != item.title : null
            return <ProductCard 
                key={item.title}
                img={item.img}
                title={item.title}
                focus={focus}
                onMouseEnter={() => this.setHovered(item)}
                onMouseLeave={this.removeHovered}
            />
        })

        return (
            <div>
                <h3 className="featured-section-sub-header">{subtitle}</h3>
                <div className="divider-bar-small"></div>
                <h2 className="featured-section-header">Featured {type}</h2>
                <div className="card-container">
                {products}
                </div>
                <Button text={`View All ${type}`} />
            </div>
        )
    }
}
