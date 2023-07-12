import { useToggle } from '../Hooks/useToggle'
import { menuData } from '../Utils/menuData'
import { Menu } from './Menu'
import { ToggleMenu } from './ToggleMenu'
//
export function Header () {
  const { toggle, handleToggle } = useToggle()
  return (
    <header className='fixed w-full flex justify-center z-10 pt-5 font-primary text-[13px]'>
      <ToggleMenu toggle={toggle} handleToggle={handleToggle} />
      {
        toggle &&
          <ul className='sm:h-auto h-screen w-full sm:bg-transparent bg-main flex sm:flex-row sm:gap-x-10 flex-col justify-center gap-y-16 text-center'>
            {
              menuData.map((item) => (
                <Menu key={item.id} {...item} handleToggle={handleToggle} />
              ))
            }
          </ul>
      }
    </header>
  )
}
