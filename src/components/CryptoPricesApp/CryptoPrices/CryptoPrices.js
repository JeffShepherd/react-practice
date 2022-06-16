import React, {Component} from 'react'
import { getCryptoData } from '../../../api.js'
import {reduceUnnecessaryData} from '../../../utilities.js'
import './CryptoPrices.css'

class CryptoPrices extends Component {
  constructor() {
    super()

    this.state = {
      data: [],
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

  render() {
    return (

    <div>
      <p>test</p>
    </div>

    )
  }
}


export default CryptoPrices