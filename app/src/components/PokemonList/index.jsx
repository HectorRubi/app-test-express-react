import { useState } from 'react'
import { Table, Pagination } from 'flowbite-react'

import { PokemonCard } from '../PokemonModal/index'
import { PokeRow } from './table/PokeRow'
import { Loader } from './table/Loader'
import { EmptyRow } from './table/EmptyRow'

import { usePokemonList } from './../../hooks/usePokemonList'

export const PokemonList = () => {
  const [openModal, setOpenModal] = useState()
  const [selected, setSelected] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  const { pokemonList, tableLoading, totalPokemons } =
    usePokemonList(currentPage)

  const handleViewButton = (pokemon) => {
    setSelected(pokemon)
    setOpenModal('default')
  }

  const renderTableRows = () => {
    if (tableLoading) {
      return <Loader />
    }

    if (pokemonList.length) {
      return pokemonList.map((pokemon, key) => {
        console.log(key)
        return (
          <PokeRow
            key={key}
            pokemon={pokemon}
            handleViewButton={handleViewButton}
          />
        )
      })
    } else {
      return <EmptyRow />
    }
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
            {tableLoading ? (
              <Loader />
            ) : pokemonList.length ? (
              pokemonList.map((pokemon, index) => (
                <PokeRow
                  key={index}
                  index={index}
                  pokemon={pokemon}
                  handleViewButton={handleViewButton}
                />
              ))
            ) : (
              <EmptyRow />
            )}
          </Table.Body>
        </Table>
      </div>

      <div className="flex items-center justify-center text-center">
        <Pagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          showIcons
          totalPages={totalPokemons}
          layout="pagination"
        />
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
