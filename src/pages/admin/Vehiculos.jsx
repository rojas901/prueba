import React, { useEffect, useState } from 'react'

const vehiculosBack = [//Simula el back end
    {
        nombre:'corolla',
        marca:'toyota',
        modelo:1992
    },
    {
        nombre:'Sprint',
        marca:'toyota',
        modelo:1992
    },
    {
        nombre:'chevrolet',
        marca:'toyota',
        modelo:1992
    },
    {
        nombre:'ford',
        marca:'toyota',
        modelo:1992
    }
];

const Vehiculos = () => {

    const [mostrarTabla, setMostrarTabla] = useState(true)
    const [textBoton, setTextBoton] = useState('Crear vehiculo')
    const [vehiculos, setVehiculos] = useState([])//guarda lo que trae el backend

    useEffect(()=>{//vacio que me trae el arreglo
        setVehiculos(vehiculosBack)
    },[])

    useEffect(()=>{
        if(mostrarTabla){
            setTextBoton('Mostrar vehiculos')
        }else{
            setTextBoton('Crear nuevo vehiculo')
        }
    },[mostrarTabla])

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <h2 className='text-3xl'>Pagina admin vehiculos</h2>
            <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className='text-white bg-indigo-500 p-5' type='button'>{textBoton}</button>
            {
                mostrarTabla ? (<TablaVehiculos listaVehiculos={vehiculos}/>):(<FormularioVehiculos/>)//Se agrega dentro del componente la lista
            }            
        </div>              
    )
}

const FormularioVehiculos = () => {
    return (
    <div>
        <h2 className='text-3xl text-center'>Crear vehiculo</h2>
        <form className='grid grid-cols-2'>
        <input className='bg-gray-300 focus-within:outline-none rounded-md p-2 mx-2 my-2' type="text" />
        <input className='bg-gray-300 focus-within:outline-none rounded-md p-2 mx-2 my-2' type="text" />
        <input className='bg-gray-300 focus-within:outline-none rounded-md p-2 mx-2 my-2' type="text" />
        <input className='bg-gray-300 focus-within:outline-none rounded-md p-2 mx-2 my-2' type="text" />
        <button className='col-span-2 bg-gray-500 focus-within:outline-none p-3 my-1' type='button'>Guardar vehiculo</button>
        </form>
    </div>
    )
}

const TablaVehiculos = ({listaVehiculos}) => {//recibe tambien lista vehiculos
    useEffect(()=>{//esta pendiente de los cambios de la lista

    },[listaVehiculos])
    console.log('listado vehiculo')
    return (
        <div>
            <table>
            <thead>
                <tr>
                    <th>Nombre del vehiculo</th>
                    <th>Marca del vehiculo</th>
                    <th>Modelo del vehiculo</th>
                </tr>
            </thead>
            <tbody>
                {listaVehiculos.map((vehiculo)=>{// me mapea todos los datos de la lista del backend
                    return (
                <tr>
                    <td>{vehiculo.nombre}</td>
                    <td>{vehiculo.marca}</td>
                    <td>{vehiculo.modelo}</td>
                </tr>
                    )
                })}                
            </tbody>
        </table>
        </div>        
    )
}

export default Vehiculos
