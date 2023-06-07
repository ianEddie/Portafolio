//
import { logo } from '../Assets/backgrounds'
//
export function Header () {
  return (
    <header className='flex items-center w-full justify-between h-[5%] pt-5 px-16'>
      <nav>
        <div><img src={logo} alt='logo' className='h-10' /></div>
      </nav>
      <nav>
        <ul className='flex gap-x-10 font-primary text-[13px]'>
          <li>About</li>
          <li>Description</li>
          <li>Skills</li>
          <li>Projects</li>
        </ul>
      </nav>
    </header>
  )
}
