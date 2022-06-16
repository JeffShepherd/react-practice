
export const reduceUnnecessaryData = data => {
    return data.map(x => {
      const curr = {symbol: x.symbol, askingPrice: x.askPrice, high: x.highPrice, low: x.lowPrice, prevClosePrice: x.prevClosePrice}
      return curr
    })
  }