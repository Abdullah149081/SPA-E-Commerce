import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const total = cart.reduce((previousTotal, currentTotal) => previousTotal + currentTotal.price, 0);
  const shipping = cart.reduce((previousShipping, currentShipping) => previousShipping + currentShipping.shipping, 0);
  const tax = (total * 7) / 100;
  const totalPrice = total + shipping + tax;

  return (
    <div className="cart">
      <h2 className="text-center pt-7 text-2xl font-medium ">Order Summery</h2>
      <div className="px-6 mt-10 space-y-4">
        <p className="text-xl ">Selected Items: {cart.length}</p>
        <p className="text-xl ">Total Price: ${total}</p>
        <p className="text-xl ">Total Shipping Charge: ${shipping}</p>
        <p className="text-xl ">Tax: ${tax}</p>
        <h3 className="text-2xl font-bold">Grand Total: ${totalPrice}</h3>
      </div>
    </div>
  );
};

export default Cart;
