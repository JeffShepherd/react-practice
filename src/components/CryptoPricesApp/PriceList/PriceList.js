import React from 'react'
import PriceCard from '../PriceCard/PriceCard'
import './PriceList.css'

const PriceList = ({data, focusCoins,removeFocusCoin}) => {
  const focusCoinData = data.filter(coin => focusCoins.includes(coin.symbol))

  const focusCoinDisplay = focusCoinData.map(coin => {
    return(
      <PriceCard
        symbol={coin.symbol}
        askingPrice={coin.askingPrice}
        high={coin.high}
        low={coin.low}
        prevClosePrice={coin.prevClosePrice}
        key={coin.symbol}
        removeFocusCoin={removeFocusCoin}
      />
    )
  })

  return (
    <div className='price-container'>
      {focusCoinDisplay}
    </div>
  )
}

export default PriceList