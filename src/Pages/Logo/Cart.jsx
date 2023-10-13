import axios from "axios";
import React, { useEffect, useState } from "react";

const Cart = () => {
  let [product, setproduct] = useState([]);

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
      {product.map((ele) => (
        <div>
          <div>
            <h1>Cart</h1>
          </div>
          <div>
            <div>
              <img src={ele.image} alt="" />
            </div>
            <div>
              <h1>{ele.title}</h1>
              <h3>$ {ele.price*100}</h3>
              <p>{ele.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
