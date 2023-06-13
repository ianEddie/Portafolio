//
import { htmlIcon, cssIcon, jsIcon, reactIcon, tailwindIcon, bootstrapIcon, sassIcon, firebaseIcon, figmaIcon, illustratorIcon, viteLogo, gitLogo, githubLogo, ianLogo, webIcon, arrowIcon, linkedinIcon, whatsappIcon, gmailIcon, framerIcon } from './icons.js'
import { motion } from 'framer-motion'
import { githubButtonAnimation, iconsContactAnimation, projectSectionIconsAnimation } from '../Animations/animations.js'
import { useHover } from '../Hooks/useHover.js'
//
export function IanLogo () {
  return (
    <a href='#home'>
      <img src={ianLogo} alt='icon' className='h-10' />
    </a>
  )
}
//
export function HtmlIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Html</span>
      <img src={htmlIcon} />
    </div>
  )
}
//
export function CssIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Css</span>
      <img src={cssIcon} />
    </div>
  )
}
//
export function JsIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Javascript</span>
      <img src={jsIcon} />
    </div>
  )
}
//
export function ReactIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>React</span>
      <img src={reactIcon} />
    </div>
  )
}
//
export function TailwindIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative text-center'>
      <span className={`${hover ? 'visible  absolute top-[50px]' : 'hidden'} font-primary text-[13px]`}>Tailwind Css</span>
      <img src={tailwindIcon} className='h-[40px]' />
    </div>
  )
}
//
export function BootstrapIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Bootstrap</span>
      <img src={bootstrapIcon} />
    </div>
  )
}
//
export function SassIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Sass</span>
      <img src={sassIcon} />
    </div>
  )
}
//
export function FirebaseIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Firebase</span>
      <img src={firebaseIcon} />
    </div>
  )
}
//
export function FigmaIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[77px]' : 'hidden'} font-primary text-[13px]`}>Figma</span>
      <img src={figmaIcon} />
    </div>
  )
}
//
export function IllustratorIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative text-center'>
      <span className={`${hover ? 'visible  absolute top-[70px]' : 'hidden'} font-primary text-[13px]`}>Adobe Illustrator</span>
      <img src={illustratorIcon} />
    </div>
  )
}
//
export function ViteIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Vite</span>
      <img src={viteLogo} />
    </div>
  )
}
//
export function GitIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Git</span>
      <img src={gitLogo} />
    </div>
  )
}
//
export function FramerMotionIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative text-center'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Framer motion</span>
      <img src={framerIcon} />
    </div>
  )
}
//
export function GithubIcon () {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex flex-col justify-center items-center relative'>
      <span className={`${hover ? 'visible  absolute top-[75px]' : 'hidden'} font-primary text-[13px]`}>Github</span>
      <img src={githubLogo} />
    </div>
  )
}
//
export function WebIcon () {
  return (
    <div><motion.img src={webIcon} alt='icon' className='h-6 cursor-pointer' {...projectSectionIconsAnimation} /></div>
  )
}
//
export function ArrowIcon () {
  return (
    <img src={arrowIcon} alt='icon' className='cursor-pointer h-6' />
  )
}
//
export function LinkedinIcon () {
  return (
    <div><motion.img src={linkedinIcon} alt='icon' className='h-6 cursor-pointer' {...iconsContactAnimation} /></div>
  )
}
//
export function WhatsappIcon () {
  return (
    <div><motion.img src={whatsappIcon} alt='icon' className='h-6 cursor-pointer' {...iconsContactAnimation} /></div>
  )
}
//
export function GmailIcon () {
  return (
    <div><motion.img src={gmailIcon} alt='icon' className='h-6 cursor-pointer' {...iconsContactAnimation} /></div>
  )
}
//
export function GithubLogoText () {
  return (
    <div className='flex justify-center items-center'>
      <motion.div {...githubButtonAnimation} className='flex items-center p-1 rounded-2xl border border-black cursor-pointer bg-white/50 shadow-lg shadow-black/20 hover:bg-white hover:shadow-lg hover:shadow-black/40'>
        <img src={githubLogo} alt='icon' className='h-7' />
        <p className='font-primary text-sm'>Github</p>
      </motion.div>
    </div>
  )
}
