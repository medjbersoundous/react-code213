import { useParams } from "react-router-dom";
// useParams allows us to read dynamic parts of the URL
// example route: /products/:id/:name
// example URL: /products/12/iphone

function ProductDetail() {
  // useParams returns all dynamic values from the URL
  // in this case we expect:
  // - id
  // - name

  const { id, name } = useParams();
  // we extract both values from the URL
  // id -> product identifier
  // name -> product name (string from URL)

  return (
    <div>
      {/* page title */}
      <h2>Product Details</h2>

      {/* dynamic data coming from URL */}
      <p>Product ID: {id}</p>
      <p>Product name: {name}</p>

      {/*  this component is "dynamic"
          meaning it changes based on the URL

          example:
          /products/1/iphone -> shows iPhone
          /products/2/macbook -> shows MacBook
      */}
    </div>
  );
}

export default ProductDetail;
