import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handlerCartRemove = () => {
    setCart([]);
    deleteShoppingCart();
  };

  //important Product component
  const addToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    //if product doesn't exist in the cart ,then set quantity =1
    const exist = cart.find((pd) => pd.id === product.id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd.id !== product.id);
      newCart = [...remaining, product];
    }

    setCart(newCart);
    addToDb(product.id);
  };

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    //local storage id
    const storeCart = getShoppingCart();
    const saveCart = [];
    //Step 1: get id
    for (const id in storeCart) {
      // Step 2: get the products by  using  (id)
      const addedProduct = products.find((product) => product.id === id);

      if (addedProduct) {
        // Step 3: get quantity of the products
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        // Step:4  add the addedProduct to the saveCart
        saveCart.push(addedProduct);
      }
    }

    // Step  5: Set the cart
    setCart(saveCart);
  }, [products]);

  return (
    <div className="order-container">
      <div className="md:px-12 lg:px-28  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 py-28  ">
        {products.map((product) => (
          <Product product={product} key={product.id} addToCart={addToCart}></Product>
        ))}
      </div>
      <div className="bg-tertiary cart-container">
        <Cart handlerCartRemove={handlerCartRemove} cart={cart}>
          <Link>
            <button className=" order-btn bg-btnPrimary flex items-center justify-around ">
              Review Order
              <FontAwesomeIcon icon={faArrowRight} className="ml-2 " />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
