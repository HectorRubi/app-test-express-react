import { PokemonCard } from "./../PokemonCard/index";
import { usePokemonList } from "./../hooks/usePokemonList";

export const PokemonList = () => {
  const { pokemonList } = usePokemonList();
  
  return (
    <div>
      {pokemonList.map((pokemon, index) => {
        return <PokemonCard key={index} pokemon={pokemon} />
      })}
    </div>
  );
};
