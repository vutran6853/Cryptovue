import axios from 'axios';

const serverURL = 'http://localhost:3015';

//  initiState
const state = {
  title: "This is Crypto App in Vue",
  data: [],
  totalByVol: [],
  exchanges: [],
  news: [],
  singleCoinData: []
}

// To send methods from store to requester
const getters = {
  getTitle: state => state.title,

  getCurrentPrice: state => state.data,

  getAllTotalByVol: state => state.totalByVol,

  getAllExchanges: state => state.exchanges,

  getAllNews: state => state.news,

  getCoinInfo: state => state.singleCoinData,
}

//  Def action creators
const actions = {
  async handleFetchdata() {
    const response =  await axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
            
    this.commit('setCurrentBTCPriceData', response.data)
  },

  handleGetAllTotalByVol() {
    axios.get(`${ serverURL }/api/getAllTotalByVol`)
    .then((response) => this.commit('setAllTotalByVolData',  response.data))
    .catch((error) => console.log('Danger unable to fetch handleGetAllTotalByVol' + error));
  },

  handleGetAllExchanges() {
    axios.get(`${ serverURL }/api/getAllExchanges`)
    .then((response) => this.commit('setAllExchanges',  response.data))
    .catch((error) => console.log('Danger unable to fetch handleGetAllExchanges' + error));
  },

  handleGetAllNews() {
    axios.get(`${ serverURL }/api/getAllNews`)
    .then((response) => this.commit('setAllNews',  response.data))
    .catch((error) => console.log('Danger unable to fetch handleGetAllNews' + error));
  },

  handleGetSingleCoinInfo({}, payload) {
    this.commit('setSingleCoin', payload)
  }
}

const mutations = {
  setCurrentBTCPriceData: (state, payload) => state.data = payload,

  setAllTotalByVolData: function(state, payload) {
    // console.log('payload', payload);
    let result = payload.map((value) => {
      // console.log('VALUE:', value)
      return value
    })
    return state.totalByVol = result
  },

  setAllExchanges: (state, payload) => state.exchanges = payload,

  setAllNews: (state, payload) => state.news = payload,

  setSingleCoin: (state, payload) => state.singleCoinData = payload,
}

export default {
  state,
  getters,
  actions,
  mutations
}