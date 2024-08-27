import React, { useState } from 'react'
import './Form.css'

export const Form = () => {
    // const [email, setEmail] = useState('')

    // const [nombre, setNombre] = useState('')

    // const [apellido, setApellido] = useState('')

    // const [edad, setEdad] = useState('')

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        email: '',
        edad: ''
    })

    const [submitted, setSubmitted] = useState(false);


    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        setSubmitted(true);
    }

  return (
    <div className='container'>
        <form >
            <div>
                <label className="form-label" htmlFor="nombre">Nombre:</label>
                <input
                 className='form-control mt-2 ' 
                 type="text" 
                 name="nombre" 
                 value={formData.nombre}
                 onChange={handleChange}
                 />
            </div>
            <div>
                <label htmlFor="apellido">Apellido:</label>
                <input 
                className='form-control mt-2' 
                type="text" 
                name="apellido" 
                value={formData.apellido}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input 
                className='form-control mt-2' 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="edad">Edad:</label>
                <input 
                className='form-control mt-2' 
                type="number" 
                name="edad" 
                value={formData.edad}
                onChange={handleChange}
                />
            </div>
            <button type='submit' className='btn btn-success' onClick={handleSubmit}>Enviar</button>
        </form>
        {
            submitted && (
                <div>
                    <h2>Resultado:</h2>
                    <p>Nombre:{formData.nombre}</p>
                </div>
            )
        }    
    </div>
  )
}
