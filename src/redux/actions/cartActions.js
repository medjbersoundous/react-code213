// action creator = a function that creates an action

export const addToCart = (product) => {

  // product is the value we pass (example: "Laptop")

  return {
    type: "ADD_TO_CART", // this describes what we want to do
    payload: product,    // this is the data
  };
};

export const removeFromCart = (index) => {
  return {
    type: "REMOVE_FROM_CART", // same here, this describes what we want to do
    payload: index, // this is the index of the product we want to remove from cart, we remove with the index because we can have duplicate products in cart, 
    // for example: ["Laptop", "Phone", "Laptop"] if we want to remove one laptop, we can't just say "remove laptop" because which one? the first one or the second one? 
    // so we use index to specify which product to remove
  };
};