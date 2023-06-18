import { CharacterOne } from '../Assets/CharacterOne.jsx'
import { GoToTopButton } from './GoToTopButton.jsx'
//
export function Info () {
  return (
    <section className='flex justify-center h-screen relative w-full snap-center font-primary' id='info'>
      <div className='sm:w-1/2 sm:flex sm:justify-center sm:items-center sm:visible hidden'>
        <CharacterOne />
      </div>
      <div className='sm:w-1/2 sm:grid sm:grid-rows-3 text-center sm:px-10 sm:gap-y-20 w-full h-screen grid'>
        <h1 className='text-[2em] sm:self-end self-center'>Info</h1>
        <p className='text-sm tracking-wide sm:self-end sm:px-0 px-5'> Mi nombre es Ian Ortiz.
          <br /> Soy un desarrollador web altamente capacitado y apasionado por crear soluciones digitales efectivas. Con una sólida formación en programación y diseño web, tengo la capacidad de transformar ideas y conceptos en sitios web modernos y funcionales.
        </p>
      </div>
      <GoToTopButton />
    </section>
  )
}
