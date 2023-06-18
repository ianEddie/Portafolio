import { useState } from 'react'

export function useToggle () {
  const [toggle, setToggle] = useState(true)
  const handleClick = () => {
    setToggle(!toggle)
  }
  return { toggle, handleClick }
}
