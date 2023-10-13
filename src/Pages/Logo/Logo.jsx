import React from "react";
import "../Css/Logo.css";
import { Link } from "react-router-dom";

import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const Logo = () => {
  return (
    <div className="main">
      <div className="logo-main">
        <div className="search">
          <div className="searchbar">
            <input type="text" placeholder="Search" />
            <button>
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        <div className="logo">
          <div className="logo-sub">
            <Link to="/">
              <img
                src="https://uspoloassn.in/cdn/shop/files/USPA_Logo_e5e8f319-4b6a-47dd-bd4d-4422173c3ebb_600x.png?v=1660826567"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="icons">
          <div>
            <Link to="/watchlist">
              <AiOutlineHeart />
            </Link>
          </div>
          <div>
            <Link to="/cart">
              <AiOutlineShoppingCart />
            </Link>
          </div>
          <div>
            <Link to="/loginpage">
              <AiOutlineUser />
            </Link>
          </div>
        </div>
      </div>
      <hr className="hr" />
    </div>
  );
};

export default Logo;
