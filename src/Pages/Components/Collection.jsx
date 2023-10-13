import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/Product-Redux/Action";
import {
  AiOutlineHeart,
  AiOutlineShareAlt,
  AiOutlineStar,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Collection = () => {
  let { isLoading, isError, data } = useSelector(
    (store) => store.ProductReducer
  );
  console.log(isLoading, isError, data);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData);
  }, []);

  return (
    <div className="collection-main">
      {data.map((ele, id) => (
        <div key={id}>
          <div className="collection-sub">
            <div className="collection-box">
              <div className="collection-box-img">
                <div className="collection-img">
                  <img src={ele.image} alt="" />
                </div>
              </div>
              <div className="img-data">
                <Link to={`./${ele.id}`}>
                  <h1>{ele.title}</h1>
                  <span>
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                    <AiOutlineStar />
                  </span>
                  <div className="img-price">
                    <h3>$ {ele.price * 100}</h3>
                    <p>35% OFF</p>
                  </div>
                  <h1>View More ...</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Collection;
