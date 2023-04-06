import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./Product.css";

const Product = (props) => {
  console.log("products",props);
  const { img, name, price, ratings, seller } = props.product;
  const addToCart = props.addToCart;

  return (
    <>
      <div className="card w-full h-full  shadow-xl bg-base-100 rounded-lg">
        <img src={img} alt={name} className="rounded-2xl p-2 h-96 w-full" />

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
          {/* important */}
          <button onClick={() => addToCart(props.product)} className="btn bg-tertiary w-full rounded-b-lg   cart-btn  h-12  font-bold">
            Add to Cart <FontAwesomeIcon icon={faCartShopping} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
