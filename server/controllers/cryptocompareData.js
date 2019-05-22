const axios = require('axios');

const getAllTotalByVol = (req, res) => {

  axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=${ process.env.VUE_APP_CRYPTO_KEY }`)
  .then((response) => res.status(200).send(response.data.Data))
  .catch((error) => console.log('Danger unable to fetch getAllTotalByVol' + error));
}

const getAllExchanges = (req, res) => {

  axios.get(`https://min-api.cryptocompare.com/data/exchanges/general?api_key=${ process.env.VUE_APP_CRYPTO_KEY }`)
  .then((response) => res.status(200).send(response.data.Data))
  .catch((error) => console.log('Danger unable to fetch getAllTotalByVol' + error));
}

const getAllNews = (req, res) => {
  res.status(200).send([3, 4])
}

const getSingleCoin = (req, res) => {
  // console.log(req.params)
  axios.get(`  https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${ req.params.coin }&tsyms=USD,EUR`)
  .then((response) => {
    // console.log(response.data)
    res.status(200).send(response.data)
  })
  .catch((error) => console.log('Danger unable to fetch getSingleCoin()' + error));
}

const getHistoryByDate = async(req, res, next) => {
  // console.log(' HIT getHistoryByDate()')

  try {
    let response = await axios.get(`https://min-api.cryptocompare.com/data/${ req.body.date }?fsym=${ req.body.coin_id }&tsym=USD&limit=10`)
    
    if(response) {
      // console.log('response=', response.data.Data)
      res.status(200).send(response.data.Data)
    }
  }
  catch(err) {
    if(err) {
      console.log('Danger! unable to fetch getHistoryByDate()', err);
      res.status(404).send('Danger! unable to fetch getHistoryByDate()')
    }
  }
}

const getAllMining = async(req, res, next) => {

  try {
    let response = await axios.get(`https://min-api.cryptocompare.com/data/mining/contracts/general?api_key=${ process.env.VUE_APP_CRYPTO_KEY }`)
    // console.log(response);
    res.status(200).send(response.data)
  }
  catch(err) {
    res.status(404).send('Danger! unable to fetch getAllMining()', err)
  }
}

module.exports = {
  getAllTotalByVol,
  getAllExchanges,
  getAllNews,
  getSingleCoin,
  getHistoryByDate,
  getAllMining
}