require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = 3015
const app = express()

const { getAllTotalByVol, 
        getAllExchanges, 
        getAllNews, 
        getSingleCoin, 
        getHistoryByDate,
        getAllMining,
        getCurrentTypeAllCoin } = require('./controllers/cryptocompareData')

app.use(express.json())
app.use(cors())

//  API Endpoint Crypto
app.get('/api/getAllTotalByVol', getAllTotalByVol)
app.get('/api/getAllExchanges', getAllExchanges)
app.get('/api/getAllNews', getAllNews)
app.get('/api/getSingleCoin/:coin', getSingleCoin)
app.get('/api/getAllMining', getAllMining)

app.post('/api/getHistoryByDate', getHistoryByDate)
app.post('/api/getCurrentTypeAllCoin', getCurrentTypeAllCoin)

app.listen(port, () => console.log('Server is UP and listen on port ' + port))
