import { motion } from 'framer-motion'
import { gmailIcon, linkedinIcon, whatsappIcon } from '../../Assets/icons'
import { iconsContactAnimation } from '../../Animations/animations'
//
export function LinkedinIcon () {
  return (
    <div><motion.img src={linkedinIcon} alt='icon' className='h-6 cursor-pointer' {...iconsContactAnimation} /></div>
  )
}
//
export function WhatsappIcon () {
  return (
    <div><motion.img src={whatsappIcon} alt='icon' className='h-6 cursor-pointer' {...iconsContactAnimation} /></div>
  )
}
//
export function GmailIcon () {
  return (
    <div><motion.img src={gmailIcon} alt='icon' className='h-6 cursor-pointer' {...iconsContactAnimation} /></div>
  )
}
