import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Orders = () => {
  const cart = useLoaderData();

  return (
    <div className="order-container">
      <div className="md:px-12 lg:px-28  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 py-28  ">
        <h1>Order Page: {cart.length}</h1>
      </div>
      <div className="bg-tertiary cart-container rounded-b-lg">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
