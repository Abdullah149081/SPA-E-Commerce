/* eslint-disable consistent-return */
import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
  try {
    // local Storage
    const storeCart = getShoppingCart();
    const ids = Object.keys(storeCart);
    const res = await fetch("http://localhost:5000/productsById", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ids),
    });
    const product = await res.json();

    const saveCart = [];
    for (const id in storeCart) {
      const addedProduct = product.find((pd) => pd._id === id);
      if (addedProduct) {
        const quantity = storeCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
      }
    }
    return saveCart;
  } catch (err) {
    console.log(err);
  }
};

export default cartProductLoader;
