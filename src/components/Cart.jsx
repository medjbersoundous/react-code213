import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/actions/cartActions";

function Cart() {

  // useSelector is used to read data from redux store
  // state = the global state (all data in redux)

  // state structure looks like this:
  // {
  //   counter: { count: 0 },
  //   cart: { cart: [] }
  // }

  // so: state.cart = the cart reducer
  // state.cart.cart = the array inside it

  const cart = useSelector((state) => state.cart.cart);

  // again, dispatch is used to send actions
  const dispatch = useDispatch();

  return (
    <div>
      <h2>cart items: {cart.length}</h2>

      {cart.map((item, index) => (
        <div key={index}>
          {/* item is a string like "Laptop" */}
          {item}

          <button
            onClick={() => {
              // removeFromCart(index) returns:
              // { type: "REMOVE_FROM_CART", payload: index }

              dispatch(removeFromCart(index));
            }}
          >
            remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;