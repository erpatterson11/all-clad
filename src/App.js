import React, { Component } from 'react';

import { Switch, Route } from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => "Home"} />
          <Route path="/collections" render={() => "collections"} />
          <Route path="/products" render={() => "products"} />
          <Route path="/recipes" render={() => "recipes"} />
          <Route path="/registry" render={() => "registry"} />
          <Route path="/chefs" render={() => "chefs"} />
          <Route path="/about" render={() => "about"} />
          <Route path="/customer-service" render={() => "customer service"} />
        </Switch>
      </div>
    );
  }
}

export default App;
