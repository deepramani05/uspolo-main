import React from "react";
import "../Css/Home.css";

import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Seller = () => {
  return (
    <div className="seller-main">
      <h1>BEST SELLERS</h1>
      <div className="seller-sub">
        <div className="seller-box">
          <div className="seller-box-img">
            <div className="seller-img">
              <Link>
                <img
                  src="https://uspoloassn.in/cdn/shop/files/4_6f700b9e-19cf-4911-8722-1c17c3cb65d8_540x.jpg?v=1692214793"
                  alt=""
                />
              </Link>
              <div className="img-text">
                <div>
                  <h4>SALE</h4>
                </div>
                <div className="img-icon">
                  <AiOutlineHeart />
                  <AiOutlineShareAlt />
                </div>
              </div>
            </div>
          </div>
          <div className="img-data">
            <h1>Heritage Tipped Polo Shirt</h1>
            <span>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
            <div className="img-price">
              <h3>$1,169</h3>
              <p>35% OFF</p>
            </div>
            <div className="size-button">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
        <div className="seller-box">
          <div className="seller-box-img">
            <div className="seller-img">
              <Link>
                <img
                  src="https://uspoloassn.in/cdn/shop/files/4_36496355-2afa-4c5a-a01e-eae405562047_540x.jpg?v=1692212825"
                  alt=""
                />
              </Link>
              <div className="img-text">
                <div>
                  <h4>SALE</h4>
                </div>
                <div className="img-icon">
                  <AiOutlineHeart />
                  <AiOutlineShareAlt />
                </div>
              </div>
            </div>
          </div>
          <div className="img-data">
            <h1>Heritage Tipped Polo Shirt</h1>
            <span>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
            <div className="img-price">
              <h3>$1,169</h3>
              <p>35% OFF</p>
            </div>
            <div className="size-button">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
        <div className="seller-box">
          <div className="seller-box-img">
            <div className="seller-img">
              <Link>
                <img
                  src="https://uspoloassn.in/cdn/shop/files/6_921ec3c5-9f96-4571-99f6-1414fa9158a9_540x.jpg?v=1692213254"
                  alt=""
                />
              </Link>
              <div className="img-text">
                <div>
                  <h4>SALE</h4>
                </div>
                <div className="img-icon">
                  <AiOutlineHeart />
                  <AiOutlineShareAlt />
                </div>
              </div>
            </div>
          </div>
          <div className="img-data">
            <h1>Heritage Tipped Polo Shirt</h1>
            <span>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
            <div className="img-price">
              <h3>$1,169</h3>
              <p>35% OFF</p>
            </div>
            <div className="size-button">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
        <div className="seller-box">
          <div className="seller-box-img">
            <div className="seller-img">
              <Link>
                <img
                  src="https://uspoloassn.in/cdn/shop/products/1_42ec01bc-f4e9-4d70-8377-51d27644f53b_540x.jpg?v=1679555085"
                  alt=""
                />
              </Link>
              <div className="img-text">
                <div>
                  <h4>SALE</h4>
                </div>
                <div className="img-icon">
                  <AiOutlineHeart />
                  <AiOutlineShareAlt />
                </div>
              </div>
            </div>
          </div>
          <div className="img-data">
            <h1>Heritage Tipped Polo Shirt</h1>
            <span>
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </span>
            <div className="img-price">
              <h3>$1,169</h3>
              <p>35% OFF</p>
            </div>
            <div className="size-button">
              <button>S</button>
              <button>M</button>
              <button>L</button>
              <button>XL</button>
              <button>XXL</button>
            </div>
            <button className="cart-btn">Add to Cart</button>
          </div>
        </div>
      </div>
      <button className="view-btn">View all</button>
    </div>
  );
};

export default Seller;
