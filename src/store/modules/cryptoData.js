import axios from 'axios';

const serverURL = 'http://localhost:3015';


//  initiState
const state = {
  title: "This is Crypto App in Vue",
  data: [],
  totalByVol: [],
  exchanges: [],
  news: []
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
  
  allNews: (state) => state.news
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
    console.log('hit store 61')
    axios.get(`${ serverURL }/api/getAllNews`)
    .then((response) => {
      // console.log('response', response.data)
      this.commit('setAllNews',  response.data)
    })
    .catch((error) => console.log('Danger unable to fetch handleGetAllNews' + error));

  }
}

const mutations = {
  setCurrentBTCPriceData: function(state, value) {
    // console.log('VALUE: ', value)
    return state.data = value
  },

  setAllTotalByVolData: function(state, value) {
    // console.log('value', value);
    let result = value.map((value) => {
      // console.log('VALUE:', value)
      return value.DISPLAY.USD
    })
    // console.log('result', result)
    return state.totalByVol = result
  },

  setAllExchanges: function(state, value) {
    return state.exchanges = value
  },

  setAllNews: (state, value) => state.news = value
}

export default {
  state,
  getters,
  actions,
  mutations
}