import React from 'react'

export const Note2 = ({ content, date }) => {
    return (
        <li>
            <h1 className='font-bold'>{content}</h1>
            <small className='block'>{date}</small>
            <br />
        </li>
    )
}