import React, {useState} from 'react'
import './BookForm.css'

const BookForm = (props) => {
  const [title, setTitle] = useState('')
  const [genre, setGenre] = useState('')

  const handleChange = event => {
    if(event.target.name === 'title') {
      setTitle(event.target.value)
    } else if(event.target.name === 'sort') {
      setGenre(event.target.value)
    }
  }

  const submitBook = event => {
    event.preventDefault()
    props.addBook({id:Date.now(),title: title, genre: genre})
    resetInputs()
  }

  const resetInputs= () => {
    setTitle('')
    setGenre('')
  }

    return(
      <form>
        <input
        type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={event => handleChange(event)}
        />
        <label htmlFor="sortFormInput">Genre </label>
        <select value={genre} 
        onChange={event => handleChange(event)} 
        id="sortFormInput" 
        name="sort"
        >
          <option value="" defaultValue></option>
          <option value="Fiction">Fiction</option>
          <option value="NonFiction">NonFiction</option>
          <option value="Educational">Educational</option>
        </select>
        <button
        onClick={(event) => submitBook(event)}
        >Submit</button>
      </form>
    )
}

export default BookForm