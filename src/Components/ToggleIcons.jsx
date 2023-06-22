//
import { CloseIcon, MenuIcon } from './Icons/GeneralIcons'
//
export function ToggleIcons ({ onClick, isActive }) {
  return (
    <div onClick={onClick} className='absolute sm:top-3 sm:right-10 top-5 right-10                         z-50'>
      {
        isActive ? <CloseIcon /> : <MenuIcon />
      }
    </div>
  )
}
