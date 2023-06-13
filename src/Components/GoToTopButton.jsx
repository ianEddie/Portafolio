import { ArrowIcon } from '../Assets/Logos&Icons'
import { motion } from 'framer-motion'
import { goToTopButtonAnimation } from '../Animations/animations'
//
export function GoToTopButton () {
  return (
    <div className='absolute bottom-5 right-5 '>
      <a href='#home'>
        <motion.button {...goToTopButtonAnimation}><ArrowIcon /></motion.button>
      </a>
    </div>
  )
}
