import React, {Component} from 'react'
import PriceList from '../PriceList/PriceList'
import CryptoForm from '../CryptoForm/CryptoForm'
import { getCryptoData } from '../../../api.js'
import {reduceUnnecessaryData} from '../../../utilities.js'
import './CryptoPrices.css'

class CryptoPrices extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
      focusCoins: ['ETHUSDT','BTCUSDT','DOGEUSDT'],
      error: ''
    }
  }

  componentDidMount() {
    this.loadData()
  }

  loadData = () => {
    getCryptoData()
    .then(data => reduceUnnecessaryData(data))
      .then(data => this.setState({data: data}))
      .catch(error => this.setState({error: 'An error has occured. Please try again later.'}))
  }

  removeFocusCoin = (symbol) => {
    const updatedFocusCoins = this.state.focusCoins.filter(coin => coin !== symbol)
    this.setState({focusCoins: updatedFocusCoins})
  }

  checkIfCoinDataExists = (symbol) => {
    return this.state.data.find(x => x.symbol === symbol) ? true : false
  }

  addFocusCoin = (symbol) => {
    this.setState({focusCoins: [...this.state.focusCoins, symbol]})
  }

  render() {
    return (

    <div>
      <h2>Crypto Prices</h2>
      <PriceList 
      data={this.state.data} 
      focusCoins={this.state.focusCoins}
      removeFocusCoin={this.removeFocusCoin}
      />
      <CryptoForm 
      checkIfCoinDataExists={this.checkIfCoinDataExists}
      addFocusCoin={this.addFocusCoin}
      />
    </div>

    )
  }
}


export default CryptoPrices