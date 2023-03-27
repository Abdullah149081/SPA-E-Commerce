import React, { useEffect, useState } from "react";
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
      <div className="md:px-28">
        <p>Product Coming Here:{products.length}</p>
      </div>
      <div className="bg-tertiary">
        <h2 className="text-center pt-7 text-2xl font-medium">Order Summery</h2>
      </div>
    </div>
  );
};

export default Order;
