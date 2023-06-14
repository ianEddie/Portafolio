import { CharacterOne } from '../Assets/CharacterOne.jsx'
import { GoToTopButton } from './GoToTopButton.jsx'
//
export function Info () {
  return (
    <main className='flex flex-col justify-center h-screen snap-start relative' id='info'>
      <section className='w-full flex h-[80%]'>
        <div className='w-1/2 flex justify-center items-start pt-28'>
          <CharacterOne />
        </div>
        <div className='w-1/2 flex flex-col items-center text-center px-10 pt-20 gap-y-20'>
          <h1 className='font-primary text-[2em]'>Info</h1>
          <p className='font-primary text-sm tracking-wide'> Mi nombre es Ian Ortiz.
            <br /> Soy un desarrollador web altamente capacitado y apasionado por crear soluciones digitales efectivas. Con una sólida formación en programación y diseño web, tengo la capacidad de transformar ideas y conceptos en sitios web modernos y funcionales.
          </p>
        </div>
      </section>
      <GoToTopButton />
    </main>
  )
}
