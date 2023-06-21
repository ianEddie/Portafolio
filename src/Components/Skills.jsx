import { HtmlIcon, BootstrapIcon, CssIcon, FigmaIcon, FirebaseIcon, FramerMotionIcon, GitIcon, GithubIcon, IllustratorIcon, JsIcon, ReactIcon, SassIcon, TailwindIcon, ViteIcon } from './Icons/SkillsIcons'
import { GoToTopButton } from './GoToTopButton.jsx'
//
export function Skills () {
  return (
    <section className='h-screen w-full snap-center relative' id='skills'>
      <h1 className='font-primary text-[2em] sm:h-[20%] h-1/3 w-full flex justify-center sm:items-end items-center'>Skills</h1>
      <div className='w-full sm:h-[80%] h-2/3 flex flex-col items-center sm:justify-start sm:justify-center justify-start sm:py-16 gap-y-8'>
        <div className='flex justify-center items-center sm:gap-x-5 gap-x-3 px-5'>
          <HtmlIcon />
          <CssIcon />
          <JsIcon />
          <ReactIcon />
        </div>

        <div className='flex flex-wrap justify-center items-center sm:gap-x-5 gap-x-1'>
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
