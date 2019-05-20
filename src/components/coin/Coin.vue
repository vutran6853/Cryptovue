<template>
  <div>
    <p>Coin Components</p>
    <p class="testBox">TestBox</p>
    <div v-if='coins[0]'>
      <p>True</p>
      <div class="headerGrid">
        <p>#</p>
        <p>Coin</p>
        <p>Price</p> 
        <p>Total Vol.24</p>
        <p>Chg.24h</p>
      </div>
      <router-link v-bind:to="`overview/${ displayCoin.CoinInfo.Internal }`" v-for='(displayCoin, index) in coins' v-bind:key='displayCoin.CoinInfo.Internal'> 
      <div class="coinGrid coinHover" @click='handleFetchSingleCoininfo(coins[index])'>
        <p>{{ index + 1 }}</p>
        <!-- <p ></p> -->
        <img v-bind:src="'https://www.cryptocompare.com' + displayCoin.DISPLAY.USD.IMAGEURL" alt="broke"/>
        <p>{{ displayCoin.DISPLAY.USD.HIGH24HOUR }}</p>
        <p>{{ displayCoin.DISPLAY.USD.CHANGE24HOUR }}</p>
        <p>{{ displayCoin.DISPLAY.USD.CHANGEPCT24HOUR }}</p>
      </div>

        <!-- <div @click='handleFetchSingleCoininfo(displayCoin.CoinInfo.Internal)' class="coinContainer coinHover"> -->
          <!-- <p>CHANGE24HOUR: {{ displayCoin.DISPLAY.USD.CHANGE24HOUR }}</p> -->
          <!-- <p>CHANGEDAY: {{ displayCoin.DISPLAY.USD.CHANGEDAY }}</p> -->
          <!-- <p>CHANGEPCT24HOUR: {{ displayCoin.DISPLAY.USD.CHANGEPCT24HOUR }}</p> -->
          <!-- <p>FROMSYMBOL: {{ displayCoin.DISPLAY.USD.FROMSYMBOL }}</p> -->
          <!-- <p>HIGH24HOUR: {{ displayCoin.DISPLAY.USD.HIGH24HOUR }}</p> -->
          <!-- <img :src="https://www.cryptocompare.com + displayCoin.DISPLAY.USD.IMAGEURL" alt=""/> -->
          <!-- <p>HIGHDAY: {{ displayCoin.DISPLAY.USD.HIGHDAY }}</p> -->
          <!-- <p>HIGHHOUR: {{ displayCoin.DISPLAY.USD.HIGHHOUR }}</p> -->
          <!-- <p>LASTMARKET: {{ displayCoin.DISPLAY.USD.LASTMARKET }}</p> -->
          <!-- <p>LASTVOLUME: {{ displayCoin.DISPLAY.USD.LASTVOLUME }}</p> -->
          <!-- <p>LOW24HOUR: {{ displayCoin.DISPLAY.USD.LOW24HOUR }}</p> -->
          <!-- <p>LOWDAY: {{ displayCoin.DISPLAY.USD.LOWDAY }}</p> -->
          <!-- <p>LOWHOUR: {{ displayCoin.DISPLAY.USD.LOWHOUR }}</p> -->
          <!-- <p>MARKET: {{ displayCoin.DISPLAY.USD.MARKET }}</p> -->
          <!-- <p>MKTCAP: {{ displayCoin.DISPLAY.USD.MKTCAP }}</p> -->
          <!-- <p>OPEN24HOUR: {{ displayCoin.DISPLAY.USD.OPEN24HOUR }}</p> -->
        <!-- </div> -->
      </router-link>
    </div>
    <div v-else=''>
      <p>False</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Coin",

  // mapAction will import from store
  methods: {
    ...mapActions(['handleGetAllTotalByVol']),

    handleFetchSingleCoininfo: function(coinInfo) {
      this.$store.dispatch('handleGetSingleCoinInfo', coinInfo)
    }
  },
  
  // Invoke methods
  created() {
    this.handleGetAllTotalByVol()
  },
  
  // will bind store to this
  // mapGetters in computed will bind || connenct to this components
  computed: {
    ...mapGetters({ coins: 'getAllTotalByVol' })
  },
  // mounted: {
  //      ...mapState(['allCoinData'])
 
  // }
}
</script>

<style lang="scss">
$color: #333;
$testBox-border: 1px solid blue;

.testBox {
  border: $testBox-border;
}

.headerGrid {
  // border: 1px solid blue;
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr;

  
  p {
    border: 1px solid red;
    text-align: left;
  }
}

.coinGrid {
  border: $testBox-border;
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr;

  p {
    // border: 1px solid red;s
    margin: 0px;
  }

  // grid-row: 2fr;
  // grid-gap: 100px;
  // grid-auto-flow: auto;
  // grid-gap: 100rem !important;
  // grid-template-rows: 1fr;
  // display: inline-table;
  // grid-auto-rows: auto;
  // margin-bottom: 1rem;
  // height: 50%;
  // width: 20rem;

  img {
      border: 1px solid lightcoral;
      height: 2rem;
      width: 2rem;
  }
}

.coinHover:hover {
  background-color: red;
}

a {
  // background-color: lightblue;
  text-decoration: none;
}

</style>
