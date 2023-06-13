import { BootstrapIcon, CssIcon, FigmaIcon, FirebaseIcon, FramerMotionIcon, GitIcon, GithubIcon, HtmlIcon, IllustratorIcon, JsIcon, ReactIcon, SassIcon, TailwindIcon, ViteIcon } from '../Assets/Logos&Icons.jsx'
import { GoToTopButton } from './GoToTopButton.jsx'
//
export function Skills () {
  return (
    <section className='h-screen snap-center relative flex flex-wrap justify-center gap-y-14' id='skills'>
      <div className='w-full flex justify-center items-end'>
        <h1 className='font-primary text-[2em]'>Skills</h1>
      </div>
      <section className='flex flex-col justify-start items-center gap-y-10 w-full'>
        <div className='flex justify-center gap-x-8 items-center'>
          <HtmlIcon />
          <CssIcon />
          <JsIcon />
          <ReactIcon />
        </div>
        <div className='flex justify-center gap-x-8 items-center'>
          <TailwindIcon />
          <BootstrapIcon />
          <SassIcon />
          <FigmaIcon />
          <IllustratorIcon />
          <FramerMotionIcon />
        </div>
        <div className='flex justify-center gap-x-8 items-center'>
          <ViteIcon />
          <FirebaseIcon />
          <GitIcon />
          <GithubIcon />
        </div>
      </section>
      <GoToTopButton />
    </section>
  )
}
