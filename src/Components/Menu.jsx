//
import { motion } from 'framer-motion'
import { headerAnimation } from '../Animations/animations'
//
export function Menu () {
  return (
    <nav className='flex'>
      <ul className='flex gap-x-7 font-primary text-[13px]'>
        <motion.li className='header-li' {...headerAnimation}><a href='#info'>Info</a></motion.li>
        <motion.li className='header-li' {...headerAnimation}><a href='#projects'>Proyectos</a></motion.li>
        <motion.li className='header-li' {...headerAnimation}><a href='#skills'>Skills</a></motion.li>
        <motion.li className='header-li' {...headerAnimation}><a href='#contact'>Contacto</a></motion.li>
      </ul>
    </nav>
  )
}
