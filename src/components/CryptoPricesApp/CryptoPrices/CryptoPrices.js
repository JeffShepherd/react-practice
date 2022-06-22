import React, {useState, useEffect} from 'react'
import PriceList from '../PriceList/PriceList'
import CryptoForm from '../CryptoForm/CryptoForm'
import { getCryptoData } from '../../../api.js'
import {reduceUnnecessaryData} from '../../../utilities.js'
import './CryptoPrices.css'

const CryptoPrices = () => {
  const [data, setData] = useState([])
  const [focusCoins, setFocusCoins] = useState(['ETHUSDT','BTCUSDT','DOGEUSDT'])
  const [error, setError] = useState('')

  const loadData = () => {
    getCryptoData()
    .then(data => reduceUnnecessaryData(data))
      .then(data => setData(data))
      .catch(error => setError('An error has occured. Please try again later.'))
  }

  useEffect(() => {
    loadData()
  }, [])
 
  const removeFocusCoin = (symbol) => {
    const updatedFocusCoins = focusCoins.filter(coin => coin !== symbol)
    setFocusCoins(updatedFocusCoins)
  }

  const checkIfCoinDataExists = (symbol) => {
    return data.find(x => x.symbol === symbol) ? true : false
  }

  const addFocusCoin = (symbol) => {
    setFocusCoins([...focusCoins, symbol])
  }

  const addErrorState = (message) => {
    setError(message)
  }

  const removeErrorState = () => {
    setError('')
  }

  return (
    <div>
      <h2>Crypto Prices</h2>
      <PriceList 
      data={data} 
      focusCoins={focusCoins}
      removeFocusCoin={removeFocusCoin}
      />
      <CryptoForm 
      checkIfCoinDataExists={checkIfCoinDataExists}
      addFocusCoin={addFocusCoin}
      addErrorState={addErrorState}
      removeErrorState={removeErrorState}
      />
      {error && <p className='error-message'>{error}</p>}
    </div>
  )
}

export default CryptoPrices