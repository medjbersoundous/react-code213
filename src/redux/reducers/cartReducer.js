const initialState = {
  cart: [],
};

// reducer = a function
// it takes:
// 1. state (current data)
// 2. action (what we want to do)

const cartReducer = (state = initialState, action) => {
  // we check action.type
  switch (action.type) {

    case "ADD_TO_CART":

      // we return a new state (never modify old state)

      return {
        // ... means copy old values
        // here we copy the array and add new product

        cart: [...state.cart, action.payload],
      };

    case "REMOVE_FROM_CART":

      return {
        // filter creates a new array, it keeps all items except the one with the index

        cart: state.cart.filter((item, i) => i !== action.payload),
      };

    default:
      // if action type is unknown, return current state
      return state;
  }
};

export default cartReducer;