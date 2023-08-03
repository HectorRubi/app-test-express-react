import { useState } from 'react'
import { Button, Tooltip } from 'flowbite-react'
import { HiClipboardCheck, HiDatabase } from 'react-icons/hi'

import { PokemonCard } from './../PokemonCard/index'
import { usePokemonList } from './../../hooks/usePokemonList'

export const PokemonList = () => {
  const { pokemonList } = usePokemonList()
  const [openModal, setOpenModal] = useState()
  const [selected, setSelected] = useState()

  const handleViewButton = (pokemon) => {
    setSelected(pokemon)
    setOpenModal('default')
  }

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">No</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {pokemonList.length
              ? pokemonList.map((pokemon, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <td className="w-32 p-4">{index + 1}</td>
                    <td className="w-2/3 px-6 py-4 font-semibold text-gray-900 dark:text-white">
                      {pokemon.name}
                    </td>
                    <td className="px-6 py-4 flex gap-4">
                      <Tooltip content="View">
                        <Button onClick={() => handleViewButton(pokemon)}>
                          <HiClipboardCheck className="h-6 w-6" />
                        </Button>
                      </Tooltip>

                      <Tooltip content="Save in DB">
                        <Button color="success">
                          <HiDatabase className="h-6 w-6" />
                        </Button>
                      </Tooltip>
                    </td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
      {selected && (
        <PokemonCard
          pokemon={selected}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </div>
  )
}