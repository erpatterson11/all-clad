import React, { Component } from 'react'

import chefsPan from './../../../assets/products/cc-chefs-pan.png'
import saucePan from './../../../assets/products/cc-sauce-pan.png'
import skillet from './../../../assets/products/cc-skillet.png'
import ssSkillet from './../../../assets/products/ss-skillet-l.png'
import wok from './../../../assets/products/ss-wok.png'

import { arrow } from './../../../assets/svg/uiIcons'

import "./ProductImgCarousel.css"

const images =  [chefsPan, saucePan, skillet, ssSkillet, wok, saucePan, wok, chefsPan, skillet, ssSkillet, wok, saucePan, wok, chefsPan]

export default class ProductImgCarousel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images:images,
            scrollable: images.length > 4,
            chosenImageIndex: 0,
            minScrollIndex: 0,
            carouselStyle: {},
            indexLeft: 0,
            transform: 0,
            showScrollRight: "initial",
            showScrollLeft: "none"
        }
        this.setChosenImage = this.setChosenImage.bind(this)
        this.move = this.move.bind(this)
    }

    setChosenImage(i) {
        this.setState({chosenImageIndex: i})
    }

    move(dir) {
        const imageCardWidth = 120
        let windowCapacity = ~~(this.carousel.clientWidth / imageCardWidth)
        let remainingRight = this.state.images.length - this.state.indexLeft - windowCapacity
        if (dir == "right") {

            // Right
            let stepsLeft = windowCapacity >= remainingRight ? remainingRight : windowCapacity
            let transform = this.state.transform - stepsLeft
            let newIndexLeft = this.state.indexLeft + stepsLeft
            let showScrollRight = newIndexLeft !== this.state.images.length - windowCapacity ? "initial" : "none"
            let carouselStyle = {transform: `translateX(${transform * imageCardWidth}px)`}
            this.setState({
                carouselStyle, 
                indexLeft: newIndexLeft, 
                transform,
                showScrollRight,
                showScrollLeft: "initial"
            })

        } else {

            // Left
            let stepsRight = this.state.indexLeft < windowCapacity ? this.state.indexLeft : windowCapacity
            let transform = this.state.transform + stepsRight
            let newIndexLeft = this.state.indexLeft - stepsRight
            let showScrollLeft = newIndexLeft ? "initial" : "none"

            let carouselStyle = {transform: `translateX(${transform * imageCardWidth}px)`}
            this.setState({
                carouselStyle, 
                indexLeft: newIndexLeft, 
                transform,
                showScrollLeft,
                showScrollRight: "initial"
            })
        }
    } 

    render() {

        const { images, chosenImageIndex, scrollable } = this.state

        const selectedImage = images[chosenImageIndex]
        const imageCards = images.map( (img,i) => {
            const selected = (i == chosenImageIndex) ? {border: "1px solid red"} : {}
            return (
                <div
                    key={i} 
                    className="p-i-c-image"
                    style={{backgroundImage: `url(${img})`, ...selected}}
                    onClick={() => this.setChosenImage(i)}
                ></div>
            )
        })

        return (
            <div className="product-img-carousel">
                <div className="product-img-carousel-img-container"  style={{backgroundImage: `url(${selectedImage})`}}>
                </div>
                <div className="product-img-carousel-carousel">
                    <div className="product-img-carousel-button" data-clickable={scrollable} data-left onClick={()=>this.move("left")}>
                        {arrow}
                    </div>
                    <div className="image-carousel-container">    
                        <div className="image-carousel-content" ref={ref => this.carousel = ref} style={this.state.carouselStyle} >
                            {imageCards}
                        </div>
                    </div>
                    <div className="product-img-carousel-button button-right" data-clickable={scrollable} onClick={()=>this.move("right")}>
                        {arrow}
                    </div>
                </div>
            </div>    
        )
    }
}