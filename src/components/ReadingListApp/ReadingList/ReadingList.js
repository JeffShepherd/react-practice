import React, {Component} from 'react'
import List from '../List/List'
import BookForm from '../BookForm/BookForm'
import './ReadingList.css'

class ReadingList extends Component {
  constructor() {
    super()
    this.state = {
      books: [
        {id:11,title:'An Alien Goes to Church',genre:'Fiction'},
        {id:22,title:'Biography of Benjamin Franklin',genre:'NonFiction'},
        {id:33,title:'WWII: Battle of the Bulge',genre:'Educational'}
      ]
    }
  }

  deleteBook = (id) => {
    const updatedList = this.state.books.filter(book => book.id !== id)
    this.setState({books: updatedList})
  }

  addBook = (book) => {
    this.setState({books: [book,...this.state.books]})
  }

  render() {
    return (
      <div>
        <h2>My Reading List</h2>
        <List 
          books={this.state.books}
          deleteBook={this.deleteBook}
        />
        <BookForm 
        addBook={this.addBook}
        />
      </div>
    )
  }


}


export default ReadingList