import React from "react";
import { useLoaderData } from "react-router-dom";
import Products from "../About/Products/Products";
import "./Product.css";

const Product = () => {
  const data = useLoaderData();
  //   console.log(data);
  //   console.log(data[0].id);
  return (
    <div>
      <div className="user-parent w-75 mx-auto mt-5">
        {data.map((product, idx) => (
          <Products product={product} key={idx}></Products>
        ))}
      </div>
    </div>
  );
};

export default Product;
