import axios from 'axios'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { Button, Tooltip, Table, Spinner } from 'flowbite-react'
import { HiClipboardCheck, HiDatabase } from 'react-icons/hi'

import { PokemonCard } from '../PokemonModal/index'
import { usePokemonList } from './../../hooks/usePokemonList'
import { errorHandler } from './../../middleware/error.handler'
import { capitalize } from './../../utils/capitalize'

import { SERVER_API_URL, serverEndpoints } from './../../config/env'

export const PokemonList = () => {
  const { pokemonList, tableLoading } = usePokemonList()

  const [openModal, setOpenModal] = useState()
  const [selected, setSelected] = useState()

  const handleViewButton = (pokemon) => {
    setSelected(pokemon)
    setOpenModal('default')
  }

  const saveData = (pokemon) => {
    const url = `${SERVER_API_URL}${serverEndpoints.pokemon}`
    axios
      .post(url, {
        name: pokemon.name,
      })
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
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <Table hoverable>
          <Table.Head>
            <Table.HeadCell>
              <span className="sr-only">No</span>
            </Table.HeadCell>
            <Table.HeadCell className="text-center">Name</Table.HeadCell>
            <Table.HeadCell className="text-center">Action</Table.HeadCell>
          </Table.Head>

          <Table.Body className="divide-y">
            {tableLoading && (
              <Table.Row>
                <Table.Cell colSpan={3} className="text-center">
                  <Spinner aria-label="loading"></Spinner>
                </Table.Cell>
              </Table.Row>
            )}

            {pokemonList.length
              ? pokemonList.map((pokemon, key) => (
                  <Table.Row
                    key={key}
                    className="bg-white dark:border-gray-700 dark:bg-gray-800"
                  >
                    <Table.Cell>{key + 1}</Table.Cell>
                    <Table.Cell className="w-8/12 whitespace-nowrap font-medium text-gray-900 dark:text-white text-center text-base lg:text-xl">
                      {capitalize(pokemon.name)}
                    </Table.Cell>
                    <Table.Cell className="flex gap-4 justify-center">
                      <Tooltip content="View">
                        <Button
                          size="sm"
                          onClick={() => handleViewButton(pokemon)}
                        >
                          <HiClipboardCheck className="h-6 w-6" />
                        </Button>
                      </Tooltip>

                      <Tooltip content="Save in DB">
                        <Button
                          size="sm"
                          color="success"
                          onClick={() => saveData(pokemon)}
                        >
                          <HiDatabase className="h-6 w-6" />
                        </Button>
                      </Tooltip>
                    </Table.Cell>
                  </Table.Row>
                ))
              : null}
          </Table.Body>
        </Table>
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
