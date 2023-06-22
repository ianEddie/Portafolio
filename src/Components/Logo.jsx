import { ianLogo } from '../Utils/GeneralIconsData'
//
export function Logo () {
  return (
    <nav className='absolute sm:top-3 sm:left-5 z-40 top-2'>
      <a href='#home'>
        <img src={ianLogo} alt='icon' className='h-10' />
      </a>
    </nav>
  )
}
