import { Rating } from 'flowbite-react'

export const Detail = ({ value, name }) => {
  return (
    <Rating>
      <Rating.Star />
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
        {value}
      </p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <p className="text-sm font-medium text-gray-900 underline dark:text-white">
        {name}
      </p>
    </Rating>
  )
}
