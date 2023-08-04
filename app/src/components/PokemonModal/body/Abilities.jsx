import { Badge } from 'flowbite-react'

export const Abilities = ({ abilities }) => {
  return (
    <div className="mb-10">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Abilities:
      </h3>
      <div className="flex gap-2">
        {abilities.map((ability, key) => (
          <Badge key={key} color="info">
            {ability.ability.name}
          </Badge>
        ))}
      </div>
    </div>
  )
}
