import React from 'react'
import './PriceCard.css'

const PriceCard = ({symbol,askingPrice,high,low,prevClosePrice,removeFocusCoin}) => {

  return (
      <div className='card'>
        <h3>{symbol.replace('USDT','')}</h3>
        <p>Prev close: ${prevClosePrice}</p>
        <p>Today's high: ${high}</p>
        <p>Today's low: ${low}</p>
        <p>Previous close: ${prevClosePrice}</p>
        <p>Asking price: ${askingPrice}</p>
        <button onClick={(() => removeFocusCoin(symbol))}>🗑</button>
      </div>
  )
}

export default PriceCard