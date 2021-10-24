import React, { useState } from 'react'
import { Note } from 'components/Note'

const notes = [
    {
        id: 1,
        content: 'HTML is easy',
        date: '2019-05-30T17:30:30.0982',
        important: true
    },
    {
        id: 2,
        content: 'Browser can execute only javascript',
        date: '2019-05-30T18:39:34.0912',
        important: false,
        categories: ['sport', 'terror']
    },
    {
        id: 3,
        content: 'GET and POST are the most important methods of HTML',
        date: '2019-05-30T19:20:14.2982',
        important: true
    }
]

const Ejercicio3 = () => {
    const [notas, setNotas] = useState(notes)
    const [newNote, setNewNote]=useState('')
    const [showAll, setShowAll]=useState(true)

    const handleChange = (evento) => {
        setNewNote(evento.target.value)
    }

    // const handleClick = (evento) => {
    //     const noteToAddToState = {
    //         id: notas.length + 1,
    //         content: newNote,
    //         date: new Date().toISOString(),
    //         important: Math.random() < 0.5
    //     }
    //     console.log(noteToAddToState)

    //     setNotas([...notas, noteToAddToState])
    //     setNewNote("")
    // }

    const handleSubmit = (evento) => {
        evento.preventDefault()
        const noteToAddToState = {
            id: notas.length + 1,
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5
        }
        console.log(noteToAddToState)

        setNotas([...notas, noteToAddToState])
        setNewNote("")
    }

    const handleShowAll = () => {
        setShowAll(()=>!showAll)
    }

    return (
        <div>
            <h1>Notes</h1>
            <button 
            className='bg-yellow-400 px-2 rounded-md my-2'
            onClick={handleShowAll}>{showAll ? 'Show only important':'Show all'}</button>
            {notas
            .filter(note => {return (showAll ? note : note.important===true)})
            .map(note => {
                return (
                    // <Note key={note.id} id={note.id} content={note.content} date={note.date} />
                    <Note key={note.id} {...note} />
                )
            }
            )}
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleChange} value={newNote} /><br />
                {/* <button 
                className='bg-yellow-400 px-2 rounded-md my-2'
                onClick={handleClick}>
                    Crear nota
                </button> */}
                <button className='bg-yellow-400 px-2 rounded-md my-2'>Crear venta</button>
            </form>
        </div>
    )
}

export default Ejercicio3
