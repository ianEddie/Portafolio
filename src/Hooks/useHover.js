import { useState } from 'react'
//
export const useHover = () => {
  const [hover, setHover] = useState(false)
  const handleMouseEnter = () => {
    setHover(true)
  }
  const handleMouseLeave = () => {
    setHover(false)
  }
  return { hover, handleMouseEnter, handleMouseLeave }
}
