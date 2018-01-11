import axios from 'axios'
import * as Helper from './../../helper/helper.js'
import Api from './../../helper/api.js'


const state = {
  stocks: []
};

// action request init stocks
const initStocks = ({commit}) => {
  // api url
  const url = Helper.getUrlPrefix() +'/'+ Api.Stocks.get;

  // rquest data
  // axios.get(url).then(response => {
  axios.get('./stocks.json').then(response => {
    // defined on var data
    const data = response.data

    // give value for state stocks
    state.stocks = data

    // commit to load stocks
    commit('LOAD_STOCKS', state.stocks)

  }).catch(e => {
    // print error
    console.log(e)
  })
}

// defined actions
const actions = {
  initStocks: initStocks,
  randomizeStocks: ({commit}) => {
    commit('RANDOMIZE_STOCKS');
  }
}

// = reducers
// modify state in store
const mutations = {
  'LOAD_STOCKS' (state, stocks) {
    // state.stocks = Stocks.allStocks;
  },
  'RANDOMIZE_STOCKS' (state) {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (Math.random() + 0.5))
    });
  },
};




const getters = {
  stocks: state => {
    return state.stocks;
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
}
