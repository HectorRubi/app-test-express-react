import { Button, Tooltip, Table } from 'flowbite-react'
import { HiClipboardCheck, HiDatabase } from 'react-icons/hi'
import { AiOutlineLoading } from 'react-icons/ai'

import { useSavePokemon } from './../../../hooks/useSavePokemon'
import { capitalize } from './../../../utils/capitalize'

export const PokeRow = ({ index, pokemon, handleViewButton }) => {
  const { showLoader, saveData } = useSavePokemon()

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
          <Button
            size="sm"
            color="success"
            onClick={() => saveData(pokemon, false)}
            disabled={showLoader}
            isProcessing={showLoader}
            processingSpinner={
              <AiOutlineLoading className="h-6 w-6 animate-spin" />
            }
          >
            <HiDatabase className="h-6 w-6" />
          </Button>
        </Tooltip>
      </Table.Cell>
    </Table.Row>
  )
}
