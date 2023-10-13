import React from "react";
import { Link } from "react-router-dom";
import "../Css/Home.css";

import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-sub">
        <div className="footer-text">
          <div className="footer-policy">
            <h1>Policies</h1>
            <Link>
              <p>Terms & Conditions</p>
            </Link>
            <Link>
              <p>Delivery & Shipping</p>
            </Link>
            <Link>
              <p>Return Policy</p>
            </Link>
            <Link>
              <p>Privacy Policy</p>
            </Link>
            <Link>
              <p>Frequently Asked Questions</p>
            </Link>
          </div>
          <div className="footer-help">
            <h1>Let Us Help You</h1>
            <Link>
              <p>Contct Us</p>
            </Link>
          </div>
          <div className="footer-about">
            <h1>About Us</h1>
            <Link>
              <p>Our Story</p>
            </Link>
          </div>
        </div>
        <div className="footer-follow">
          <div className="footer-icon">
            <h1>Follow Us</h1>
            <Link>
              <AiFillInstagram />
            </Link>
            <Link>
              <AiFillFacebook />
            </Link>
            <Link>
              <AiFillYoutube />
            </Link>
            <Link>
              <AiOutlineTwitter />
            </Link>
          </div>
          <div className="footer-inp">
            <h1>Connect</h1>
            <p>Join our mailing list for updates</p>
            <div className="inp">
              <input type="text" placeholder="Enter E-mail Address" />
              <button>Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
