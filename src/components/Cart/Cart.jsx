import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  const totalPrice = cart.reduce((previousTotal, currentTotal) => previousTotal + currentTotal.price, 0);
  const shippingCharge = cart.reduce((previousShipping, currentShipping) => previousShipping + currentShipping.shipping, 0);
  const tax = (totalPrice * 7) / 100;
  const grandPrice = totalPrice + shippingCharge + tax;

  return (
    <div className="cart">
      <h2 className="text-center pt-7 text-2xl font-medium ">Order Summery</h2>
      <div className="px-6 mt-10 space-y-4">
        <p className="text-xl ">Selected Items: {cart.length}</p>
        <p className="text-xl ">Total Price: ${totalPrice}</p>
        <p className="text-xl ">Total Shipping Charge: ${shippingCharge}</p>
        <p className="text-xl ">Tax: ${tax.toFixed(2)}</p>
        <h3 className="text-2xl font-bold">Grand Total: ${grandPrice.toFixed(2)}</h3>
        <div className="flex flex-col gap-5 ">
          <button className=" mt-16  order-btn bg-btnSecondary ">
            Clear Cart
            <FontAwesomeIcon icon={faTrashCan} className="ml-2" />
          </button>
          <button className=" order-btn bg-btnPrimary ">
            Review Order
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
