import React from 'react'

export const Note2 = ({ title, body }) => {
    return (
        <li>
            <h1 className='font-bold'>{title}</h1>
            <p>{body}</p>
            <br />
        </li>
    )
}