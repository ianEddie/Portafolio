///
import { CloseIcon, MenuIcon } from '../Assets/Logos&Icons'
///
export function ToggleIcons ({ onClick, isActive }) {
  return (
    <div onClick={onClick} className='absolute top-3 right-10 z-50'>
      {
        isActive ? <CloseIcon /> : <MenuIcon />
      }
    </div>
  )
}
