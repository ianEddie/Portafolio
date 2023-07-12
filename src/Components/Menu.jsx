export function Menu ({ name, route, handleToggle }) {
  return (
    <a href={route}>
      <li className='' onClick={handleToggle}>{name}</li>
    </a>
  )
}
