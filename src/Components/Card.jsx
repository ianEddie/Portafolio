//
import { projectSectionIconsAnimation } from '../Animations/animations'
import { WebIcon } from '../Assets/Logos&Icons'
import { githubLogo } from '../Assets/icons'
import { motion } from 'framer-motion'
//
export function Card ({ title, image }) {
  return (
    <section className='w-[12rem] h-[12rem] flex flex-col items-center gap-y-3  border border-black rounded-[1.7em] '>
      <div className='h-1/2 grid place-content-center'>
        <img src={image} alt='image' />
      </div>
      <h1>{title}</h1>
      <div className='w-full flex justify-center items-center gap-x-3'>
        <WebIcon />
        <div><motion.img src={githubLogo} alt='' className='h-7 cursor-pointer' {...projectSectionIconsAnimation} /></div>
      </div>
    </section>
  )
}
