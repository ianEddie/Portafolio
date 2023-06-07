import { About } from './About'
import { Description } from './Description'
import { Projects } from './Projects'
import { Skills } from './Skills'
//
export function Main () {
  return (
    <main className='snap-y snap-mandatory w-full h-[95%] relative overflow-auto scrollbar-none '>
      <About />
      <Description />
      <Skills />
      <Projects />
    </main>
  )
}
