import { getShoppingCart } from "../utilities/fakedb";

const cartProductLoader = async () => {
  try {
    const res = await fetch("http://localhost:5000/products");
    const product = await res.json();

    // local Storage
    const storeCart = getShoppingCart();
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
