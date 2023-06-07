import { BootstrapIcon, CssIcon, FirebaseIcon, HtmlIcon, JsIcon, ReactIcon, SassIcon, TailwindIcon } from '../Assets/icons.jsx'

export function Skills () {
  return (
    <section className='flex flex-col items-center gap-y-10 h-screen snap-start overflow-hidden pt-20'>
      <div className='w-full flex justify-center font-primary text-[2em]'>
        <h1>Skills</h1>
      </div>
      <div className='w-full flex justify-center gap-x-5 font-primary text-sm'>
        <HtmlIcon />
        <CssIcon />
        <JsIcon />
        <ReactIcon />
        <FirebaseIcon />
        <TailwindIcon />
        <BootstrapIcon />
        <SassIcon />
      </div>
    </section>
  )
}
