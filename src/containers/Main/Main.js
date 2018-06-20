import React, { Component } from "react";
import Aux from "../../hoc/aux";
import Navigation from "../../components/Navigation/Navigation";
import Home from "../../components/Home/Home";

class Main extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <Home />
      </Aux>
    );
  }
}

export default Main;
