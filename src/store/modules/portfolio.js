const state = {
  funds: 10000,
  stocksOwned: []
}

const mutations = {
  'BUY_STOCK' (state, order) {
    const { stockId, stockPrice, quantity } = order;
    const record = state.stocksOwned.find(stock => stock.id == stockId);
    // console.log('click buy', { stockId, stockPrice, quantity } )
    if(record) {
      record.quantity += quantity;
    } else {
      // store only id and quantity
      state.stocksOwned.push({
        id: stockId,
        quantity: quantity
      })
    }
    state.funds -= stockPrice * quantity;
  },
  'SELL_STOCK' (state, order) {
    const { stockId, stockPrice, quantity } = order;
    const record = state.stocksOwned.find(stock => stock.id == stockId);
    if(record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocksOwned.splice(state.stocksOwned.indexOf(record),1);
    }
    state.funds += stockPrice * quantity;
  },
  'LOAD_PORTFOLIO' (state, portfolio) {
    state.funds = portfolio.funds;
    state.stocksOwned = portfolio.portfolio ? portfolio.portfolio : [];
    // console.log('state.stocksOwned', state.stocksOwned)
  }
}

// action request load port
const requestLoadPortofolio = ({commit}) => {
  // api url
  const url = Helper.getUrlPrefix() +'/'+ Api.Collection.get;

  // rquest data
  axios.get(url).then(response => {
    // defined on var data
    const order = response.data

    // give value for state stocks
    // state.stocks = data

    // commit to load port
    commit('LOAD_PORTFOLIO', order)

  }).catch(e => {
    // print error
    console.log(e)
  })
}

const actions = {
  buyStock: ({commit}, order) => {
    commit('BUY_STOCK', order);
  },
  sellStock: ({commit}, order) => {
    commit('SELL_STOCK', order)
  },
  loadPortofolio: ({commit}, order) => {
    commit('LOAD_PORTFOLIO', order)
  }
}

const getters = {
  // use getters to access getters from another module
  portfolio: (state, getters) => {
    return state.stocksOwned.map(stockOwned => {
      const record = getters.stocks.find(element => element.id === stockOwned.id);
      return {
        id: stockOwned.id,
        quantity: stockOwned.quantity,
        name: record.name,
        price: record.price
      }
    })
  },
  funds: state => state.funds
}

export default {
  state,
  mutations,
  actions,
  getters
}
