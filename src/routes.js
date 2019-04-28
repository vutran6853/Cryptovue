import VueRouter from 'vue-router';
import Dashboard from './components/dashboard/Dashboard.vue';
import Coin from './components/coin/Coin.vue';
import Exchanges from './components/exchanges/Exchanges.vue';
import Mining from './components/mining/Mining.vue';
import Wallets from './components/wallets/Wallets.vue';
import News from './components/news/News.vue';
import Portfolio from './components/portfolio/Portfolio.vue';
import Overview from './components/coin/Overview.vue';

const router = new VueRouter({
  routes: [
    { path: '/', component: Dashboard },
    { path: '/Coin', component: Coin },
    { path: '/Exchanges', component: Exchanges },
    { path: '/Mining', component: Mining },
    { path: '/Wallets', component: Wallets },
    { path: '/News', component: News },
    { path: '/Portfolio', component: Portfolio },
    { path: '/overview', component: Overview }
  ]
})

export default router;