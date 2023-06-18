//
import { useState } from 'react'
import { ToggleIcons } from './ToggleIcons'
import { menuData } from '../Utils/menuData'
//
export function ToggleMenu () {
  const [isActive, setIsActive] = useState(false)
  return (
    <nav className='sm:hidden relative '>
      <ToggleIcons isActive={isActive} onClick={() => setIsActive(!isActive)} />
      {isActive && (
        <ul className='bg-main absolute z-40 flex h-screen flex-col justify-center items-center gap-y-8 w-full font-primary'>
          {menuData.map((element) => (
            <li key={element.id} onClick={() => setIsActive(false)}>
              <a href={element.route}>{element.name}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}
