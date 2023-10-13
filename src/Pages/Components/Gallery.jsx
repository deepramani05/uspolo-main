import React from "react";
import "../Css/Home.css";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="gallary-main">
      <div className="gallary-sub">
        <div className="gallary-div">
          <Link to="/polo-shirts">
            <img
              src="https://uspoloassn.in/cdn/shop/files/13SEP23-POLOSHIRTS-TILE1_540x.jpg?v=1695191393"
              alt=""
            />
          </Link>
        </div>
        <div className="gallary-div">
          <Link to="/jeans">
            <img
              src="https://uspoloassn.in/cdn/shop/files/13SEP23-JEANS-TILE2_540x.jpg?v=1695191393"
              alt=""
            />
          </Link>
        </div>
        <div className="gallary-div">
          <Link to="/shirts">
            <img
              src="https://uspoloassn.in/cdn/shop/files/13SEP23-SHIRTS-TILE3_540x.jpg?v=1695191393"
              alt=""
            />
          </Link>
        </div>
        <div className="gallary-div">
          <Link to="/t-shirts">
            <img
              src="https://uspoloassn.in/cdn/shop/files/13SEP23-SHIRTS-TILE3-1_540x.jpg?v=1695191393"
              alt=""
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
