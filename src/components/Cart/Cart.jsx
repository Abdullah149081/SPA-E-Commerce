import { faArrowRight, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Cart.css";

const Cart = ({ cart, handlerCartRemove }) => {
  // const totalPrice = cart.reduce((previousTotal, currentTotal) => previousTotal + currentTotal.price, 0);

  let totalPrice = 0;
  let shippingCharge = 0;
  let quantity = 0;
  for (const product of cart) {
    // Method : 1
    // if (product.quantity === 0) {
    //   product.quantity = 1;
    // }

    //  Method :2
    // product.quantity = product.quantity || 1;
    totalPrice = totalPrice + product.price * product.quantity;
    shippingCharge = shippingCharge + product.shipping;
    quantity = quantity + product.quantity;
  }

  const tax = (totalPrice * 7) / 100;
  const grandPrice = totalPrice + shippingCharge + tax;

  return (
    <div className="cart">
      <h2 className="text-center pt-7 text-2xl font-medium ">Order Summery</h2>
      <div className="px-6 mt-10 space-y-4">
        <p className="text-xl ">Selected Items: {quantity}</p>
        <p className="text-xl ">Total Price: ${totalPrice}</p>
        <p className="text-xl ">Total Shipping Charge: ${shippingCharge}</p>
        <p className="text-xl ">Tax: ${tax.toFixed(2)}</p>
        <h3 className="text-2xl font-bold">Grand Total: ${grandPrice.toFixed(2)}</h3>
        <div className="flex flex-col gap-5 ">
          <button onClick={handlerCartRemove} className=" mt-16  order-btn bg-btnSecondary ">
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
