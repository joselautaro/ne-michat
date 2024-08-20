import React, { useEffect, useState } from 'react'
import './DolarApi.css'
export const DolarApi = () => {

  const [dolarData, setDolarData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {

    fetch("https://dolarapi.com/v1/dolares")

      .then(response => {
        if (!response.ok) {
          throw new Error("Error al cargar los datos")
        }
        return response.json();
      })
      .then(data => {
        setDolarData(data)
        setLoading(false)
      })
      .catch(error => {
        setError(error.message)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Cargando...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  return (
    <>
      <h2 className='title'>Cotización del Dólar</h2>
      <div className="card">
        {dolarData && dolarData.map((dolar, index) => (
          <div key={index} className="dolar-item">
            <p>Tipo: {dolar.nombre}</p>
            <p>Compra: ${dolar.compra}</p>
            <p>Venta: ${dolar.venta}</p>
          </div>
        ))}
      </div>
    </>
  )
}
