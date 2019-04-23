const axios = require('axios');

const getAllTotalByVol = (req, res) => {
// console.log('hit back end')
  axios.get(`https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD&api_key=${ process.env.VUE_APP_CRYPTO_KEY }`)
  .then((response) => {
    console.log(response.data.Data);
    res.status(200).send(response.data.Data)
  })
  .catch((error) => console.log('Danger unable to fetch getAllTotalByVol' + error));

}

const getAllExchanges = (req, res) => {

  axios.get(`https://min-api.cryptocompare.com/data/exchanges/general?api_key=${ process.env.VUE_APP_CRYPTO_KEY }`)
  .then((response) => {
    // console.log(response.data.Data);
    res.status(200).send(response.data.Data)
  })
  .catch((error) => console.log('Danger unable to fetch getAllTotalByVol' + error));

}

const getAllNews = (req, res) => {
  // console.log('hit backend')
  res.status(200).send([3, 4])
}

module.exports = {
  getAllTotalByVol,
  getAllExchanges,
  getAllNews
}