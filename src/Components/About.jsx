import { CharacterOne } from '../Assets/CharacterOne.jsx'
import { GoToTopButton } from './GoToTopButton.jsx'
//
export function About () {
  return (
    <main className='flex flex-col justify-center h-screen snap-start relative' id='about'>
      <section className='w-full flex h-[80%]'>
        <div className='w-1/2 flex justify-center items-start pt-28'>
          <CharacterOne />
        </div>
        <div className='w-1/2 flex flex-col items-center text-center px-10 pt-20 gap-y-20'>
          <h1 className='font-primary text-[2em]'>About</h1>
          <p className='font-primary text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laboriosam deserunt possimus facilis a maiores, soluta cum exercitationem assumenda voluptatibus in labore, sequi ad sed nisi, aliquam laudantium necessitatibus? Sapiente.</p>
        </div>
      </section>
      <GoToTopButton />
    </main>
  )
}
