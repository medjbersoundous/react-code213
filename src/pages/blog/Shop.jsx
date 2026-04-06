import { Outlet, Link } from "react-router-dom";
// we import Outlet and Link from react-router-dom
// Link:
// - used to navigate between pages without reloading the browser
// - changes the URL without refreshing the page

// Outlet:
// - a placeholder component
// - it tells React Router:
//   "display the child route component here"
// - used in nested routing to show the content of child routes
function Shop() {

  return (
    <div>

      <h1>Welcome to the Shop</h1>
      <div style={{ marginBottom: "20px" }}>
        {/* navigates to: /shop/categories */}
        <Link
          to="categories"
          style={{ marginRight: "10px" }}
        >
          Categories
        </Link>
        {/* navigates to: /shop/products/101/phone */}
        {/* 101 = product id */}
        {/* phone = product name */}
        <Link
          to="products/101/phone"
          style={{ marginRight: "10px" }}
        >
          Product 101
        </Link>
        {/* navigates to: /shop/products/102/laptop */}
        <Link to="products/102/laptop">
          Product 102
        </Link>

        {/* these are relative routes
            because we are already inside "/shop"

            so:
            "categories" -> /shop/categories
            "products/101/phone" -> /shop/products/101/phone
        */}

      </div>
      {/* this is where child routes will be displayed */}

      {/* example:
          if URL = /shop/categories
          -> Categories component will appear here

          if URL = /shop/products/101/phone
          -> ProductDetail component will appear here
      */}

      <Outlet />

    </div>
  );
}

export default Shop;