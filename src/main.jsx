import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// we import Provider from react-redux
// provider is the bridge between react and redux
// it allows all react components to access the redux store
import { Provider } from "react-redux";

// we import the store we created
// the store contains all global state (counter, cart, etc)
import store from "./redux/store";
createRoot(document.getElementById("root")).render(

  // strictmode is a react tool for development (not related to redux)
  <StrictMode>
    {/* provider wraps the whole app */}
    <Provider store={store}>
      {/* we pass the store as a prop to provider */}
      {/* now every component inside <App /> can access redux */}

      {/* thanks to provider, we can use: */}
      {/* - useSelector() -> to read data from store */}
      {/* - useDispatch() -> to send actions */}

      {/* without provider, redux will not work in components */}

      {/* provider makes the store available globally */}

      <App />
    </Provider>

  </StrictMode>,
);