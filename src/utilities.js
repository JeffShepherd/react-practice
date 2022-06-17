
export const reduceUnnecessaryData = data => {
    return data.map(x => {
      const curr = {
        symbol: x.symbol, 
        askingPrice: Math.round(x.askPrice * 1000) / 1000, 
        high: Math.round(x.highPrice * 1000) / 1000, 
        low: Math.round(x.lowPrice * 1000) / 1000, 
        prevClosePrice: Math.round(x.prevClosePrice * 1000) / 1000
      }
      
      return curr
    })
  }