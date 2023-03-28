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
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="order-container">
      <div className="md:px-28 grid grid-cols-1 md:grid-cols-3  gap-4 py-28  ">
        {products.map((product) => (
          <Product {...product} key={product.id} addToCart={addToCart}></Product>
        ))}
      </div>
      <div className="bg-tertiary">
        <h2 className="text-center pt-7 text-2xl font-medium ">Order Summery</h2>
        <div className="px-6 mt-10 space-y-4">
          <p className="text-xl ">Selected Items: {cart.length}</p>
          <p className="text-xl ">Total Price: $1140</p>
          <p className="text-xl ">Total Shipping Charge: $5</p>
          <p className="text-xl ">Tax: $114</p>
          <h3></h3>
        </div>
      </div>
    </div>
  );
};

export default Order;
