import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-red-400'>
            <ul className='flex w-full justify-between my-4'>
                <li>navegacion1</li>
                <li>navegacion2</li>
                <li>navegacion3</li>
                <li>navegacion4</li>
                <Link to='/login'>
                    <li>
                        <button className='px-3 bg-purple-500 p-2 text-white rounded-lg shadow-md hover:bg-purple-800'>Iniciar sesion</button>
                    </li>
                </Link>                
            </ul>
        </nav>
    )
}

export default Navbar
