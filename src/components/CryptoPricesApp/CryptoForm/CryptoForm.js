import React, {Component} from 'react'
import './CryptoForm.css'

class CryptoForm extends Component {
  constructor({props}) {
    super()

    this.state = {
      symbol: ''
    }
  }

  handleChange = event => {
    this.setState({symbol: event.target.value})
  }

  clearInput = () => {
    this.setState({symbol:''})
  }

  submitCoin = event => {
    event.preventDefault()
    const upcaseSymbol = this.state.symbol.toUpperCase()
    if(this.props.checkIfCoinDataExists(upcaseSymbol)) {
      this.props.addFocusCoin(upcaseSymbol)
    } else {
      console.log('error')
    }
    this.clearInput()
  }

  render() {
    return(
      <form>
        <input 
        type='text'
        placeholder='Add Symbol to Dashboard'
        value={this.state.symbol}
        name='symbol'
        onChange={event => this.handleChange(event)}
        />
        <button onClick={(event) => this.submitCoin(event)}>Submit</button>
      </form>
    )
  }
}

export default CryptoForm