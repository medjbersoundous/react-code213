import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

export default function PokemonDetail() {
  // useparams is a hook from react-router-dom, don't forget to install react-router-dom 
  // it allows us to read dynamic values from the url
  // example: /pokemons/pikachu -> name = "pikachu"
  const { name } = useParams();

  // state to store the selected pokemon
  // initial value is null because we don't have data yet
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {

    // we call the api to get one pokemon using its name
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => {
        // when response arrives, we save the pokemon data in state
        // res.data contains the actual pokemon object
        setPokemon(res.data);
      })
      .catch((err) => {
        // if something goes wrong (network error, wrong url...)
        console.error(err);
      });

    // this is async code, so react will display ui first, then update when data arrives

  }, [name]); 
  // dependency array:
  // if user clicks another pokemon, name changes -> effect runs again

  // while waiting for data (async), pokemon is still null
  // so we display a loading message
  if (!pokemon) return <p>loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      {/* now data is available */}

      <h2>{pokemon.name}</h2>

      {/* sprites is an object containing images */}
      <img 
        src={pokemon.sprites.front_default} 
        alt={pokemon.name} 
      />

      {/* displaying some properties */}
      <p>height: {pokemon.height}</p>
      <p>weight: {pokemon.weight}</p>

      {/* link to go back without reloading page */}
      <Link to="/pokemons">back to list</Link>
    </div>
  );
}