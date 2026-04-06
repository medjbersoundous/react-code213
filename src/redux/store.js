import { createStore } from "redux";
// we import createStore from redux
// createStore is a function used to create the global store (the place where all data is stored)

import rootReducer from "./reducers/rootReducer";
// we import rootReducer
// rootReducer is the combination of all reducers (counter + cart in this code)

// rootReducer was created using combineReducers like this:
//
// combineReducers({
//   counter: counterReducer,
//   cart: cartReducer
// })
//
// so the global state will have this structure:
//
// {
//   counter: { count: 0 },
//   cart: { cart: [] }
// }
//
// each key (counter, cart) is managed by its own reducer

// now we create the store
const store = createStore(rootReducer);

// what happens when we call createStore(rootReducer)?

// 1. redux creates the store object (this is the global state container)

// 2. redux calls rootReducer for the first time to initialize the state
//    internally it does something like:
//    rootReducer(undefined, { type: "@@INIT" })
//
//    each reducer returns its initial state:
//
//    counterReducer -> { count: 0 }
//    cartReducer -> { cart: [] }
//
//    so the final state becomes:
//
//    {
//      counter: { count: 0 },
//      cart: { cart: [] }
//    }

// 3. this state is stored inside the store 

// 4. the store also provides functions:

// - store.dispatch(action)
//   sends an action to all reducers
//
//   example:
//   dispatch({ type: "INCREMENT" })
//
//   -> counterReducer will handle it
//   -> cartReducer will ignore it (default case)
//
//   example:
//   dispatch({ type: "ADD_TO_CART", payload: "Laptop" })
//
//   -> cartReducer will handle it
//   -> counterReducer will ignore it

// the store never changes state directly
// it always calls reducers to get the new state


// example:
// dispatch({ type: "INCREMENT" })
//
// -> store calls rootReducer(currentState, action)
// -> rootReducer calls:
//    counterReducer(state.counter, action)
//    cartReducer(state.cart, action)
// -> counterReducer returns updated count
// -> cartReducer returns same cart
// -> redux combines results into new state
//
// new state:
// {
//   counter: { count: 1 },
//   cart: { cart: [] }
// }

// another example:
// dispatch({ type: "ADD_TO_CART", payload: "Laptop" })
//
// -> counterReducer ignores
// -> cartReducer adds "Laptop"
//
// new state:
// {
//   counter: { count: 1 },
//   cart: { cart: ["Laptop"] }
// }

// finally we export the store
export default store;
// so we can pass it to Provider and make redux available in all components