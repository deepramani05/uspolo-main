import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../Css/Home.css'
import Swal from "sweetalert2";

const Single = () => {
  let [Data, setdata] = useState("");
  let { id } = useParams();

  console.log(id);

  const hanldeproduct = () =>{

    axios
      .post(`http://localhost:5000/cart`,Data)
      .then((res) => {
        Swal.fire({
          title: 'Your Product Has Been added into your cart',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          }
        })
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setdata(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="single-img-data">
      <img src={Data.image} alt="" />
      <h1>{Data.title}</h1>
      <h3>$ {Data.price * 100}</h3>
      <p>{Data.description}</p>

      <button className="single-cart-btn" onClick={hanldeproduct}>
        Add To Cart
      </button>
    </div>
  );
};

export default Single;
