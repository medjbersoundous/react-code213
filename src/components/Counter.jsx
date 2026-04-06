import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions/counterActions";

function Counter() {

  // read value from redux
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>

      <button
        onClick={() => {
          // increment() returns { type: "INCREMENT" }
          dispatch(increment());
        }}
      >
        +
      </button>

      <button
        onClick={() => {
          // decrement() returns { type: "DECREMENT" }
          dispatch(decrement());
        }}
      >
        -
      </button>
    </div>
  );
}

export default Counter;