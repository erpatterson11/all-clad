import React, { Component } from 'react'


import ExpandableMenu from './AsideExpandableMenu/ExpandableMenu'

import './Aside.css'


export default class Aside extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.items = ["chef's pans", "fry pans", "griddles & grills", "outdoor cookware"]
        this.otherItems = ["b1 hard anodized", "copper core", "d3 stainless", "ha1 hard anodized"]
    }

    render() {



        return (
            <div className="aside-container">
                <div className="aside-header">
                    <p>Filter Products</p>
                    <div></div>
                </div>
                <ExpandableMenu title="cookware" items={this.items} />
                <ExpandableMenu title="collection" items={this.otherItems} />
            </div>
        )
    }
}