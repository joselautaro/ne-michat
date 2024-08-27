import React from 'react'
import './Hijo.css'

export const Hijo = ({ usuario: {nombre, edad}}) => {
  return (
    <>
    {/* <div>
      <h1>{titulo}</h1>
      <h2>{contador}</h2>
      {esVisible ? <h2>El contenido es visible</h2> : <p>El contenido no es visible</p>}
    </div> */}
    {/* <ul>
    {
      items.map((item, index) => (
        <li key={index}>{item}</li>
      ))
    }
    </ul> */}
    <p>Nombre: {nombre}</p>
    <p>Edad: {edad}</p>
    </>
  )
}
