
import { Card } from './Card.jsx'
import { projectsData } from '../Utils/projectsData.js'
import { GoToTopButton } from './GoToTopButton.jsx'
import { CharacterOne } from '../Assets/CharacterOne.jsx'
import { GithubLogoText } from './Icons/ProjectsIcons.jsx'
export function Projects () {
  return (
    <section className='flex h-screen snap-center relative' id='projects'>
      <section className='sm:w-2/3 w-full sm:flex sm:flex-col justify-center sm:gap-y-20 flex flex-wrap gap-y-5 pt-10'>
        <h1 className='font-primary text-[2em] sm:flex flex justify-center sm:items-center items-end'>Proyectos</h1>
        <div className='flex flex-wrap justify-center sm:gap-5 gap-3 w-full'>
          {
          projectsData.map(info => <Card key={info.id} {...info} />)
        }
        </div>
        <GithubLogoText />
      </section>
      <section className='sm:flex sm:items-center sm:justify-center sm:visible hidden'>
        <CharacterOne />
      </section>
      <GoToTopButton />
    </section>
  )
}
