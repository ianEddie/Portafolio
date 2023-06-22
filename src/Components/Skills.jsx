//
import { GoToTopButton } from './GoToTopButton.jsx'
import { desingIcons, devIcons, toolsIcons } from '../Utils/iconsData'
import { SkillsIcons } from './Icons/SkillsIcons.jsx'
//
export function Skills () {
  return (
    <section className='h-screen w-full snap-center relative font-primary grid place-items-center content-center gap-y-16' id='skills'>
      <h1 className='text-[2em]'>Skills</h1>
      <div className='sm:text-[0.8em] text-[0.7em] sm:w-1/2 sm:px-0 px-3  flex flex-col justify-center items-center gap-y-10'>
        <div className='flex gap-x-5'>
          {
      devIcons.map(item => <SkillsIcons key={item.id} {...item} />)
     }
        </div>
        <div className='flex sm:gap-x-5 gap-x-3'>
          {
      desingIcons.map(item => <SkillsIcons key={item.id} {...item} />)
     }
        </div>
        <div className='flex gap-x-5'>
          {
      toolsIcons.map(item => <SkillsIcons key={item.id} {...item} />)
     }
        </div>
      </div>
      <GoToTopButton />
    </section>
  )
}
