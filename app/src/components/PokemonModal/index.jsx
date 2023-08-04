import { Button, Modal, Spinner, Tooltip, Badge, Rating } from 'flowbite-react'
import { HiDatabase } from 'react-icons/hi'
import { usePokemon } from '../../hooks/usePokemon'

export const sprites = [
  'back_default',
  'back_female',
  'back_shiny',
  'back_shiny_female',
  'front_default',
  'front_female',
  'front_shiny',
  'front_shiny_female',
]

export const PokemonCard = ({
  pokemon: { name, url },
  openModal,
  setOpenModal,
}) => {
  const { pokemon } = usePokemon(url)

  return (
    <Modal
      show={openModal === 'default'}
      onClose={() => setOpenModal(undefined)}
    >
      <Modal.Header>{name.toUpperCase()}</Modal.Header>
      <Modal.Body>
        {pokemon ? (
          <div>
            <div className="w-full mb-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sprites:
              </h3>
              <div className="flex overflow-x-scroll">
                {sprites.map(
                  (sprite, key) =>
                    pokemon.sprites[sprite] && (
                      <img
                        key={key}
                        src={pokemon.sprites[sprite]}
                        alt="avatar"
                        width="200"
                        className=""
                      />
                    )
                )}
              </div>
            </div>
            <div className="mb-10">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Abilities:
              </h3>
              <div className="flex gap-2">
                {pokemon.abilities.map((ability, key) => (
                  <Badge key={key} color="info">
                    {ability.ability.name}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex gap-5 flex-wrap">
              <Rating>
                <Rating.Star />
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  {pokemon.weight}
                </p>
                <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                <p className="text-sm font-medium text-gray-900 underline dark:text-white">
                  Weight
                </p>
              </Rating>

              <Rating>
                <Rating.Star />
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  {pokemon.height}
                </p>
                <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                <p className="text-sm font-medium text-gray-900 underline dark:text-white">
                  Height
                </p>
              </Rating>

              <Rating>
                <Rating.Star />
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  {pokemon.base_experience}
                </p>
                <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                <p className="text-sm font-medium text-gray-900 underline dark:text-white">
                  Base Experience
                </p>
              </Rating>

              <Rating>
                <Rating.Star />
                <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                  {pokemon.order}
                </p>
                <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
                <p className="text-sm font-medium text-gray-900 underline dark:text-white">
                  Order
                </p>
              </Rating>
            </div>
          </div>
        ) : (
          <Spinner aria-label="Loading" size="xl" />
        )}
      </Modal.Body>
      <Modal.Footer>
        <Tooltip content="Save in DB">
          <Button color="success">
            <HiDatabase className="h-6 w-6" />
          </Button>
        </Tooltip>
      </Modal.Footer>
    </Modal>
  )
}
