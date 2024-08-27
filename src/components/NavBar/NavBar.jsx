import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'


export const NavBar = () => {
  return (
    <nav>
        <Link className="link" to="/">Inicio</Link>
        <Link className="link" to="/contador">Contador</Link>
        <Link className="link" to="/pokeapi">PokeApi</Link>
        <Link className="link" to="/props">Propiedades</Link>
        <Link className="link" to="/form">Formulario</Link>
    </nav>
  )
}
