//
import { Home } from './Home'
import { Info } from './Info'
import { Projects } from './Projects'
import { Skills } from './Skills'
import { Contact } from './Contact'
//
export function Main () {
  return (
    <main className='snap-y snap-mandatory w-full h-screen overflow-auto scrollbar scrollbar-track-primary scrollbar-thumb-black/20 scrollbar-thumb-rounded-3xl scrollbar-w-2 scroll-smooth'>
      <Home />
      <Info />
      <Skills />
      <Projects />
      <Contact />
    </main>

  )
}
