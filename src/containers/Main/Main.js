import React, { Component } from "react";
import Aux from "../../hoc/aux";
import Navigation from "../../components/Navigation/Navigation";
import Home from "../../components/Home/Home";
import Work from "../../components/Work/Work";

class Main extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        {/* <Home /> */}
        <Work />
      </Aux>
    );
  }
}

export default Main;
