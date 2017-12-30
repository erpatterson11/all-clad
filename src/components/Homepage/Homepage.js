import React, { Component } from 'react'

import FeaturedContent from './../FeaturedContent/FeaturedContent'

import featuredProducts from '../../assets/featuredProducts'
import featuredRecipes from '../../assets/featuredRecipes'


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
                <FeaturedContent content={featuredProducts} type="Products" subtitle="Latest & Greatest" />
                <FeaturedContent content={featuredRecipes} type="Recipes" subtitle="Depth of Flavor" />
                <div>
                    Newsletter signup
                </div>
            </div>
        )
    }
}