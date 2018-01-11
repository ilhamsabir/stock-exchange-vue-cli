"use strict"

const Api  = {
  Stocks: {
    get: "api/allStocks",
    post: "api/allStocks",
    put: false,
    delete: false
  },
  Portfolio: {
    get: false,
    post: "api/portofolios",
  },
  Collection: {
    get: "api/collections",
    post: "api/collections"
  }
}

export default Api
