import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Css/Home.css";
import { useParams } from "react-router-dom";

const Cart = () => {
  let [product, setproduct] = useState([]);

  let {id} = useParams();

  // let [sum,setsum] = useState(0);

  // for (let index = 0; index < product.price; index++) {
  //   const element = product.price[index];
  //   setsum += product.price[index]
  // }

  const handlebuy = () => {
    axios.delete(`http://localhost:5000/cart`)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cart`)
      .then((res) => {
        console.log(res.data);
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="cart-title">
        <h1>Cart</h1>
      </div>
      {product.map((ele) => (
        <div>
          <div className="cart-box">
            <div className="cart-img">
              <img src={ele.image} alt="" />
            </div>
            <div className="cart-text">
              <div className="cart-price">
                <h1>{ele.title}</h1>
                <h3>$ {ele.price * 100}</h3>
              </div>
              <p>{ele.description}</p>
            </div>
            <div>
              <button onClick={handlebuy}>Buy Now</button>
            </div>
          </div>
        </div>
      ))}
      {/* <div>
        {sum}
      </div> */}
    </div>
  );
};

export default Cart;
