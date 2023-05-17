import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const { totalProducts } = useLoaderData();
  const productsPerPage = 10;

  const totalPage = Math.ceil(totalProducts / productsPerPage);
  const pageNumbers = [...Array(totalPage).keys()];

  const handlerCartRemove = () => {
    setCart([]);
    deleteShoppingCart();
  };

  //important Product component
  const addToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    //if product doesn't exist in the cart ,then set quantity =1
    const exist = cart.find((pd) => pd._id === product._id);
    if (!exist) {
      product.quantity = 1;
      newCart = [...cart, product];
    } else {
      exist.quantity = exist.quantity + 1;
      const remaining = cart.filter((pd) => pd._id !== product._id);
      newCart = [...remaining, product];
    }

    setCart(newCart);
    addToDb(product._id);
  };

  useEffect(() => {
    fetch("http://localhost:5000/products")
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
      const addedProduct = products.find((product) => product._id === id);

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
    <>
      <div className="order-container lg:grid-cols-[4fr_1fr]">
        <div className="md:px-12 lg:px-28  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 py-28  ">
          {products.map((product) => (
            <Product product={product} key={product._id} addToCart={addToCart}></Product>
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

        <div className="pagination-container text-center py-10">
          {pageNumbers.map((number) => (
            <button key={number} className="btn bg-btnPrimary border-0 ml-4">
              {number}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;
