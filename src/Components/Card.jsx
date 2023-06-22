//
import { whileHoverScale } from '../Animations/animations'
import { WebIcon } from './Icons/ProjectsIcons'
import { githubLogo } from '../Assets/icons'
import { motion } from 'framer-motion'
//
export function Card ({ title, image, githubUrl, siteUrl }) {
  return (
    <section className='sm:w-[11rem] sm:h-[11rem] w-[11rem] flex flex-col items-center gap-y-3 py-3  border border-black rounded-[1.7em] '>
      <div className='h-1/2 grid place-content-center'>
        <img src={image} alt='image' />
      </div>
      <h1>{title}</h1>
      <div className='w-full flex justify-center items-center gap-x-3'>
        <a href={siteUrl} target='blank'>
          <WebIcon />
        </a>
        <a href={githubUrl} target='blank'>
          <motion.div {...whileHoverScale}><img src={githubLogo} alt='' className='h-7 cursor-pointer' /></motion.div>
        </a>
      </div>
    </section>
  )
}
