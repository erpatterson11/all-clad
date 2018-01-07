import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'

import Footer from './components/Footer/Footer'

import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <div>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/collections" render={() => "collections"} />
            <Route path="/products" render={() => "products"} />
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

export default connect(mapStateToProps)(App);
