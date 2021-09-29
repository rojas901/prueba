import React, { useEffect, useState } from 'react'

const Vehiculos = () => {

    //estado, es una variable constantemente cambiando

    const [nombreVehiculo, setNombreVehiculo] = useState("valor inicial");//dentro de los corchetes viene una variable que hace de getter y tiene la informacion, y un metodo setter para cambiarla, y dentro del usestate el estado inicial

    useEffect(()=>{//si no hay argumentos o dependencias dentro de los corchetes solo se ejecuta una vez al abrir la pagina o se actualice
        console.log('Hola, soy un effect');
    },[]);

    useEffect(()=>{//responde cada vez que se va cambiando la variable nombre vehiculo
        console.log("cambia cada que cambia la variable vehiculo")
        console.log("nombre vehiculo: ", nombreVehiculo)
    },[nombreVehiculo])

    // useEffect(()=>{
    //     console.log('me ejecuto siempre lo que puede ocasionar un bucle infinito')
    // })
  
    return (
        <div className='flex w-full justify-center items-center bg-green-500'>
            <form className='flex flex-col'>
            <h2 className='font-extrabold'>Formulario creacion vehiculos</h2>
            <input onChange={(e)=>{//esta funcion flecha me permite capturar todo lo que ingres por los inputs, e es una variable cualquiera, al incluir la funcion set cambia varaibles
                setNombreVehiculo(e.target.value)
            }} value={nombreVehiculo} //esta variable me ayuda para que salga el valor inicial del usestate
            className='p-1 mb-1 rounded-md focus:ring-4 focus:outline-none' type="text" placeholder='Nombre vehiculo'/>
            <input onChange={(e)=>{
                console.log(e.target.value)
            }} className='p-1 mb-1 rounded-md focus:ring-4 focus:outline-none' type="text" placeholder= 'Marca vehiculo'/>
            <input onChange={(e)=>{
                console.log(e.target.value)
            }} className='p-1 mb-1 rounded-md focus:ring-4 focus:outline-none' type="text" placeholder= 'Modelo vehiculo'/>
            <button onClick={(e)=>{//esta funcion on click me ayuda a mostra lo que se esta guardando en nombre vehiculo
                console.log('el valor de nombre vehiculo: ', nombreVehiculo)
            }} type='button' className='bg-indigo-500 rounded-xl mt-2 hover:bg-indigo-800'>Enviar datos</button>
            </form>
        </div>
        
    )
}

export default Vehiculos
