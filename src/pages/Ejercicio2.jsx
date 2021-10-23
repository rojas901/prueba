import React, { useState } from 'react'

const WarningNotUsed = () => {
    return <h1>No se ha usado el contador</h1>
}

const ListOfClicks = ({ clicks }) => {
    return <span>{clicks.join(",")}</span>
}

const InitialCounterState = {
    left: 2,
    right: 4,
    mensaje: 'soy un mensaje'
}


const Ejercicio2 = () => {

    const [counters, setCounters] = useState(InitialCounterState)

    const [clicks, setClicks] = useState([])

    const handleClickerRight = () => {
        const newCountersState = {
            ...counters,
            right: counters.right + 1
        }

        setCounters(newCountersState)
        setClicks(prevClicks => [...prevClicks, 'R'])

    }

    const handleReset = () => {
        setCounters(InitialCounterState)
        setClicks([])
    }

    return (
        <div className='ml-4 mt-4'>
            {counters.left}
            <button
                className='bg-red-600 mx-2 px-4 hover:bg-red-300'
                onClick={() => {
                    setCounters({ ...counters, left: counters.left + 1 })
                    setClicks(prevClicks => [...prevClicks, 'L'])
                }}>
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
            {counters.right}
            <br />
            <span>clicks totales = {clicks.length+InitialCounterState.left+InitialCounterState.right}</span>
            <br />
            {clicks.length === 0 ? <WarningNotUsed /> : <ListOfClicks clicks={clicks} />}
        </div>
    )
}

export default Ejercicio2
