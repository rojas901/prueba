import React, { useEffect, useState } from 'react'

const Vehiculos = () => {

    //realizar formulario que pida edad y diga si es mayor o menor

    const [edad, setEdad] = useState(0);//dentro de los corchetes viene una variable que hace de getter y tiene la informacion, y un metodo setter para cambiarla, y dentro del usestate el estado inicial
    const [esMenor, setEsMenor] = useState(false); //Esta variable almacena el estado en booleano para renderizar abajo

    useEffect(()=>{
        if(edad >= 18){
            setEsMenor(false)
        }else{
            setEsMenor(true)
        } 
    },[edad])
          
    return (
        <div className='flex w-full justify-center items-center bg-green-500'>
            <form className='flex flex-col'>
            <h2 className='font-extrabold'>Formulario edad</h2>
            <label htmlFor="edad">
                ingresa tu edad
            </label>
            <input value={edad} onChange={(e)=>{
                setEdad(e.target.value)
            }} type="number" name="edad"/>
            {//Entre llaves puedo usar codigo javascript y uso un operado ternario para renderizar lo que necesito
                esMenor ? (<span className='text-3xl text-red-600'>Usted es menor de edad</span>)
                :(<span className='text-3xl text-purple-600'>Usted es mayor de edad</span>)
            }            
            </form>
        </div>
        
    )
}

export default Vehiculos
