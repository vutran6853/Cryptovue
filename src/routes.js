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
  mode: "history",
  // base: "/",
  routes: [
    { path: '/',  component: Dashboard },
    { path: '/coin', component: Coin },
    { path: '/exchanges', component: Exchanges },
    { path: '/mining', component: Mining },
    { path: '/wallets', component: Wallets },
    { path: '/news', component: News },
    { path: '/portfolio', component: Portfolio },
    { path: '/overview/:coin_id', component: Overview }
  ]
})

export default router;