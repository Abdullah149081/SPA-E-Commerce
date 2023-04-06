import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderItem from "../OrderItem/OrderItem";

const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);

  const handlerRemove = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };

  return (
    <div className="order-container">
      <div className="md:px-12 lg:px-28  grid grid-cols-1  gap-4 py-28  ">
        {cart.map((orderItem) => (
          <OrderItem key={orderItem.id} orderItem={orderItem} handlerRemove={handlerRemove}></OrderItem>
        ))}
      </div>
      <div className="bg-tertiary cart-container rounded-b-lg">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
