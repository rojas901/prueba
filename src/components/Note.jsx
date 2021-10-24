import React from 'react'

export const Note = ({ id, content, date, categories = [] }) => {
    return (
        <>
            <div>{id}</div>
            <div>{content}</div>
            {categories.map(category =>
                <div key={category}>{category}</div>)}
            <p>{date}</p><br />
        </>
    )
}