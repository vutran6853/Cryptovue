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

// to send methods from store to requester
const getters = {
  getTitle: function(state) {
    return  state.title
  },

  getCurrentPrice: function(state) {
    return state.data
  },

  allTotalByVol: function(state) {
    return state.totalByVol
  },

  allExchanges: function(state) {
    return state.exchanges
  },
  
  allNews: (state) => state.news,

  getCoinInfo: function(state) {
    return state.singleCoinData
  }
}

//  def action creators
const actions = {

 async handleFetchdata() {
  const response =  await axios.get('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR')
          
  this.commit('setCurrentBTCPriceData', response.data)
 },

 handleGetAllTotalByVol() {
// console.log('hit store');
   axios.get(`${ serverURL }/api/getAllTotalByVol`)
   .then((response) => {
    //  console.log(response);
      this.commit('setAllTotalByVolData',  response.data)
   })
   .catch((error) => console.log('Danger unable to fetch handleGetAllTotalByVol' + error));
 },

 handleGetAllExchanges() {
  axios.get(`${ serverURL }/api/getAllExchanges`)
  .then((response) => {
    // console.log(response);
     this.commit('setAllExchanges',  response.data)
  })
  .catch((error) => console.log('Danger unable to fetch handleGetAllExchanges' + error));
  },

  handleGetAllNews() {
    // console.log('hit store 61')
    axios.get(`${ serverURL }/api/getAllNews`)
    .then((response) => {
      // console.log('response', response.data)
      this.commit('setAllNews',  response.data)
    })
    .catch((error) => console.log('Danger unable to fetch handleGetAllNews' + error));
  },

  handleGetSingleCoinInfo({}, value) {
    // console.log('HIT 75', value);

    axios.get(`${ serverURL }/api/getSingleCoin/${ value }`)
    .then((response) => {
      console.log(response)
      this.commit('setSingleCoin', response.data)
    })
    .catch((error) => console.log('Danger unable to fetch handleGetSingleCoinInfo' + error));

  }
}

const mutations = {
  setCurrentBTCPriceData: function(state, payload) {
    // console.log('VALUE: ', payload)
    return state.data = payload
  },

  setAllTotalByVolData: function(state, payload) {
    // console.log('payload', payload);
    let result = payload.map((value) => {
      // console.log('VALUE:', value)
      return value
    })
    // console.log('result', result)
    return state.totalByVol = result
  },

  setAllExchanges: function(state, payload) {
    return state.exchanges = payload
  },

  setAllNews: (state, payload) => state.news = payload,

  setSingleCoin: function(state, payload) {
    return state.singleCoinData = payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}