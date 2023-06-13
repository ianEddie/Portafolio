//
import { Home } from './Home'
import { About } from './About'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Contact } from './Contact'
//
export function Main () {
  return (
    <main className='snap-y snap-mandatory w-full h-screen overflow-auto scrollbar-thin scroll-smooth '>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>

  )
}
