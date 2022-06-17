import React, {Component} from 'react'
import './CryptoForm.css'

class CryptoForm extends Component {
  constructor() {
    super()

    this.state = {
      symbol: ''
    }
  }

  handleChange = (event) => {
    this.setState({symbol: event.target.value})
  }

  render() {
    return(
      <form>
        <input 
        type='text'
        placeholder='Symbol'
        value={this.state.symbol}
        name='symbol'
        onChange={event => this.handleChange(event)}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default CryptoForm