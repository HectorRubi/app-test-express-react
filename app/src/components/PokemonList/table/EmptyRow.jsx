import { Table } from 'flowbite-react'

export const EmptyRow = () => {
  return (
    <Table.Row>
      <Table.Cell colSpan={3} className="text-center text-2xl">
        Sorry, there's noting here.
      </Table.Cell>
    </Table.Row>
  )
}
