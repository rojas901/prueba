import React, { useState } from 'react'

const Index = () => {

    const [contador, setContador] = useState(0)

    const esPar = (contador % 2 === 0)

    return (
        <div className='mx-4'>
            <div>Contenido landing de la pagina</div>
            <button 
            className="bg-gray-700 rounded-lg px-4 text-red-50 transform hover:scale-125 mr-4 shadow-lg"
            onClick={()=>{setContador(contador+1)}}>
                click
            </button>
            <button 
            className="bg-gray-700 rounded-lg px-4 text-red-50 transform hover:scale-125 shadow-lg"
            onClick={()=>{setContador(0)}}>
                reset
            </button>
            <div>{contador}</div>
            <small>{esPar?'Es par':'Es impar'}</small>
        </div>
    )
}

export default Index
