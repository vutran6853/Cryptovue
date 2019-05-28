import axios from 'axios';

const serverURL = 'http://localhost:3015';

//  initiState
const state = {
  title: "This is Crypto App in Vue",
  data: [],
  totalByVol: [],
  exchanges: [],
  news: [],
  singleCoinData: [],
  historyData: [],
  miningData: []
}

// To send methods from store to requester
const getters = {
  getTitle: state => state.title,

  getCurrentPrice: state => state.data,

  getAllTotalByVol: state => state.totalByVol,

  getAllExchanges: state => state.exchanges,

  getAllNews: state => state.news,

  getCoinInfo: state => state.singleCoinData,

  getHistoryData: state => state.historyData,

  getMiningData: state => state.miningData
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
    .catch((err) => console.log('Danger unable to fetch handleGetAllTotalByVol' + err));
  },

  handleGetCurrentTypeForAllCoin({}, payload) {
    let data = { type: payload }

    axios.post(`${ serverURL }/api/getCurrentTypeAllCoin`, data)
    .then((response) => console.log(response))
    // .then((response) => this.commit('setAllTotalByVolData',  response.data))
    .catch((err) => console.log('Danger unable to fetch handleGetCurrentTypeForAllCoin()' + err));

  },

  handleGetAllExchanges() {
    axios.get(`${ serverURL }/api/getAllExchanges`)
    .then((response) => this.commit('setAllExchanges',  response.data))
    .catch((err) => console.log('Danger unable to fetch handleGetAllExchanges' + err));
  },

  handleGetAllNews() {
    axios.get(`${ serverURL }/api/getAllNews`)
    .then((response) => this.commit('setAllNews',  response.data))
    .catch((err) => console.log('Danger unable to fetch handleGetAllNews' + err));
  },

  handleGetSingleCoinInfo({}, payload) {
    this.commit('setSingleCoin', payload)
  },

  handleGetHistoryByDate({}, payload) {
    axios.post(`${ serverURL }/api/getHistoryByDate`, payload)
    .then((response) => {
      console.log(response)
      this.commit('setHistoryData', response.data)
    })
    .catch((err) => console.log('Danger unable to fetch handleGetHistoryByDate()' + err));
  },

  handleGetAllMining() {
    axios.get(`${ serverURL }/api/getAllMining`)
    .then((response) => {
      // console.log(response.data);
      this.commit('setAllMining',  response.data.Data)
    })
    .catch((err) => console.log('Danger unable to fetch handleGetAllMining()' + err));
  },
}

const mutations = {
  setCurrentBTCPriceData: (state, payload) => state.data = payload,

  setAllTotalByVolData: function(state, payload) {
    let result = payload.map((value) => {
      // console.log('VALUE:', value)
      return value
    })
    return state.totalByVol = result
  },

  setAllExchanges: (state, payload) => state.exchanges = payload,

  setAllNews: (state, payload) => state.news = payload,

  setSingleCoin: (state, payload) => state.singleCoinData = payload,

  setHistoryData: (state, payload) => state.historyData = payload,

  setAllMining: function(state, payload) {
    // console.log('payload',)
    // let me =  []


    // for(let key in payload) {
      // console.log(payload[key])
      // if(payload[key].)
      // me.push(payload[key])
    // }
    // console.log(me);
          // console.log(new Set(payload[key].Company))
    // let me2 = new Set(me.map((value) => {
    //   if(!new Set(value.Company)) {
    //     return value
    //   }
    // }))
    // console.log(me2)
    // let result = payload.filter((value, index) => {
    //   console.log(`value=${ value }, index=${ index }`)
    //   // console.dir(value)
    // })
    state.miningData = payload
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}