import React from "react";
import { Link } from "react-router-dom";
import "../Css/Nav.css";
import Ad from '../Sliders/Ad'
import Logo from '../Logo/Logo'


const Nav = () => {
  return (
    <div>
      <div>
        <Ad/>
        <Logo/>
      </div>
      <div className="nav-main">
        <Link className="nav-a" to="/newarrivals">
          <h3>NEW ARRIVALS</h3>
        </Link>
        <Link className="nav-a" to="/collections">
          <h3>COLLECTIONS</h3>
        </Link>
        <Link className="nav-a" to="/men">
          <h3>MEN</h3>
        </Link>
        <Link className="nav-a" to="/women">
          <h3>WOMEN</h3>
        </Link>
        <Link className="nav-a" to="/footwear">
          <h3>FOOTWEAR</h3>
        </Link>
        <Link className="nav-a" to="/innerwear">
          <h3>INNERWEAR</h3>
        </Link>
        <Link className="nav-a" to="/kids">
          <h3>KIDS</h3>
        </Link>
        <Link className="nav-a" to="/sale">
          <h3>SALE</h3>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
