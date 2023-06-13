//
import { titleHomeAnimation } from '../Animations/animations'
import { motion } from 'framer-motion'
//
export function Home () {
  return (
    <section className='flex justify-center h-screen snap-start' id='home'>
      <motion.section className='w-1/2 flex flex-col text-center items-center gap-y-1 justify-center pb-24' {...titleHomeAnimation}>
        <h1 className='font-primary text-[1em]'>Hola, soy Ian</h1>
        <h1 className='font-primary text-[2.3em]'>Web Developer</h1>
      </motion.section>
      <section className='w-1/2 bg-hero bg-no-repeat bg-[center_bottom_1rem]' />
    </section>
  )
}
