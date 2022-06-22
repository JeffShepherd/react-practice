import React, {useState} from 'react'
import List from '../List/List'
import BookForm from '../BookForm/BookForm'
import './ReadingList.css'

const ReadingList = () => {
  const [books, setBooks] = useState([
    {id:11,title:'An Alien Goes to Church',genre:'Fiction'},
    {id:22,title:'Biography of Benjamin Franklin',genre:'NonFiction'},
    {id:33,title:'WWII: Battle of the Bulge',genre:'Educational'}
  ])

  const deleteBook = id => {
    const updatedList = books.filter(book => book.id !== id)
    setBooks(updatedList)
  }

  const addBook = book => {
    setBooks([book,...books])
  }

  return (
    <div>
      <h2>My Reading List</h2>
      <List 
        books={books}
        deleteBook={deleteBook}
      />
      <BookForm 
      addBook={addBook}
      />
    </div>
  )
}

export default ReadingList