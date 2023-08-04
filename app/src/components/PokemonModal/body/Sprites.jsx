export const spriteNames = [
  'back_default',
  'back_female',
  'back_shiny',
  'back_shiny_female',
  'front_default',
  'front_female',
  'front_shiny',
  'front_shiny_female',
]

export const Sprites = ({ sprites }) => {
  return (
    <div className="w-full mb-10">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Sprites:
      </h3>
      <div className="flex overflow-x-scroll">
        {spriteNames.map(
          (name, key) =>
            sprites[name] && (
              <img
                key={key}
                src={sprites[name]}
                alt="avatar"
                width="200"
                className=""
              />
            )
        )}
      </div>
    </div>
  )
}
