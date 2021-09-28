import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <h2 className='m-3 text-center text-3xl font-extrabold text-gray-900'>Inicia sesion en tu cuenta</h2>
            <form className='mt-8'>
                <div className='flex flex-col'>
                <input className='appearance-none focus:outline-none mb-2 px-3 py-2 text-gray-900 rounded-md focus:ring-blue-100' type="email" placeholder='pepito@gmail.com' required/>
                <input className='appearance-none focus:outline-none mb-2 px-3 py-2 text-gray-900 rounded-md focus:ring-blue-100' type="password" required />
                </div>
                <div className='flex justify-around'>
                    <div className='px-3'>
                        <label htmlFor='recuerdame'>
                            <input type="checkbox" name='recuerdame'/>
                            Recuerdame
                        </label>
                    </div >
                    <div className='px-3 hover:underline'>
                        <Link>olvidaste tu contraseña</Link>
                    </div>
                </div>
                <div className='flex flex-col items-center'>
                    <div>
                        <Link to='/admin'>
                            <button className='mt-3 transform hover:scale-110 hover:shadow-md bg-blue-500 p-2 rounded-xl' type='submit'>Iniciar sesion</button>
                        </Link>                    
                    </div>
                    <div>o</div>
                    <div>
                        <button className='mt-3 transform hover:scale-110 hover:shadow-md bg-green-500 p-2 rounded-xl'>Continua con google</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login
