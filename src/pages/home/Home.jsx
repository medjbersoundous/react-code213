// import NavBar from "../../components/NavBar";
// import Card from "../../components/Card";
// import { Link } from "react-router-dom";
// import "./Home.css";
// import { useState } from "react";
// export default function Home() {
//   return (
//     <div>
//       <Link to='categories'>go to categories</Link>
//       <h1>welcome to my shop website</h1>
//     </div>
//   );
// }

import { Link } from "react-router-dom";
import Company from "../../components/context/Company";
import CompanyContext from "../../components/context/CompanyContext";
import Demo from "../../components/context/PropDrilling";
import Counter from "../../components/Counter";
import Products from "../../components/Products";
import Cart from "../../components/Cart";
function Home() {
  return (
    <div style={{ padding: "20px" }}>
      {/* <h1>Welcome to Pokémon App</h1>
      <Link to="/pokemons">Go to Pokémons</Link> */}
      {/* <Company />
      <CompanyContext  /> */}
      {/* <Demo /> */}

      {/* <Counter/> */}
      <div>
      <h1>Shopping App</h1>

      <Products />
      <Cart />
    </div>
    </div>
  );
}

export default Home;
