import React, { useState, useEffect } from 'react'
import { Note2 } from 'components/Note2'
import { getAllNotes, createNote } from 'services/notes'

// const notes = [
//     {
//         userId: 1,
//         id: 1,
//         title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//         body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//       },
//       {
//         userId: 1,
//         id: 2,
//         title: "qui est esse",
//         body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
//       },
//       {
//         userId: 1,
//         id: 3,
//         title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//         body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
//       }
// ]

const Ejercicio4 = () => {
    const [notas, setNotas] = useState([])
    const [newNote, setNewNote] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    useEffect(() => {
        console.log('useEffect')
        setLoading(true)
        getAllNotes()
            .then((notas) => {
                setNotas(notas)
                setLoading(false)
            })
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then((response) => response.json())
        // .then(json => {
        //     setNotas(json)
        //     setLoading(false)
        // })

    }, [])


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
            title: newNote,
            body: newNote,
            userId: 1
        }
        console.log(noteToAddToState)

        setError('')

        createNote(noteToAddToState)
            .then(newNote => {
                setNotas([...notas, newNote])
            }).catch(e => {
                console.log(e)
                setError('La Api ha fallado')
            })

        //setNotas([...notas, noteToAddToState])
        setNewNote("")
    }



    return (
        <div className='mx-4'>
            <h1 className='font-extrabold text-3xl'>Notes</h1><br />
            {loading ? "Cargando" : ""}
            {notas
                .map(note => {
                    return (
                        // <Note key={note.id} id={note.id} content={note.content} date={note.date} />
                        <ul>
                            <Note2 key={note.id} {...note} />
                        </ul>
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
                <button className='bg-yellow-400 px-2 rounded-md my-2'>Crear nota</button>
            </form>            
            {error ? error : ''}
        </div>
    )
}

export default Ejercicio4
