import { usePokemonData } from "./../hooks/usePokemonData";
export const PokemonCard = ({ pokemon }) => {
  const { pokemonData } = usePokemonData(pokemon.url);

  return <p>{pokemonData && pokemonData.name}</p>;
};
