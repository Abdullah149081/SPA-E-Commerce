import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
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
  //important Product component
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
      <div className="bg-tertiary cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
