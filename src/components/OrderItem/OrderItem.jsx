import React from "react";
import "./OrderItem.css";

const OrderItem = ({ orderItem }) => {
  const { name, img, price, shipping } = orderItem;
  return (
    <div className=" order-item">
      <div>
        <div className="p-2 flex gap-5 items-center ">
          <img className="rounded-lg w-32 h-32" src={img} alt="" />
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-textColor">{name}</h2>
            <p className="font-medium text-textColor">
              Price: <span className="text-btnPrimary">${price}</span>
            </p>
            <p className="font-medium text-textColor">
              Shipping Charge : <span className="text-btnPrimary">${shipping}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
