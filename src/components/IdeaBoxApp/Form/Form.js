import React, {useState} from 'react'
import './Form.css'

const Form = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleChange = event => {
    if(event.target.name === 'title') {
      setTitle(event.target.value)
    } else if(event.target.name === 'description') {
      setDescription(event.target.value)
    }
  }

  const submitIdea = event => {
    event.preventDefault()
    const newIdea = {id: Date.now(), title: title, description: description}
    props.addIdea(newIdea)
    clearInputs()
  }

  const clearInputs = () => {
    setTitle('')
    setDescription('')
  }

    return(
      <form>
        <input type='text'
        placeholder='Title'
        name='title'
        value={title}
        onChange={event => handleChange(event)}
        />
        <input type='text'
          placeholder='Description'
          name= 'description'
          value={description}
          onChange={event => handleChange(event)}
        />
        <button 
        onClick={event => submitIdea(event)}
        >SUBMIT</button>
      </form>
    )
}

export default Form