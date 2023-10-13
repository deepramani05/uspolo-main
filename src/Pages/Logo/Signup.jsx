import axios from "axios";
import React from "react";
import { useState } from "react";
import "../Css/Home.css";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let value = useSelector(store=>store)
  console.log(value.user);
  let dispatch = useDispatch()

  const handleform = (e) => {
    e.preventDefault();

    let data = {
      name: name,
      email: email,
      password: password,
    };

    axios
      .post(`http://localhost:5000/users`, data)
      .then((res) => {
        console.log(res.data);
        alert("user Registered");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="login-div">
        <div className="login-logo">
          <img
            src="https://uspoloassn.in/cdn/shop/files/USPA_Logo_e5e8f319-4b6a-47dd-bd4d-4422173c3ebb_600x.png?v=1660826567"
            alt=""
          />
        </div>
        <div className="login-text">
          <h1>Log In with E-mail ID</h1>
        </div>
        <form onSubmit={handleform} className="login-form">
          <input
            type="text"
            placeholder="Enter your Name"
            required
            onChange={(e) => setName(e.target.value)}
            className="email-inp login-inp"
          />
          <br />
          <input
            type="email"
            placeholder="Enter your E-mail ID"
            required
            onChange={(e) => setEmail(e.target.value)}
            className="email-inp login-inp"
          />
          <br />
          <input
            type="password"
            placeholder="Enter your Password"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="email-inp login-inp"
          />
          <br />
          <div className="check-div">
            <input type="checkbox" className="checkbox" required />
            <p>Save Password !</p>
          </div>
          <input type="submit" className="submit-inp" />
        </form>
      </div>
    </div>
  );
};

export default Signup;
