import { TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import "./OrderItem.css";

const OrderItem = ({ orderItem, handlerRemove }) => {
  const { name, img, price, shipping, _id } = orderItem;

  return (
    <div className="order-item md:h-36">
      <div className=" md:flex   items-center justify-between pr-2 md:pr-8">
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
        <div className="py-5 px-5 md:py-0 md:px-0">
          <TrashIcon onClick={() => handlerRemove(_id)} className="h-12 w-12 cursor-pointer  text-error bg-error bg-opacity-25 p-2 rounded-full"></TrashIcon>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
