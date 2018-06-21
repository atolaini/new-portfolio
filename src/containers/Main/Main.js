import React, { Component } from "react";
import Aux from "../../hoc/aux";
import Navigation from "../../components/Navigation/Navigation";
import Home from "../../components/Home/Home";
import Work from "../../components/Work/Work";
import { Route } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route exact path="/work" component={Work} />
      </Aux>
    );
  }
}

export default Main;
