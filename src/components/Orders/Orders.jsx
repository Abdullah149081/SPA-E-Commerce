import React from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";
import OrderItem from "../OrderItem/OrderItem";

const Orders = () => {
  const cart = useLoaderData();

  return (
    <div className="order-container">
      <div className="md:px-12 lg:px-28  grid grid-cols-1  gap-4 py-28  ">
        {cart.map((orderItem) => (
          <OrderItem key={orderItem.id} orderItem={orderItem}></OrderItem>
        ))}
      </div>
      <div className="bg-tertiary cart-container rounded-b-lg">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
