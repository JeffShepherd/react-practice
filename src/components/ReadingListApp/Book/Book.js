import React from 'react'
import './Book.css'

const Book = ({ title, genre, id, deleteBook}) => {

  return (
    <div className='book'>
      <h2>{title}</h2>
      <p>{genre}</p>
      <button onClick={()=>deleteBook(id)}>DELETE</button>

    </div>
  )
}

export default Book