<template>
  <div>
    <div class="main_container">
      <div class="side_panel_coin">
        <div class="coin_image">
          <p>1 {{ coinDATA.CoinInfo.Name }}=</p>
          <img v-bind:src="'https://www.cryptocompare.com' + coinDATA.DISPLAY.USD.IMAGEURL" alt="broke"/>
        </div>
        <p>{{ coinDATA.CoinInfo.FullName }}</p>
      </div>


      <div class="center_panelInfo">
        <div class="header_price">
          <p>Price: {{ coinDATA.DISPLAY.USD.HIGH24HOUR }}</p>
        </div>

        <div class="header_grid_item header">
          <p>MKTCAP:</p>
          <p>LASTVOLUME:</p>
          <p>OPEN24HOUR:</p> 
          <p>Low/High 24h:</p>
        </div>
        <div class="header_grid_item">
          <p>{{ coinDATA.DISPLAY.USD.MKTCAP }}</p>
          <p>{{ coinDATA.DISPLAY.USD.LASTVOLUME }}</p>
          <p>{{ coinDATA.DISPLAY.USD.OPEN24HOUR }}</p>
          <p>{{ coinDATA.DISPLAY.USD.LOW24HOUR }} - {{ coinDATA.DISPLAY.USD.HIGH24HOUR }}</p>
        </div>

        <div class="">
          <p>True</p>
          <div>
            <Bars class="chartContainer" v-bind:chart-data="datacollection"></Bars>
          </div>
       
        </div>

        <div class="btn_time" v-for="(value, index) in timeDate" v-bind:key="index">
          <button @click="handleFetchCoinInTime(value), fillData()">1 {{ index }}</button>
        </div>
      </div>
    </div>
        <!-- <p>HIGHHOUR: {{  coinDATA.DISPLAY.USD.HIGHHOUR }}</p> -->
        <!-- <p>CHANGE24HOUR: {{  coinDATA.DISPLAY.USD.CHANGE24HOUR }}</p> -->
        <!-- <p>CHANGEDAY: {{  coinDATA.DISPLAY.USD.CHANGEDAY }}</p> -->
        <!-- <p>CHANGEPCT24HOUR: {{  coinDATA.DISPLAY.USD.CHANGEPCT24HOUR }}</p> -->
        <!-- <p>FROMSYMBOL: {{  coinDATA.DISPLAY.USD.FROMSYMBOL }}</p> -->
        <!-- <img :src="https://www.cryptocompare.com + this. coinDATA.DISPLAY.USD.IMAGEURL" alt=""/> -->
        <!-- <img v-bind:src="'https://www.cryptocompare.com' +  coinDATA.DISPLAY.USD.IMAGEURL" alt="broke"/> -->
        <!-- <p>HIGHDAY: {{  coinDATA.DISPLAY.USD.HIGHDAY }}</p> -->
        <!-- <p>LASTMARKET: {{  coinDATA.DISPLAY.USD.LASTMARKET }}</p> -->
        <!-- <p>LOWDAY: {{  coinDATA.DISPLAY.USD.LOWDAY }}</p> -->
        <!-- <p>LOWHOUR: {{  coinDATA.DISPLAY.USD.LOWHOUR }}</p> -->
        <!-- <p>MARKET: {{  coinDATA.DISPLAY.USD.MARKET }}</p> -->
        <!-- <p>CHANGEDAY: {{  coinDATA.DISPLAY.USD.CHANGEDAY }}</p> -->
      <!-- <div @click='handleFetchSingleCoininfo(coinDATA.CoinInfo.Internal)' class="coinContainer coinHover" v-for='coinDATA in coins' v-bind:key='coinDATA.CoinInfo.Internal'> -->
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Bars from '../chart/Chart.js'

export default {
  name: "Overview",
  components: {
    Bars
  },
  data() {
    return {
      timeDate:  {
        minute: 'histominute', 
        hour: 'histohour', 
        day: 'histoday'
      },
      tempData: [],
      datacollection: null
    }
  },

  mounted() {
    let data = { date: 'histoday', coin_id: this.coinDATA.CoinInfo.Name }
    this.$store.dispatch('handleGetHistoryByDate', data)
    this.fillData()
  },

  methods: {
    handleFetchCoinInTime(value) {
      let data = { date: value, coin_id: this.coinDATA.CoinInfo.Name }
      this.$store.dispatch('handleGetHistoryByDate', data)
    },

    fillData () {
      console.log('this', this.$store.getters.getHistoryData)
      this.datacollection = {
        labels: this.historyDATA.map((value) => value.high),
        datasets: [
          {
            label: 'Data One',
            backgroundColor: '#f87979',
            data: this.historyDATA.map((value) => value.high)
          }
        ]
      }
    }
  },

  computed: {
    ...mapGetters({ 
      coinDATA: 'getCoinInfo',
      historyDATA: 'getHistoryData'  
    })
  } 
}
</script>

<style lang='scss' scroped>
$test_border: 2px solid red;

.main_container {
  border: 2px solid yellowgreen;
  display: grid;
  grid-template-columns: 150px 1fr;

  .side_panel_coin {
    // border: $test_border;
    // float: left;
    // display: inline-block;
    text-align: center;
    // flex-direction: row;
    // height: 80vh;
    // width: 15%;
    .coin_image {
      border: 2px solid blue;
      // text-align: center;

      p {
        background-color: lightblue;
        // width: 60px;
        float: right;
        // text-align: right;
        // margin-left: 68px;
        // height: 100px;
      }

      img {
        // border: $test_border;
        height: 8rem;
        width: 8rem;
      }
    }
  }

  .center_panelInfo {
    // border: 3px solid red;
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr;

    .header_price {
      border: 2px solid black;
      font-size: 20px;
    }

    .header_grid_item {
      // border: 3px solid red;
      display: grid;
      grid-template-columns: 150px 150px 150px 150px;
      // grid-template-rows: 20px 20px;
      font-size: 15px;
      grid-gap: 20px;
      // grid-auto-rows: 20px;
      // grid-auto-columns: 40px;
      margin-left: 30px;
      // margin-top: 50px;
    }

    .header {
      // border: 3px solid red;
      margin-top: 20px;

      p {
        background-color: lightcoral;
        // height: 10px/;
        // width: 40%;
        // font-size: 14px;
      }
    }

    p {
      // border: 1px solid blue;
      // width: 10px;
      // height: 20px;
      // font-size: 1px;
      margin: 0px;
    }

    .btn_time {
      border: 1px solid blue;
      display: inline-table;
      // grid-auto-rows: 20px;

      // flex-direction: column;
      // grid-template-columns: 1fr 1fr;
      // float: right;
      margin-top: 100px;
      // margin-left: 10px;
      // button {
        // display: grid;
        // grid-template-columns: 1fr 1fr;

      // }
    }
  }
}

.chartContainer {
  border: 2px solid red;
  height: 20rem;
  width: 20rem;
}


</style>
