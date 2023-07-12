import { titleHomeAnimation } from '../Animations/animations'
import { motion } from 'framer-motion'
//
export function Home () {
  return (
    <section className='flex justify-center h-screen snap-center relative' id='home'>
      <motion.section className='sm:w-1/2 sm:flex sm:flex-col sm:text-center sm:items-center sm:gap-y-1 sm:justify-center sm:pb-24 w-full h-screen flex flex-col justify-center items-center' {...titleHomeAnimation}>
        <h1 className='font-primary text-[1em]'>Hola, soy Ian</h1>
        <h1 className='font-primary sm:text-[2.3em] text-[1.9em]'>Web Developer</h1>
      </motion.section>
      <section className='sm:w-1/2 sm:bg-primaryImage sm:bg-no-repeat sm:bg-[center_bottom_1rem]' />
    </section>
  )
}
