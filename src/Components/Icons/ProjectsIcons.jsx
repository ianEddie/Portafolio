//
import { motion } from 'framer-motion'
import { githubLogo, webIcon } from '../../Assets/icons'
import { whileHoverScale, whileHoverTop } from '../../Animations/animations'
//
export function WebIcon () {
  return (
    <div><motion.img src={webIcon} alt='icon' className='h-6 cursor-pointer' {...whileHoverScale} /></div>
  )
}
//
export function GithubLogoText () {
  return (
    <a href='https://github.com/ianEddie?tab=repositories' target='blank'>
      <div className='flex justify-center items-center h-10'>
        <motion.div {...whileHoverTop} className='flex items-center p-1 rounded-2xl border border-black cursor-pointer bg-white/50 shadow-lg shadow-black/20 hover:bg-white hover:shadow-lg hover:shadow-black/40'>
          <img src={githubLogo} alt='icon' className='h-7' />
          <p className='font-primary text-sm'>Github</p>
        </motion.div>
      </div>
    </a>
  )
}
