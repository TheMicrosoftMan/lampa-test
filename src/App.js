import React from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "./containers/Home";
import { Cart } from "./containers/Cart";

import { Header } from "./components/Header";

const App = ({ cart }) => {
  return (
    <Router>
      <div className="App">
        <Header
          count={cart.cart.length}
          price={cart.cart.reduce(
            (accumulator, currentValue) => accumulator + currentValue.price,
            0
          )}
        />
        <main>
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </main>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => state;

const connectedApp = connect(mapStateToProps, null)(App);

export { connectedApp as App };
