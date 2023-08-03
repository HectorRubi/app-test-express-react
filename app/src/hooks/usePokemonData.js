import { useEffect, useState } from "react";

export const usePokemonData = (url) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        console.log({ response });
        return response.json();
      })
      .then((data) => {
        console.log({ data });
        setPokemon(data);
      });
  }, [url]);

  return {
    pokemonData: pokemon,
  };
};
