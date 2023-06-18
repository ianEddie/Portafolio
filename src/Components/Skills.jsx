import { HtmlIcon, BootstrapIcon, CssIcon, FigmaIcon, FirebaseIcon, FramerMotionIcon, GitIcon, GithubIcon, IllustratorIcon, JsIcon, ReactIcon, SassIcon, TailwindIcon, ViteIcon } from './Icons/SkillsIcons'
import { GoToTopButton } from './GoToTopButton.jsx'
//
export function Skills () {
  return (
    <section className='h-screen w-full snap-center relative' id='skills'>

      <h1 className='font-primary text-[2em] h-[20%] w-full flex justify-center items-end'>Skills</h1>
      <div className='w-full h-[80%] flex flex-col items-center justify-start sm:py-16 py-20 px-2 gap-y-8'>
        <div className='flex justify-center items-center sm:gap-x-5 gap-x-3 px-5'>
          <HtmlIcon />
          <CssIcon />
          <JsIcon />
          <ReactIcon />
        </div>

        <div className='flex flex-wrap justify-center items-center sm:gap-x-5 gap-x-3'>
          <TailwindIcon />
          <BootstrapIcon />
          <SassIcon />
          <FigmaIcon />
          <IllustratorIcon />
          <FramerMotionIcon />
        </div>

        <div className='flex sm:justify-center justify-between sm:gap-x-5 gap-x-3 px-10 items-center'>
          <ViteIcon />
          <FirebaseIcon />
          <GitIcon />
          <GithubIcon />
        </div>
      </div>
      <GoToTopButton />
    </section>
  )
}
