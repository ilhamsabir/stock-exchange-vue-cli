import axios from 'axios'

// fetch data stocks from sandbox dummy api data
export const fetchStocksData = () => {

  // url api get stocks
  const url = 'http://stock-apis.getsandbox.com/all-stock'

  axios.get(url).then(response => {
    consolel.log(response)
    const data = response.data.data
    return data
  }).catch(e => {
   console.log(e)
  })

  // const data  = [
  //   { id: 1, name: 'GOOG', price: 800},
  //   { id: 2, name: 'AAPL', price: 200},
  //   { id: 3, name: 'BAPL', price: 250}
  // ]
  // return data
}

// default data
// export const allStocks = fetchStocksData()
export const allStocks  = [
  { id: 1, name: 'GOOG', price: 800},
  { id: 2, name: 'AAPL', price: 200},
  { id: 3, name: 'BAPL', price: 250}
]
// export default {
//   fetchStocksData,
//   allStocks
// };
