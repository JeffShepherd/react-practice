import React, {Component} from 'react'
import './BookForm.css'

class BookForm extends Component {
  constructor({props}) {
    super()
    this.state = {
      title: '',
      genre: ''
    }
  }

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleDropdownChange = event => {
    this.setState({genre: event.target.value})
  }

  submitBook = event => {
    event.preventDefault()
    this.props.addBook({id:Date.now(),...this.state})
    this.resetInputs()
  }

  resetInputs= () => {
    this.setState({title:'',genre:''})
  }

  render() {
    return(
      <form>
        <input
        type='text'
        placeholder='Title'
        name='title'
        value={this.state.title}
        onChange={event => this.handleInputChange(event)}
        />
        <label htmlFor="sortFormInput">Genre </label>
        <select value={this.state.genre} 
        onChange={event => this.handleDropdownChange(event)} 
        id="sortFormInput" 
        name="sort"
        >
          <option value="" defaultValue></option>
          <option value="Fiction">Fiction</option>
          <option value="NonFiction">NonFiction</option>
          <option value="Educational">Educational</option>
        </select>
        <button
        onClick={(event)=>this.submitBook(event)}
        >Submit</button>
      </form>
    )
  }

}

export default BookForm