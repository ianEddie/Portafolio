import { GoToTopButton } from './GoToTopButton.jsx'
import { desingIcons, devIcons, toolsIcons } from '../Utils/skillsIconsData.js'
import { SkillsIcons } from './Icons/SkillsIcons.jsx'
//
export function Skills () {
  return (
    <section className='h-screen w-full snap-center relative font-primary flex flex-col justify-center gap-y-10' id='skills'>
      <h1 className='text-[2em] self-center place-self-center'>Skills</h1>
      <div className='sm:text-[0.8em] text-[0.7em] flex flex-col gap-y-10 items-center'>
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
