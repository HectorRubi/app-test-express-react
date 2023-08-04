import { Table, Spinner } from 'flowbite-react'

export const Loader = () => {
  return (
    <Table.Row>
      <Table.Cell colSpan={3} className="text-center">
        <Spinner aria-label="loading"></Spinner>
      </Table.Cell>
    </Table.Row>
  )
}
