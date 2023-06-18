//
import { menuData } from '../Utils/menuData'
//
export function Menu () {
  return (
    <nav className='sm:absolute sm:flex font-primary text-[0.8em] sm:gap-x-7 sm:right-16 sm:top-4 hidden z-40'>
      {
    menuData.map((item) => (
      <ul key={item.id}>
        <li><a href={item.route}>{item.name}</a></li>
      </ul>
    ))
   }
    </nav>
  )
}
