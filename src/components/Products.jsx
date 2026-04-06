import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";

function Products() {

  // useDispatch is a hook (a special function from react-redux), that you should install react-redux to use it
  // it gives us a function called "dispatch"

  // dispatch is used to send an action to redux
  // imagine it like that: "hey redux, please do something"

  const dispatch = useDispatch();

  return (
    <div>
      <h2>products</h2>

      <button
        onClick={() => {
          // when we click the button:

          // addToCart("Laptop") is a function
          // it RETURNS an object like this:
          // { type: "ADD_TO_CART", payload: "Laptop" }

          const action = addToCart("Laptop");

          // then we send this object to redux using dispatch
          dispatch(action);
        }}
      >
        add laptop
      </button>

      <button
        onClick={() => {
          const action = addToCart("Phone");
          dispatch(action);
        }}
      >
        add phone
      </button>
    </div>
  );
}

export default Products;