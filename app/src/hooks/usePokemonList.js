import axios from 'axios'
import { useEffect, useState } from 'react'

import { API_URL, endpoints } from './../config/env'

export const usePokemonList = (offset = 0) => {
  const [pokemonList, setPokemonList] = useState([])
  const [tableLoading, setTableLoading] = useState(true)

  const limit = 10

  useEffect(() => {
    const url = `${API_URL}${endpoints.pokemon}?offset=${offset}&limit=${limit}`
    axios
      .get(url)
      .then((response) => {
        setPokemonList([...response.data.results])
        setTableLoading(false)
      })
      .catch(() => {
        setPokemonList([])
        setTableLoading(false)
      })
  }, [offset])

  return {
    pokemonList,
    tableLoading,
  }
}
