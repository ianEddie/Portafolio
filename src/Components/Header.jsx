//
import { IanLogo } from '../Assets/Logos&Icons'
import { motion } from 'framer-motion'
import { headerAnimation } from '../Animations/animations'
//
export function Header () {
  return (
    <header className='flex items-center w-full justify-between px-16 fixed z-40'>
      <nav className='pt-2'>
        <IanLogo />
      </nav>
      <nav>
        <ul className='flex gap-x-7 font-primary text-[13px]'>
          <motion.li className='header-li' {...headerAnimation}><a href='#about'>About</a></motion.li>
          <motion.li className='header-li' {...headerAnimation}><a href='#projects'>Projects</a></motion.li>
          <motion.li className='header-li' {...headerAnimation}><a href='#skills'>Skills</a></motion.li>
          <motion.li className='header-li' {...headerAnimation}><a href='#contact'>Contact</a></motion.li>
        </ul>
      </nav>
    </header>
  )
}
