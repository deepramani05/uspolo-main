import React from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css";

const Global = () => {
  return (
    <div className="global-main">
      <div className="global-sub">
        <div className="global-box">
          <Link>
            <img
              src="https://uspoloassn.in/cdn/shop/files/13SEP23-Womenswear-TILE4_540x.jpg?v=1695191393"
              alt=""
            />
          </Link>
        </div>
        <div className="global-box">
          <Link>
            <img
              src="https://uspoloassn.in/cdn/shop/files/13SEP23-KidswearTILE4_540x.jpg?v=1695191393"
              alt=""
            />
          </Link>
        </div>
        <div className="global-box">
          <Link>
            <img
              src="https://uspoloassn.in/cdn/shop/files/13SEP23-FootwearTILE5_540x.jpg?v=1695191393"
              alt=""
            />
          </Link>
        </div>
        <div className="global-box">
          <Link>
            <img
              src="https://uspoloassn.in/cdn/shop/files/13SEP23-InnerwearTILE6_540x.jpg?v=1695191393"
              alt=""
            />
          </Link>
        </div>
      </div>
      <button className="shop-btn">Shop All</button>
    </div>
  );
};

export default Global;
