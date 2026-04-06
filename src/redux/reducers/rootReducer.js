import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import cartReducer from "./cartReducer";

// combineReducers merges multiple reducers into one big reducer, this is what we pass to createStore in store.js
// so when you want to add a new reducer, you just import it here and add it to combineReducers, and then create a new key for it in the global state, for example:
//   user: userReducer, this is inside the combineReducers object, so now we can manage user data with userReducer and access it in global state with state.user
const rootReducer = combineReducers({

  // "counter" becomes a key in global state
  // its value is managed by counterReducer
  counter: counterReducer,

  // "cart" becomes another key in global state
  // its value is managed by cartReducer
  cart: cartReducer,
});

// final global state shape will be:
// {
//   counter: { count: 0 },
//   cart: { cart: [] }
// }

export default rootReducer;