import React from 'react'
import { Hijo } from '../Hijo/Hijo'

export const Padre = () => {

    // const titulo = "Hola Mundo"
    // const contador = 0;

    // const frutas = [
    //     'Manzana',
    //     'Naranja',
    //     'Banana'
    // ]

    const usuario = {
        nombre: 'Juan',
        edad: 30
    }
  return (
    <div>
       {/* <Hijo titulo={titulo}/> 
       <Hijo contador={contador}/> 
       <Hijo esVisible={false}/> */}
       {/* <Hijo items={frutas}/> */}
       <Hijo usuario={usuario}/>
    </div>
  )
}
