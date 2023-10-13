import React, { useState } from "react";
import Signup from "./Signup";
import Login from "./Login";
import "../Css/Home.css";
import { Link } from "react-router-dom";

const Toggle = () => {
  let [toggle, setToggle] = useState(true);

  return (
    <div className="toggle-main">
      {toggle ? <Login /> : <Signup />}
      <Link>
        <h1 onClick={() => setToggle(!toggle)} className="toggle">
          Log IN / Sign UP ...
        </h1>
      </Link>
    </div>
  );
};

export default Toggle;
