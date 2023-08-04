import axios from 'axios'
import Swal from 'sweetalert2'
import { Button, Modal, Spinner, Tooltip } from 'flowbite-react'
import { HiDatabase } from 'react-icons/hi'

import { usePokemon } from '../../hooks/usePokemon'
import { errorHandler } from './../../middleware/error.handler'

import { Sprites } from './body/Sprites'
import { Abilities } from './body/Abilities'
import { Detail } from './body/Detail'

import { SERVER_API_URL, serverEndpoints } from './../../config/env'

export const PokemonCard = ({
  pokemon: { name, url },
  openModal,
  setOpenModal,
}) => {
  const { pokemon } = usePokemon(url)

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

  const saveData = (pokemon) => {
    const url = `${SERVER_API_URL}${serverEndpoints.pokemon}`
    const body = requestBodyMapper(pokemon)
    axios
      .post(url, body)
      .then((response) => {
        Swal.fire('Saved!', '', 'success')
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          html: errorHandler(error),
        })
      })
  }

  return (
    <Modal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
    >
      <Modal.Header>{name.toUpperCase()}</Modal.Header>
      <Modal.Body>
        {pokemon ? (
          <div>
            <Sprites sprites={pokemon.sprites} />

            <Abilities abilities={pokemon.abilities} />

            <div className="flex gap-5 flex-wrap">
              <Detail value={pokemon.weight} name="Weight" />
              <Detail value={pokemon.height} name="Height" />
              <Detail value={pokemon.base_experience} name="Base Experience" />
              <Detail value={pokemon.order} name="Order" />
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center my-20">
            <Spinner aria-label="Loading" size="xl" />
          </div>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Tooltip content="Save in DB">
          <Button color="success" onClick={() => saveData(pokemon)}>
            <HiDatabase className="h-6 w-6" />
          </Button>
        </Tooltip>
      </Modal.Footer>
    </Modal>
  )
}
