import { Footer, DarkThemeToggle } from 'flowbite-react'

export const DefaultFooter = () => {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand alt="Icon" name="Pokemon" src="/icon.png" />
          <Footer.LinkGroup>
            <DarkThemeToggle />
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright by="Hector Rubí" href="#" year={2023} />
      </div>
    </Footer>
  )
}
