import React, { useState } from 'react'

const WarningNotUsed = () => {
    return <h1>No se ha usado el contador</h1>
}

const ListOfClicks = ({ clicks }) => {
    return <span>{clicks.join(",")}</span>
}

const Ejercicio2opt = () => {

    const [clicks, setClicks] = useState([])

    const handleClickerRight = () => {
        setClicks(prevClicks => [...prevClicks, 'R'])
    }

    const handleClickerLeft = () => {
        setClicks(prevClicks => [...prevClicks, 'L'])
    }

    const handleReset = () => {
        setClicks([])
    }

    const left = clicks.filter(click => click === 'L')
    const right = clicks.filter(click => click === 'R')

    return (
        <div className='ml-4 mt-4'>
            {left.length}
            <button
                className='bg-red-600 mx-2 px-4 hover:bg-red-300'
                onClick={handleClickerLeft}>
                left
            </button>
            <button
                className='bg-red-600 mx-2 px-4 hover:bg-red-300'
                onClick={handleReset}>
                reset
            </button>
            <button
                className='bg-red-600 mx-2 px-4 hover:bg-red-300'
                onClick={handleClickerRight}>
                right
            </button>
            {right.length}
            <br />
            <span>clicks totales = {clicks.length}</span>
            <br />
            {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks} />}
        </div>
    )
}

export default Ejercicio2opt
