import { Character } from './Character.jsx'
import { GoToTopButton } from './GoToTopButton.jsx'
//
export function Info () {
  return (
    <section className='h-screen relative w-full snap-center font-primary sm:grid sm:grid-cols-2 sm:content-center flex' id='info'>
      <div className=' sm:flex sm:justify-center sm:items-center hidden'>
        <Character />
      </div>
      <div className='flex flex-col items-center justify-center gap-y-5 text-center'>
        <h1 className='text-[2em]'>Info</h1>
        <p className='text-sm tracking-wide px-10'> Mi nombre es Ian Ortiz.
          <br /> Soy un desarrollador web altamente capacitado y apasionado por crear soluciones digitales efectivas. Con una sólida formación en programación y diseño web, tengo la capacidad de transformar ideas y conceptos en sitios web modernos y funcionales.
        </p>
      </div>
      <GoToTopButton />
    </section>
  )
}
