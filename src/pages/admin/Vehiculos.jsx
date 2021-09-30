import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const [colorBoton, setColorBoton] = useState('indigo')

    useEffect(()=>{//vacio que me trae el arreglo
        setVehiculos(vehiculosBack)
    },[])

    useEffect(()=>{
        if(mostrarTabla){
            setTextBoton('Mostrar vehiculos')
            setColorBoton('indigo')
        }else{
            setTextBoton('Crear nuevo vehiculo')
            setColorBoton('red')
        }
    },[mostrarTabla])

 
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <h2 className='text-3xl'>Pagina admin vehiculos</h2>
            <button onClick={()=>{setMostrarTabla(!mostrarTabla)}} className={`text-white bg-${colorBoton}-500 p-4 m-3 rounded-md`} type='button'>{textBoton}</button>
            {
                mostrarTabla ? (<TablaVehiculos listaVehiculos={vehiculos}/>)
                :(<FormularioVehiculos 
                    funcionMostrarTabla={setMostrarTabla}
                    listaVehiculos={vehiculos} 
                    funcionAgregarVehiculo={setVehiculos}/>)//establece los vehiculos en la tabla
            }
            <ToastContainer position="bottom-center" autoClose={3000}/>            
        </div>              
    )
}

const FormularioVehiculos = ({funcionMostrarTabla, listaVehiculos, funcionAgregarVehiculo}) => {
    const [nombre, setNombre] = useState();
    const [marca, setMarca] = useState();
    const [modelo, setModelo] = useState();

    const enviarAlBackend = () => {
        console.log('nombre', nombre, 'marca', marca, 'modelo', modelo)
        toast.success("Registro exitoso")
        funcionMostrarTabla(true);
        funcionAgregarVehiculo([...listaVehiculos, {nombre:nombre, marca:marca, modelo:modelo}])
    }

    return (
    <div>
        <h2 className='text-3xl text-center'>Crear vehiculo</h2>
        <form className='flex flex-col'>
        <label className="flex flex-col items-center" htmlFor="nombre">
            nombre vehiculo
            <input 
            value={nombre} 
            onChange={(e)=>{setNombre(e.target.value)}} name="nombre" className='bg-gray-300 focus-within:outline-none rounded-md p-2 mx-2 my-2' type="text" />
        </label>
        <label className="flex flex-col items-center" htmlFor="marca">
            nombre marca
            <select 
            value={marca} 
            onChange={(e)=>{setMarca(e.target.value)}} className='bg-gray-300 focus-within:outline-none rounded-md p-2 mx-2 my-2' name="marca">
                <option disabled>Seleccione una opcion</option>
                <option>Ford</option>
                <option>Chevrolet</option>
                <option>Mazda</option>
            </select>
        </label>
        <label className="flex flex-col items-center" htmlFor="modelo">
            modelo
            <input 
            value={modelo} 
            onChange={(e)=>{setModelo(e.target.value)}} name="modelo" className='bg-gray-300 focus-within:outline-none rounded-md p-2 mx-2 my-2' type="number" min={1990} max={2022} />
        </label>   
        <button 
        onClick={()=>{enviarAlBackend()}}
        className='col-span-2 bg-gray-500 focus-within:outline-none p-3 my-1' type='button'>Guardar vehiculo</button>
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
