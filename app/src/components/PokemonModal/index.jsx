import { Button, Modal, Spinner, Tooltip } from 'flowbite-react'
import { HiDatabase } from 'react-icons/hi'
import { AiOutlineLoading } from 'react-icons/ai'

import { usePokemon } from './../../hooks/usePokemon'
import { useSavePokemon } from './../../hooks/useSavePokemon'

import { Sprites } from './body/Sprites'
import { Abilities } from './body/Abilities'
import { Detail } from './body/Detail'

export const PokemonCard = ({
  pokemon: { name, url },
  openModal,
  setOpenModal,
}) => {
  const { pokemon } = usePokemon(url)
  const { showLoader, saveData } = useSavePokemon()

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
          <Button
            color="success"
            onClick={() => saveData(pokemon, true)}
            disabled={showLoader}
            isProcessing={showLoader}
            processingSpinner={
              <AiOutlineLoading className="h-6 w-6 animate-spin" />
            }
          >
            <HiDatabase className="h-6 w-6" />
          </Button>
        </Tooltip>
      </Modal.Footer>
    </Modal>
  )
}
