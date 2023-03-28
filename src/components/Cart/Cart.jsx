import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const total = cart.reduce((previousTotal, currentTotal) => previousTotal + currentTotal.price, 0);

  return (
    <>
      <h2 className="text-center pt-7 text-2xl font-medium ">Order Summery</h2>
      <div className="px-6 mt-10 space-y-4">
        <p className="text-xl ">Selected Items: {cart.length}</p>
        <p className="text-xl ">Total Price: ${total}</p>
        <p className="text-xl ">Total Shipping Charge: $5</p>
        <p className="text-xl ">Tax: $114</p>
        <h3 className="text-2xl font-bold">Grand Total: $1559</h3>
      </div>
    </>
  );
};

export default Cart;
