//
import { Logo } from './Logo'
import { Menu } from './Menu'
import { ToggleMenu } from './ToggleMenu'
//
export function Header () {
  return (
    <header>
      <Logo />
      <ToggleMenu />
      <Menu />
    </header>
  )
}
