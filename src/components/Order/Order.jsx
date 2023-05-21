import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, deleteShoppingCart, getShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Order.css";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const { totalProducts } = useLoaderData();

  const totalPage = Math.ceil(totalProducts / itemsPerPage);
  const pageNumbers = [...Array(totalPage).keys()]; // method 2
  const options = [6, 9, 15, 18];

  const handleSelectChange = (e) => {
    setItemsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(0);
  };

  const handlerCartRemove = () => {
    setCart([]);
    deleteShoppingCart();
  };

  // important Product component
  const addToCart = (product) => {
    // const newCart = [...cart, product];
    let newCart = [];
    // if product doesn't exist in the cart ,then set quantity =1
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
    fetch(`http://localhost:5000/products?page=${currentPage}&limit=${itemsPerPage}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [currentPage, itemsPerPage]);
  useEffect(() => {
    // local storage id
    const storeCart = getShoppingCart();
    const ids = Object.keys(storeCart);
    fetch("http://localhost:5000/productsById", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ids),
    })
      .then((res) => res.json())
      .then((cardProduct) => {
        const saveCart = [];
        // Step 1: get id
        for (const id in storeCart) {
          // Step 2: get the products by  using  (id)
          const addedProduct = cardProduct.find((product) => product._id === id);

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
      });
  }, []);

  return (
    <div className="order-container ">
      {/* lg:grid-cols-[4fr_1fr] */}
      <div className="md:px-12 lg:px-28  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4 py-28  ">
        {products.map((product) => (
          <Product product={product} key={product._id} addToCart={addToCart} />
        ))}
      </div>
      <div className="bg-tertiary cart-container">
        <Cart handlerCartRemove={handlerCartRemove} cart={cart}>
          <button type="button" className=" order-btn bg-btnPrimary flex items-center justify-around ">
            Review Order
            <FontAwesomeIcon icon={faArrowRight} className="ml-2 " />
          </button>
        </Cart>
      </div>

      <div className="pagination-container text-center py-10">
        {pageNumbers.map((number) => (
          <button type="button" onClick={() => setCurrentPage(number)} key={number} className={`${currentPage === number && "bg-btnSecondary"} btn bg-btnPrimary border-0 ml-4`}>
            {number + 1}
          </button>
        ))}

        <select className="ml-4 p-2 border rounded-lg text-textColor font-semibold" value={itemsPerPage} onChange={handleSelectChange}>
          {options.map((option) => (
            <option className="font-medium border rounded-lg" key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Order;
