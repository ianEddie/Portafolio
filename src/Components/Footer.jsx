import { whileHoverTop } from '../Animations/animations'
import { footerIcons } from '../Utils/footerIconsData'
import { motion } from 'framer-motion'
//
export function Footer () {
  return (
    <div className='flex mt-10 gap-x-3'>
      {
  footerIcons.map(item => (
    <a href={item.url} key={item.id} target='blank'>
      <motion.img src={item.img} alt={item.name} className='h-7 cursor-pointer' {...whileHoverTop} />
    </a>
  ))
      }
    </div>
  )
}
