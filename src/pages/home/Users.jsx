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

function Users2() {

  return (
    <div>
      <h1>Users Page</h1>
      <div style={{ marginBottom: "20px" }}>

        {/* this navigates to a nested route: /users/list */}
        <Link
          to="list"
          style={{ marginRight: "10px" }}
        >
          User List
        </Link>

        {/* this navigates to /users/1 */}
        <Link to="1">
          User 1
        </Link>

        {/* these are relative paths (not starting with "/")

            because we are already inside /users route,
            so:
            "list" -> /users/list
            "1"    -> /users/1
        */}

      </div>

      {/* Outlet is very important in nested routes */}
      {/* React Router will display the child route component here */}

      {/* example:
          if route is /users/list -> it will display UserList component here
          if route is /users/1 -> it will display UserDetail component here
      */}

      <Outlet />

    </div>
  );
}

export default Users2;