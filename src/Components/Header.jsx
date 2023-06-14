//
import { styles } from '../Styles/styles'
import { Logo } from './Logo'
import { Menu } from './Menu'
//
export function Header() {
  return (
    <header className='sm:flex sm:items-center sm:w-full sm:justify-between sm:px-16 sm:fixed sm:z-40 flex justify-between pr-4 absolute w-full'>
      <Logo />
      <Menu />
    </header>
  )
}
