import { Card } from './Card.jsx'
import { projectsData } from '../Utils/projectsData.js'
import { GoToTopButton } from './GoToTopButton.jsx'
import { GithubLogoText } from './Icons/ProjectsIcons.jsx'
import { Character } from './Character.jsx'
//
export function Projects () {
  return (
    <section className='flex w-full h-screen snap-center relative sm:grid sm:grid-cols-3 grid-flow-col ' id='projects'>
      <section className='col-span-2 flex flex-col justify-center gap-y-16'>
        <h1 className='font-primary text-[2em] sm:flex flex justify-center sm:items-center items-end'>Proyectos</h1>
        <div className='flex flex-wrap justify-center gap-5'>
          {
          projectsData.map(info => <Card key={info.id} {...info} />)
        }
        </div>
        <GithubLogoText />
      </section>
      <section className='sm:flex sm:items-center sm:justify-start hidden'>
        <Character />
      </section>
      <GoToTopButton />
    </section>
  )
}
