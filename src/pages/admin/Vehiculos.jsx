import React from 'react'

const Vehiculos = () => {
  
    return (
        <div className='flex w-full justify-center items-center bg-green-500'>
            <form className='flex flex-col'>
            <h2 className='font-extrabold'>Formulario creacion vehiculos</h2>
            <input className='p-1 mb-1 rounded-md focus:ring-4 focus:outline-none' type="text" placeholder='Nombre vehiculo'/>
            <input className='p-1 mb-1 rounded-md focus:ring-4 focus:outline-none' type="text" placeholder= 'Marca vehiculo'/>
            <input className='p-1 mb-1 rounded-md focus:ring-4 focus:outline-none' type="text" placeholder= 'Modelo vehiculo'/>
            <button type='submit' className='bg-indigo-500 rounded-xl mt-2 hover:bg-indigo-800'>Enviar datos</button>
            </form>
        </div>
        
    )
}

export default Vehiculos
