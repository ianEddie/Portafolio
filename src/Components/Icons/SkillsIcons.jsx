//
import { cssIcon, htmlIcon, jsIcon, reactIcon, tailwindIcon, bootstrapIcon, sassIcon, firebaseIcon, figmaIcon, illustratorIcon, viteLogo, gitLogo, framerIcon, githubLogo } from '../../Assets/icons'
import { useHover } from '../../Hooks/useHover'
//
export function HtmlIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <img src={htmlIcon} className='sm:h-auto h-16 ' />
      <span className={`${hover ? 'sm:visible sm:absolute sm:top-[72px] absolute ' : 'hidden'} font-primary text-[13px]`}>Html</span>
    </div>
  )
}
//
export function CssIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[72px]' : 'hidden'} font-primary text-[13px]`}>Css</span>
      <img src={cssIcon} className='sm:h-auto h-16' />
    </div>
  )
}
//
export function JsIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[68px]' : 'hidden'} font-primary text-[13px]`}>Javascript</span>
      <img src={jsIcon} className='sm:h-[65px] h-16' />
    </div>
  )
}
//
export function ReactIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>React</span>
      <img src={reactIcon} className='sm:h-[75px] h-16' />
    </div>
  )
}
//
export function TailwindIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative text-center'>
      <span className={`${hover ? 'visible  absolute top-[50px]' : 'hidden'} font-primary text-[13px]`}>Tailwind Css</span>
      <img src={tailwindIcon} className='sm:h-[40px] h-8' />
    </div>
  )
}
//
export function BootstrapIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Bootstrap</span>
      <img src={bootstrapIcon} className='sm:h-16 h-14' />
    </div>
  )
}
//
export function SassIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Sass</span>
      <img src={sassIcon} className='sm:h-[75px] h-16' />
    </div>
  )
}
//
export function FirebaseIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Firebase</span>
      <img src={firebaseIcon} className='sm:h-[75px] h-16' />
    </div>
  )
}
//
export function FigmaIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[77px]' : 'hidden'} font-primary text-[13px]`}>Figma</span>
      <img src={figmaIcon} className='sm:h-16 h-12' />
    </div>
  )
}
//
export function IllustratorIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative text-center'>
      <span className={`${hover ? 'visible  absolute top-[70px]' : 'hidden'} font-primary text-[13px]`}>Adobe Illustrator</span>
      <img src={illustratorIcon} className='sm:h-[70px] h-14' />
    </div>
  )
}
//
export function ViteIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Vite</span>
      <img src={viteLogo} className='sm:h-[65px] h-14' />
    </div>
  )
}
//
export function GitIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Git</span>
      <img src={gitLogo} className='sm:h-[65px] h-16' />
    </div>
  )
}
//
export function FramerMotionIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative text-center'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Framer motion</span>
      <img src={framerIcon} className='sm:h-14 h-10' />
    </div>
  )
}
//
export function GithubIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Github</span>
      <img src={githubLogo} className='sm:h-[75px] h-16' />
    </div>
  )
}
