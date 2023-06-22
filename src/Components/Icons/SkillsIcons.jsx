//
import { useHover } from '../../Hooks/useHover'
//
export function SkillsIcons ({ name, img }) {
  const { hover, handleMouseEnter, handleMouseLeave } = useHover()
  return (
    <div className='flex flex-col items-center relative text-center' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={img} alt='image' className='sm:h-16 h-12' />
      <span className={`${hover ? 'visible absolute sm:top-16 top-12' : 'hidden'}`}>{name}</span>
    </div>
  )
}
