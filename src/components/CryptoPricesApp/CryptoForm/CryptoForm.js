import React, {useState} from 'react'
import './CryptoForm.css'

const CryptoForm = (props) => {
  const [symbol, setSymbol] = useState('')

  const handleChange = event => {
    setSymbol(event.target.value)
  }

  const clearInput = () => {
    setSymbol('')
  }

  const submitCoin = event => {
    event.preventDefault()
    const upcaseSymbol = symbol.toUpperCase()
    if(props.checkIfCoinDataExists(upcaseSymbol)) {
      props.addFocusCoin(upcaseSymbol)
      props.removeErrorState()
    } else {
      props.addErrorState('No data available for this coin')
    }
    clearInput()
  }

    return(
      <form>
        <input 
        type='text'
        placeholder='Add Symbol to Dashboard'
        value={symbol}
        name='symbol'
        onChange={event => handleChange(event)}
        />
        <button onClick={(event) => submitCoin(event)}>Submit</button>
      </form>
    )
}

export default CryptoForm