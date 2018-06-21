import React from "react";
import Aux from "../../hoc/aux";
import { Link } from "react-router-dom";

const navigation = () => {
  return (
    <Aux>
      <nav className="navBar">
        <div className="container navContainer">
          <h1 className="navBar__logo">
            <Link to="/">(AT)</Link>
          </h1>
          <ul className="navBar__nav container">
            <li className="navBar__nav--item">
              <Link to="/">Home</Link>
            </li>
            <li className="navBar__nav--item">
              <Link to="/work">Work</Link>
            </li>
            <li className="navBar__nav--item">About</li>
            <li className="navBar__nav--item">Contact</li>
          </ul>
        </div>
      </nav>
    </Aux>
  );
};

export default navigation;
