import React from "react";
import Aux from "../../hoc/aux";

const navigation = () => {
  return (
    <Aux>
      <nav className="navBar">
        <div className="container navContainer">
          <h1 className="navBar__logo">(AT)</h1>
          <ul className="navBar__nav container">
            <li className="navBar__nav--item">Home</li>
            <li className="navBar__nav--item">Work</li>
            <li className="navBar__nav--item">About</li>
            <li className="navBar__nav--item">Contact</li>
          </ul>
        </div>
      </nav>
    </Aux>
  );
};

export default navigation;
