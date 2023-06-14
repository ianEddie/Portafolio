///
import { ianLogo } from '../Assets/icons'
///
export function Logo () {
  return (
    <nav className='pt-2'>
      <a href='#home'>
        <img src={ianLogo} alt='icon' className='h-10' />
      </a>
    </nav>
  )
}
