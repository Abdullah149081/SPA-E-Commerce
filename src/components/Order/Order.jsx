import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  //important Product component
  const addToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    //if product doesn't exist in the cart ,then set quantity =1
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, product];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    
  }, [products]);

  return (
    <div className="order-container">
      <div className="md:px-12 lg:px-28  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 py-28  ">
        {products.map((product) => (
          <Product product={product} key={product.id} addToCart={addToCart}></Product>
        ))}
      </div>
      <div className="bg-tertiary cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Order;
