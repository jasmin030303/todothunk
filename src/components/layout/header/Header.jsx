import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <h1>LOGO</h1>

          <div className="header--nav">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/todo"}>Todo</NavLink>
            <NavLink to={"/services"}>Services</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
