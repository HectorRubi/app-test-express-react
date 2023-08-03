import { Flowbite } from 'flowbite-react'

import { DefaultNavbar } from './components/DefaultNavbar'
import { DefaultFooter } from './components/DefaultFooter'
import { PokemonList } from './components/PokemonList'

import './App.css'

function App() {
  return (
    <main className="bg-slate-100 dark:bg-[#111827] min-h-screen">
      <Flowbite>
        <nav className="max-w-5xl mx-auto py-8 px-2 lg:px-0">
          <DefaultNavbar />
        </nav>
        <div className="max-w-5xl mx-auto mb-20">
          <img
            className="block mx-auto"
            width="500"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
            alt="logo"
          />
        </div>
        <div className="max-w-5xl mx-auto px-2 lg:px-0">
          <PokemonList />
        </div>
        <footer className="max-w-5xl mx-auto mt-20 py-8 px-2 lg:px-0">
          <DefaultFooter />
        </footer>
      </Flowbite>
    </main>
  )
}

export default App
