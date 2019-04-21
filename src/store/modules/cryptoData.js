import axios from 'axios';

//  initiState
const state = {
  title: "This is Crypto App in Vue",
  data: [],
  allCoinData: []
}

// to send methods from store to requester
const getters = {
  getTitle: function(state) {
    return  state.title
  },
  getCurrentPrice: function(state) {
    return state.data
  },
  allCoinData: function(state) {
    return state.allCoinData
  }
}

//  def action creators
const actions = {

 async handleFetchdata() {
  const response =  await axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
          
  this.commit('setCurrentBTCPriceData', response.data)
 },

 handleGetAllCoin() {
   console.log('hit 29');
   this.commit('setAllCoinData',  ['Coin1', 'Coin2'])
 }
}

const mutations = {
  setCurrentBTCPriceData: function(state, value) {
    console.log('VALUE: ', value)
    return state.data = value
  },
  setAllCoinData: function(state, value) {
    console.log('value', value);
    console.log(state);
    return state.allCoinData = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}