//
import { whileHoverTop } from '../Animations/animations'
import { footerIcons } from '../Utils/iconsData'
import { motion } from 'framer-motion'
//
export function Footer () {
  return (
    <footer>
      {
  footerIcons.map(item => (
    <motion.img src={item.img} alt={item.name} key={item.id} className='h-7 cursor-pointer' {...whileHoverTop} />
  ))
      }
    </footer>
  )
}
