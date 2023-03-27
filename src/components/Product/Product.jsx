import React from "react";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, ratings, seller } = props;
  return (
    <>
      <div className="card w-96 h-full  shadow-xl bg-base-100 rounded-lg">
        <img src={img} alt="Shoes" className="rounded-2xl p-2 h-96" />

        <div className="card-body px-4 mt-3">
          <div className="mb-11 h-32 space-y-4">
            {" "}
            <h2 className="card-title text-xl font-bold">{name}</h2>
            <h3 className="text-lg font-semibold ">Price: ${price}</h3>
          </div>
          <div className="text-textColor font-semibold">
            <p>Manufacturer:{seller}</p>
            <p>Rating : {ratings} start</p>
          </div>
        </div>
        <div className="mt-4 ">
          <button className="btn bg-tertiary w-full rounded-b-lg   cart-btn  h-12  font-bold">
            Add to Cart <i class="fa-solid fa-cart-shopping"></i>{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
