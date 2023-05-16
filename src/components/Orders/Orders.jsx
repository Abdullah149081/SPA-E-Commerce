import { CreditCardIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import OrderItem from "../OrderItem/OrderItem";

const Orders = () => {
  const saveCart = useLoaderData();
  const [cart, setCart] = useState(saveCart);

  const handlerRemove = (id) => {
    const remaining = cart.filter((product) => product._id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  const handlerCartRemove = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="order-container">
      <div className="md:px-12 lg:px-28  grid grid-cols-1  gap-4 py-28  ">
        {cart.map((orderItem) => (
          <OrderItem key={orderItem._id} orderItem={orderItem} handlerRemove={handlerRemove}></OrderItem>
        ))}
      </div>
      <div className="bg-tertiary cart-container rounded-b-lg">
        <Cart cart={cart} handlerCartRemove={handlerCartRemove}>
          <Link to="/proceed-checkout">
            <button className=" order-btn flex items-center justify-around  bg-btnPrimary ">
              Proceed Checkout
              <CreditCardIcon className="h-6 w-6 " />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
