
export const getCryptoData = () => {
  return fetch('https://api2.binance.com/api/v3/ticker/24hr')
    .then(response => response.json())
}