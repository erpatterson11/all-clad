import React, { Component } from 'react'

import { facebook, twitter, instagram, pinterest, youtube } from './../../assets/svg/socialicons'

// import  from './../../assets/svg/socialicons'


import './Footer.css'


export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div className="footer-container">
                <h3 className="footer-header">LIKE US. FOLLOW US. PIN US. WATCH US. COOK WITH US!</h3>
                <div className="footer-social-icons">
                    <a className="social-icon" href="https://facebook.com/allclad/" >{facebook}</a>
                    <a className="social-icon" href="https://twitter.com/allclad" >{twitter}</a>
                    <a className="social-icon" href="https://instagram.com/allclad" >{instagram}</a>
                    <a className="social-icon" href="https://pinterest.com/allclad" >{pinterest}</a>
                    <a className="social-icon" href="https://youtube.com/user/allclad" >{youtube}</a>
                </div>
                <div className="footer-divider"></div>
                <div className="footer-extra-links"> 
                    <span className="footer-link">Site Map</span>
                    <span className="footer-link">Where to Buy</span>
                    <span className="footer-link">Careers</span>
                    <span className="footer-link">E-News</span>
                    <span className="footer-link">Privacy Policy</span>
                    <span className="footer-link">Terms of Use</span>
                </div>
            </div>
        )
    }
}
