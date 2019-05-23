import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import VueRouter from 'vue-router'
import router from './routes';
import StarRating from 'vue-star-rating'

Vue.use(VueRouter)
Vue.use(StarRating)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
