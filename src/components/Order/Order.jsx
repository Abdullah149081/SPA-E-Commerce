import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="order-container">
      <div className="md:px-28 grid grid-cols-1 md:grid-cols-3  gap-4 py-28  ">
        {products.map((product) => (
          <Product {...product} key={product.id}></Product>
        ))}
      </div>
      <div className="bg-tertiary">
        <h2 className="text-center pt-7 text-2xl font-medium ">Order Summery</h2>
      </div>
    </div>
  );
};

export default Order;
