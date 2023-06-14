//
import { styles } from '../Styles/styles'
import { Logo } from './Logo'
import { Menu } from './Menu'
//
export function Header () {
  return (
    <header className={`${styles.desktopHeader}${styles.mobileHeader}`}>
      <Logo />
      <Menu />
    </header>
  )
}
