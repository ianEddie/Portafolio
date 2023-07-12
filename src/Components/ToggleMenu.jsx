import { menuIcon, closeIcon } from '../Utils/GeneralIconsData'
//
export function ToggleMenu ({ toggle, handleToggle }) {
  return (
    <div className='absolute top-[13px] right-10 z-10 cursor-pointer'>
      <img src={toggle ? closeIcon : menuIcon} alt='icon' onClick={handleToggle} className='h-5' />
    </div>
  )
}
