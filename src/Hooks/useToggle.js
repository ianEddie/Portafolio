import { useState } from 'react'

export function useToggle () {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {
    setToggle(!toggle)
  }
  return { toggle, handleClick }
}
