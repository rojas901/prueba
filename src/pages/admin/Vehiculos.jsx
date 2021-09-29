import React, { useEffect, useState } from 'react'

const Vehiculos = () => {

    //realizar formulario que pida edad y diga si es mayor o menor

    
    const [mostrarCampos, setMostrarCampos] = useState(false)

    //Se usa la negacion dentro del onclick para hacer un toggle y que cada vez que oprima cambe de estado y aparezca y desaparezcan los campos     
    return (
        <div className='flex w-full justify-center items-center bg-green-500'>
            <form className='flex flex-col'>
            <h2 className='font-extrabold'>Mostrar campos</h2>
                        
            <button type='button' onClick={()=>{setMostrarCampos(!mostrarCampos)}} className='bg-indigo-50'>Adicionar campo</button>        
            {
                mostrarCampos && ( //declaracion if simple
                <div>
                    <input className='focus-within:outline-none border bg-gray-200 my2 p-3' placeholder='dato nuevo' type="text" />
                    <input className='focus-within:outline-none border bg-gray-200 my2 p-3' placeholder='dato nuevo' type="text" />
                    <input className='focus-within:outline-none border bg-gray-200 my2 p-3' placeholder='dato nuevo' type="text" />
                    <input className='focus-within:outline-none border bg-gray-200 my2 p-3' placeholder='dato nuevo' type="text" />
                </div>
            )}
            </form>
            
        </div>
        
    )
}

export default Vehiculos
