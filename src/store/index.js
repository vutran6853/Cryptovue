import Vue from 'vue';
import Vuex from 'vuex';
import cryptoData from './modules/cryptoData';

//  Load Vuex
Vue.use(Vuex);

//  Create store
export default new Vuex.Store({
  modules: {
    cryptoData
  }
})