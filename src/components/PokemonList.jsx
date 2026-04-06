import { useEffect, useState } from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";

function PokemonList() {
  // list of pokemons
  const [pokemons, setPokemons] = useState([]);

  // current page number
  const [page, setPage] = useState(1);

  // number of items per page
  const limit = 8;

  useEffect(() => {
    // pagination concept:
    // api uses "limit" and "offset"
    // limit = how many items, in this case we want 8 pokemons per page
    // offset = where to start, for example: page 1 starts at 0, page 2 starts at 8, page 3 starts at 16, etc

    const offset = (page - 1) * limit;

    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
      .then((res) => {
        // res.data.results contains pokemon list
        setPokemons(res.data.results);
      })
      .catch((err) => console.log(err));

  }, [page]); // re-run when page changes

  return (
    <div style={{ padding: "20px" }}>
      <h1>pokemon list</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "10px" }}>
        {pokemons.map((pokemon, index) => {

          // this api does not give id directly (check in the response)
          // so we calculate it manually
          const id = (page - 1) * limit + index + 1;

          return (
            <Link key={pokemon.name} to={pokemon.name}>
              {/* link is from react-router
                  it changes url without reloading page */}
              
              <div style={{ textAlign: "center", border: "1px solid #ccc" }}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
                  alt={pokemon.name}
                />
                <p>{pokemon.name}</p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* pagination controls */}
      <div style={{ marginTop: "5%", display: "flex", justifyContent: "center" }}>
        
        {/* go to previous page */}
        <button onClick={() => setPage(page - 1)} disabled={page === 1}>
          previous
        </button>

        <span style={{ margin: "0 10px" }}>page {page}</span>

        {/* go to next page */}
        <button onClick={() => setPage(page + 1)}>
          next
        </button>
      </div>

      {/* outlet is used for nested routes
          when we click a pokemon, its detail will appear here */}
      <Outlet />
    </div>
  );
}

export default PokemonList;