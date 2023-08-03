import axios from 'axios'
import { useEffect, useState } from 'react'

export const usePokemon = (url) => {
  const [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    setPokemon(null)
    axios
      .get(url)
      .then((response) => {
        setPokemon(response.data)
      })
      .catch((error) => {
        setPokemon(null)
      })
  }, [url])

  return {
    pokemon,
  }
}
