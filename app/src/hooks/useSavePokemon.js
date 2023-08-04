import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'

import { errorHandler } from './../middleware/error.handler'

import { SERVER_API_URL, serverEndpoints } from './../config/env'

export const useSavePokemon = () => {
  const [showLoader, setShowLoader] = useState(false)

  const requestBodyMapper = (pokemon) => {
    return {
      extId: pokemon.id,
      name: pokemon.name,
      baseExperience: pokemon.base_experience,
      height: pokemon.height,
      isDefault: pokemon.is_default,
      order: pokemon.order,
      weight: pokemon.weight,
      locationAreaEncounters: pokemon.location_area_encounters,
      abilities: pokemon.abilities.map((ability) => ({
        isHidden: ability.is_hidden,
        slot: ability.slot,
        ability: ability.ability,
      })),
    }
  }

  const saveData = (pokemon, isComplete) => {
    setShowLoader(true)
    const url = `${SERVER_API_URL}${serverEndpoints.pokemon}`
    const body = isComplete
      ? requestBodyMapper(pokemon)
      : { name: pokemon.name }
    axios
      .post(url, body)
      .then((response) => {
        Swal.fire('Saved!', '', 'success')
        setShowLoader(false)
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          html: errorHandler(error),
        })
        setShowLoader(false)
      })
  }

  return {
    showLoader,
    saveData,
  }
}
