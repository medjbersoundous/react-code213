// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Users from "./pages/home/User";
// import NavBar from "./components/NavBar";
// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/users" element={<Users />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router-dom";
// we import BrowserRouter, Routes, Route from react-router-dom
// react-router-dom is a library used to handle navigation in React apps

// BrowserRouter:
// - it enables routing in the whole app
// - it "watches" the URL in the browser
// - it allows us to change pages without refreshing the browser

// Routes:
// - it is a container that holds all possible routes (pages)
// - it decides which component to display based on the URL

// Route:
// - it defines a single page rule
// - example: "/shop" -> show Shop component

import Shop from "./pages/blog/Shop";
// Shop page component (main shop page)

import Categories from "./pages/blog/Categories";
// Categories page (inside shop)

import ProductDetail from "./pages/blog/ProductDetail";
// Product detail page (dynamic page for a single product)

import Home from "./pages/home/Home";
// Home page (main landing page)

import NavBar from "./components/NavBar";
// Navigation bar (visible on all pages)

import PokemonList from "./components/PokemonList";
// Pokemon list page/component (parent route)

import PokemonDetail from "./components/PokemonDetail";
// Pokemon detail page (dynamic nested route)

/*
This app uses 3 routing concepts:
1. Basic routes -> Home, Shop
2. Nested routes -> Categories inside Shop
3. Dynamic routes -> :id, :name, :pokemonName
*/

function App() {
  return (
    // BrowserRouter wraps the whole app
    // it enables routing system globally
    <BrowserRouter>
      {/* NavBar is outside routes because it will always be visible no matter the page */}
      <NavBar />

      {/* Routes is the container of all page definitions */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* when URL is "/" -> show Home component */}

        <Route path="/shop" element={<Shop />}>
          {/* This is a nested route */}
          {/* it means Categories will be rendered inside shop component */}
          <Route path="categories" element={<Categories />} />
          {/* URL: /shop/categories */}

          {/* This is a dynamic route */}
          {/* :id and :name are URL parameters */}
          {/* example URL: /shop/products/12/iphone */}
          {/* we can read these values using useParams() */}
          <Route path="products/:id/:name" element={<ProductDetail />} />
        </Route>
        <Route path="/pokemons" element={<PokemonList />}>
          {/* nested dynamic route */}
          {/* example URL: /pokemons/pikachu */}
          {/* :name is a dynamic parameter */}
          <Route path=":name" element={<PokemonDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
