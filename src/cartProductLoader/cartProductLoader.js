const cartProductLoader = async () => {
  try {
    const res = await fetch("products.json");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default cartProductLoader;
