import axios from 'axios'
import Swal from 'sweetalert2'
import { Button, Tooltip, Table } from 'flowbite-react'
import { HiClipboardCheck, HiDatabase } from 'react-icons/hi'

import { errorHandler } from './../../../middleware/error.handler'
import { capitalize } from './../../../utils/capitalize'

import { SERVER_API_URL, serverEndpoints } from './../../../config/env'

export const PokeRow = ({ index, pokemon, handleViewButton }) => {
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
    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
      <Table.Cell>{index}</Table.Cell>
      <Table.Cell className="w-8/12 whitespace-nowrap font-medium text-gray-900 dark:text-white text-center text-base lg:text-xl">
        {capitalize(pokemon.name)}
      </Table.Cell>
      <Table.Cell className="flex gap-4 justify-center">
        <Tooltip content="View">
          <Button size="sm" onClick={() => handleViewButton(pokemon)}>
            <HiClipboardCheck className="h-6 w-6" />
          </Button>
        </Tooltip>

        <Tooltip content="Save in DB">
          <Button size="sm" color="success" onClick={() => saveData(pokemon)}>
            <HiDatabase className="h-6 w-6" />
          </Button>
        </Tooltip>
      </Table.Cell>
    </Table.Row>
  )
}
