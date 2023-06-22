import { motion } from 'framer-motion'
import { goToTopButtonAnimation } from '../Animations/animations'
import { ArrowIcon } from './Icons/GeneralIcons'
//
export function GoToTopButton () {
  return (
    <div className='absolute sm:bottom-5 sm:right-5 bottom-20 right-5'>
      <a href='#home'>
        <motion.button {...goToTopButtonAnimation}><ArrowIcon /></motion.button>
      </a>
    </div>
  )
}
