import React from 'react'
import { Link } from 'react-router-dom'


export const NavBar = () => {
  return (
    <div>

        <Link to="/">Inicio</Link>
        <Link to="/contador">Contador</Link>
        <Link to="/pokeapi">PokeApi</Link>
    </div>
  )
}
