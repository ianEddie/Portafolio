import { motion } from 'framer-motion'
import { goToTopButtonAnimation } from '../Animations/animations'
import { arrowIcon } from '../Utils/GeneralIconsData'
//
export function GoToTopButton () {
  return (
    <a href='#home'>
      <motion.img src={arrowIcon} alt='icon' className='h-6 absolute bottom-5 right-5 cursor-pointer' {...goToTopButtonAnimation} />
    </a>
  )
}
