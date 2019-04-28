<template>
  <div>
    <p>Coin Components</p>
    <p class="testBox">TestBox</p>
    <div v-if='coins[0]'>
      <p>True</p>
      <router-link to="/overview">
        <div @click='handleSingleCoininfo(displayCoin.CoinInfo.Internal)' class="coinContainer coinHover" v-for='displayCoin in coins' v-bind:key='displayCoin.CoinInfo.Internal'>
          <p>CHANGE24HOUR: {{ displayCoin.DISPLAY.USD.CHANGE24HOUR }}</p>
          <p>CHANGEDAY: {{ displayCoin.DISPLAY.USD.CHANGEDAY }}</p>
          <p>CHANGEPCT24HOUR: {{ displayCoin.DISPLAY.USD.CHANGEPCT24HOUR }}</p>
          <p>FROMSYMBOL: {{ displayCoin.DISPLAY.USD.FROMSYMBOL }}</p>
          <p>HIGH24HOUR: {{ displayCoin.DISPLAY.USD.HIGH24HOUR }}</p>
          <!-- <img :src="https://www.cryptocompare.com + displayCoin.DISPLAY.USD.IMAGEURL" alt=""/> -->
          <img v-bind:src="'https://www.cryptocompare.com' + displayCoin.DISPLAY.USD.IMAGEURL" alt="broke"/>
          <p>HIGHDAY: {{ displayCoin.DISPLAY.USD.HIGHDAY }}</p>
          <p>HIGHHOUR: {{ displayCoin.DISPLAY.USD.HIGHHOUR }}</p>
          <p>LASTMARKET: {{ displayCoin.DISPLAY.USD.LASTMARKET }}</p>
          <p>LASTVOLUME: {{ displayCoin.DISPLAY.USD.LASTVOLUME }}</p>
          <p>LOW24HOUR: {{ displayCoin.DISPLAY.USD.LOW24HOUR }}</p>
          <p>LOWDAY: {{ displayCoin.DISPLAY.USD.LOWDAY }}</p>
          <p>LOWHOUR: {{ displayCoin.DISPLAY.USD.LOWHOUR }}</p>
          <p>MARKET: {{ displayCoin.DISPLAY.USD.MARKET }}</p>
          <p>MKTCAP: {{ displayCoin.DISPLAY.USD.MKTCAP }}</p>
          <p>OPEN24HOUR: {{ displayCoin.DISPLAY.USD.OPEN24HOUR }}</p>
        </div>
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
    handleSingleCoininfo: function(coinSymbol) {
      // console.log('hit 45');
      console.log('coinSymbol: ', coinSymbol);
      this.$store.dispatch('handleGetSingleCoinInfo', coinSymbol)
    }
  },
  
  // Invoke methods
  created() {
    this.handleGetAllTotalByVol()
  },
  
  // will bind store to this
  // mapGetters in computed will bind || connenct to this components
  computed: {
    ...mapGetters({ coins: 'allTotalByVol' })
  },
  // mounted: {
  //      ...mapState(['allCoinData'])
 
  // }
}
</script>

<style lang="scss">
$color: #333;
$testBox-border: 1px solid lightblue;

.testBox {
  border: $testBox-border;
}

.coinContainer {
  border: $testBox-border;
  display: inline-grid;
  grid-auto-rows: auto;
  // margin-bottom: 1rem;
  // height: 50%;
  // width: 20rem;

  img {
      border: 1px solid lightcoral;
      height: 10rem;
      width: 10rem;
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
