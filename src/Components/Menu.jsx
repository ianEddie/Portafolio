//
import { motion } from 'framer-motion'
import { headerAnimation } from '../Animations/animations'
import { useToggle } from '../Hooks/useToggle'
import { MenuToggle } from './MenuToggle'
//
export function Menu() {
  const { toggle, handleClick } = useToggle()
  return (
    <>
      <nav className={`sm:flex ${toggle ? 'hidden' : 'absolute right-0 w-full h-screen flex flex-col items-center justify-center gap-y-16 font-primary bg-orange-500'} z-40 `}>
        <ul className={`sm:flex sm:gap-x-7 sm:font-primary sm:text-[13px] `}>
          <motion.li className='header-li' {...headerAnimation}><a href='#info'>Info</a></motion.li>
          <motion.li className='header-li' {...headerAnimation}><a href='#projects'>Proyectos</a></motion.li>
          <motion.li className='header-li' {...headerAnimation}><a href='#skills'>Skills</a></motion.li>
          <motion.li className='header-li' {...headerAnimation}><a href='#contact'>Contacto</a></motion.li>
        </ul>
      </nav >
      <MenuToggle handleClick={handleClick} toggle={toggle} />
    </>

  )
}
