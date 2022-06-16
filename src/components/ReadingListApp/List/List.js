import React from 'react'
import Book from '../Book/Book'
import './List.css'

const List = ({ books,deleteBook }) => {

  const bookList = books.map(book => {
    return(
      <Book 
        title={book.title}
        genre={book.genre}
        id={book.id}
        key={book.id}
        deleteBook={deleteBook}
      />
    )
  })


  return (
    <div className='book-container'>
      {bookList}
    </div>
  )

}

export default List