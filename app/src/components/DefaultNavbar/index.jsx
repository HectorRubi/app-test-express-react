import { DarkThemeToggle, Navbar } from 'flowbite-react'

export const DefaultNavbar = () => {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand>
        <img
          alt="Logo"
          className="mr-3 h-6 sm:h-9"
          src="https://www.freepnglogos.com/uploads/pokemon-symbol-logo-png-31.png"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Pokemon
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <DarkThemeToggle />
      </Navbar.Collapse>
    </Navbar>
  )
}
