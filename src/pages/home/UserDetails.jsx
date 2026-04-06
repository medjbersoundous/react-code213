import { useParams } from "react-router-dom";
// we import useParams from react-router-dom
// useParams is a hook used to read dynamic values from the URL
// example URL: /users/5
// here "5" is a parameter we can access using useParams()

function UserDetail() {

  // useParams returns an object containing all URL parameters
  // example:
  // if route is /users/:id
  // and URL is /users/10
  // then useParams() returns:
  // { id: "10" }

  const { id } = useParams();
  // we destructure "id" from the object returned by useParams
  // now we can use "id" directly inside our component

  return (
    <div>

      {/* simple title showing this is a detail page */}
      <h2>User Details</h2>

      {/* we display the dynamic value from the URL */}
      <p>User ID: {id}</p>

      {/* this value comes directly from the URL, not from state, not from props but from the route itself
      */}

    </div>
  );
}

export default UserDetail;