//
import { arrowIcon, closeIcon, menuIcon } from '../../Utils/GeneralIconsData'
//

export function ArrowIcon () {
  return (
    <img src={arrowIcon} alt='icon' className='cursor-pointer h-6' />
  )
}
//
export function MenuIcon () {
  return (
    <button><img src={menuIcon} alt='icon' className='h-6' /></button>
  )
}
//
export function CloseIcon () {
  return (
    <button><img src={closeIcon} alt='icon' className='h-6' /></button>
  )
}
