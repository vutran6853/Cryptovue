import Vue from 'vue'
import App from './App.vue'
import store from './store/index';
import VueRouter from 'vue-router'
import router from './routes';

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
