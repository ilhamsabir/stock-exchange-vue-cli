import Dashboard from './components/dashboard/Dashboard.vue'
import Portfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components/stocks/Stocks.vue'

export const routes = [
  { path: '/', component: Dashboard },
  { path: '/dashboard', component: Dashboard },
  { path: '/portfolio', component: Portfolio },
  { path: '/stocks', component: Stocks }
]
