import React from "react";
import Aux from "../../hoc/aux";
import { NavLink } from "react-router-dom";

const navigation = () => {
  return (
    <Aux>
      <nav className="navBar">
        <div className="container navContainer">
          <h1 className="navBar__logo">
            <NavLink to="/" activeClassName="logoActive">
              (AT)
            </NavLink>
          </h1>
          <ul className="navBar__nav container">
            <li className="navBar__nav--item">
              <NavLink to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="navBar__nav--item">
              <NavLink to="/work">Work</NavLink>
            </li>
            <li className="navBar__nav--item">
              <NavLink to="/about">About</NavLink>
            </li>
            <li className="navBar__nav--item">Contact</li>
          </ul>
        </div>
      </nav>
    </Aux>
  );
};

export default navigation;
