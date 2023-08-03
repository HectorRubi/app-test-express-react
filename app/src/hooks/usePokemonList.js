import { useEffect, useState } from 'react'

export const usePokemonList = () => {
  const [pokemonList, setPokemonList] = useState([])

  const fetchPokemonList = () => {
    fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=10')
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setPokemonList([...data.results])
      })
      .catch(() => {
        setPokemonList([])
      })
  }

  useEffect(() => {
    fetchPokemonList()
  }, [])

  return {
    pokemonList,
  }
}
