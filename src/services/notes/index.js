import axios from "axios";

const base = 'http://localhost:3001/api/notes'

export const getAllNotes = () => {
    return(
        axios.get(base)
        .then(response => {
            const {data} = response
            return data
        })
    )
}

export const createNote = ({title, body, userId})=>{
    return (
        axios.post('https://jsonplaceholder.typicode.com/posts', {title, body, userId})
        .then(response => {
            const {data} =response
            return data
        })
    )
}