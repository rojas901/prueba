import React from 'react'
import logo from 'media/logop.png'

const Sidebar = () => {
    return (
        <nav className='w-72'>
            <ul className= 'bg-indigo-500 flex justify-around flex-col h-full items-center'>
                <li><img className='h-16' src={logo} alt="logo" /></li>
                <li className='bg-green-500 p-2 rounded-xl transform hover:scale-110 shadow-md'><button>Home</button></li>
                <li className='bg-green-500 p-2 rounded-xl transform hover:scale-110 shadow-md'><button>Clientes</button></li>
                <li className='bg-green-500 p-2 rounded-xl transform hover:scale-110 shadow-md'><button>Vehiculos</button></li>
            </ul>
        </nav>
    )
}

export default Sidebar
