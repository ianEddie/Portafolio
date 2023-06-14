
import { Card } from './Card.jsx'
import { data } from '../Utils/data.js'
import { GoToTopButton } from './GoToTopButton.jsx'
import { CharacterOne } from '../Assets/CharacterOne.jsx'
import { GithubLogoText } from '../Assets/Logos&Icons.jsx'
export function Projects () {
  return (
    <section className='flex h-screen snap-center relative' id='projects'>
      <section className=' w-2/3 grid grid-rows-3'>
        <h1 className='font-primary text-[2em] flex justify-center items-center'>Proyectos</h1>
        <div className='flex flex-wrap justify-center gap-5 w-full'>
          {
          data.map(info => <Card key={info.id} {...info} />)
        }
        </div>
        <GithubLogoText />
      </section>
      <section className='flex items-center justify-center'>
        <CharacterOne />
      </section>
      <GoToTopButton />
    </section>
  )
}
