import axios from 'axios'
import { useEffect, useState } from 'react'

import { API_URL, endpoints } from './../config/env'

export const usePokemonList = (offset = 0) => {
  const [pokemonList, setPokemonList] = useState([])
  const limit = 10

  useEffect(() => {
    const url = `${API_URL}${endpoints.pokemon}?offset=${offset}&limit=${limit}`
    axios
      .get(url)
      .then((response) => {
        setPokemonList([...response.data.results])
      })
      .catch(() => {
        setPokemonList([])
      })
  }, [offset])

  return {
    pokemonList,
  }
}
