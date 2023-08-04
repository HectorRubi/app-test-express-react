import axios from 'axios'
import { useEffect, useState } from 'react'

import { API_URL, endpoints } from './../config/env'

// x - f(x) = (x - 1) * 10
const calculateOffset = (x) => (x - 1) * 10

export const usePokemonList = (currentPage) => {
  const [pokemonList, setPokemonList] = useState([])
  const [tableLoading, setTableLoading] = useState(true)
  const [totalPokemons, setTotalPokemons] = useState(0)

  useEffect(() => {
    setTableLoading(true)

    const limit = 10
    const offset = calculateOffset(currentPage)
    const url = `${API_URL}${endpoints.pokemon}?offset=${offset}&limit=${limit}`

    axios
      .get(url)
      .then((response) => {
        setPokemonList([...response.data.results])
        setTotalPokemons(response.data.count)
        setTableLoading(false)
      })
      .catch(() => {
        setPokemonList([])
        setTableLoading(false)
      })
  }, [currentPage])

  return {
    pokemonList,
    tableLoading,
    totalPokemons,
  }
}
