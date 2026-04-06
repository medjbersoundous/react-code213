const initialState = { count: 0 };

const counterReducer = (state = initialState, action) => {

  switch (action.type) {

    case "INCREMENT":
      // increase count by 1, here we don't do ...state because we only have one value in state, but if we had more values, we would need to copy the old state and update only the count
      return { count: state.count + 1 };

    case "DECREMENT":
      // decrease count by 1
      return { count: state.count - 1 };

    default:
      return state;
  }
};

export default counterReducer;