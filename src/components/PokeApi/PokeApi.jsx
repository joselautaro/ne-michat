import React, {useState, useEffect} from 'react'
import axios from 'axios'

export const PokeApi = () => {

    const [pokemon, setPokemon] = useState(null);

    const [id, setId] = useState(1);

    useEffect(() =>{
        const fetchPokemon = async () =>{

            try{
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

                setPokemon({
                    numero: response.data.id,
                    nombre: response.data.name,
                    img: response.data.sprites.front_default,
                })
            }catch(error){
                console.error('Error en la obtención: ', error)
            }
        }
        fetchPokemon();
    }, [id])


    const handleAnterior = () =>{
        if(id > 1) setId(id -1)
    }

    const handleSiguiente = () =>{
        setId(id +1)
    }
  return (
    <div>
        {
            pokemon ? (
                <>
                    <h3>{pokemon.numero}</h3>
                    <h3>{pokemon.nombre}</h3>
                    <img src={pokemon.img} alt={pokemon.img} />
                </>
            ):(
                <h3>Cargando...</h3>
            )
        }
        <div>
            <button onClick={handleAnterior}>Anterior</button>
            <button onClick={handleSiguiente}>Siguiente</button>
        </div>
    </div>
  )
}
