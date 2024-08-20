import React, { useState } from 'react'
import './Counter.css'
export const Counter = () => {

    // declaramos variable= desestructurar y nombrar el estado
    const [contador, setContador] = useState(0)

    const [modoOscuro, setModoOscuro] = useState(true)

    const incrementar = () => {
        setContador(contador + 1)
    }

    const decrementar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const reiniciar = () => {
        setContador(0)
    }

    const alternarModo = () => {
        setModoOscuro(!modoOscuro)
    }

    return (
        <div style={{
            backgroundColor: modoOscuro ? '#333' : '#FFF',
            color: modoOscuro ? '#FFF' : '#333',
            transition: 'background-color 1s, color 1s',
        }}>
            <p>{contador}</p>
            <button onClick={decrementar}>➖</button>
            <button onClick={incrementar}>➕</button>
            <button onClick={reiniciar}>↩</button>
            <br />
            <button onClick={alternarModo} style={{ marginTop: '20px' }}>
                {modoOscuro ? 'Modo Claro' : 'Modo Oscuro'}
            </button>
        </div>
    )
}


