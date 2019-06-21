import Vue from 'vue'
import Vuex from 'vuex'
import cryptoStore from './modules/cryptoStore'

//  Load Vuex
Vue.use(Vuex)

//  Create store
export default new Vuex.Store({
  modules: {
    cryptoStore
  }
})