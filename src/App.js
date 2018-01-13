import React, { Component } from 'react';

import { Switch, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './components/Navbar/Navbar'
import ProductDetails from './components/ProductDetails/ProductDetails'
import Products from './components/Products/Products'
import Homepage from './components/Homepage/Homepage'

import Footer from './components/Footer/Footer'

import './App.css'

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/collections" render={() => "collections"} />
            <Route path="/details" component={ProductDetails} />
            <Route path="/products" component={Products} />
            <Route path="/recipes" render={() => "recipes"} />
            <Route path="/registry" render={() => "registry"} />
            <Route path="/chefs" render={() => "chefs"} />
            <Route path="/about" render={() => "about"} />
            <Route path="/customer-service" render={() => "customer service"} />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.reducer
}

export default withRouter(connect(mapStateToProps)(App))
