<template>
  <div>
    <p>Coin Components</p>
    <p class="testBox">TestBox</p>
    <div v-if='coins[0]'>
      <p>True</p>

      <div v-for='displayCoin in coins' v-bind:key='displayCoin.FROMSYMBOL' class="coinsBox">
        <p>CHANGE24HOUR: {{ displayCoin.CHANGE24HOUR }}</p>
        <p>CHANGEDAY: {{ displayCoin.CHANGEDAY }}</p>
        <p>CHANGEPCT24HOUR: {{ displayCoin.CHANGEPCT24HOUR }}</p>
        <p>FROMSYMBOL: {{ displayCoin.FROMSYMBOL }}</p>
        <p>HIGH24HOUR: {{ displayCoin.HIGH24HOUR }}</p>
        <!-- <img :src="https://www.cryptocompare.com + displayCoin.IMAGEURL" alt=""/> -->
        <img v-bind:src="'https://www.cryptocompare.com' + displayCoin.IMAGEURL" alt="broke"/>
        <p>HIGHDAY: {{ displayCoin.HIGHDAY }}</p>
        <p>HIGHHOUR: {{ displayCoin.HIGHHOUR }}</p>
        <p>LASTMARKET: {{ displayCoin.LASTMARKET }}</p>
        <p>LASTVOLUME: {{ displayCoin.LASTVOLUME }}</p>
        <p>LOW24HOUR: {{ displayCoin.LOW24HOUR }}</p>
        <p>LOWDAY: {{ displayCoin.LOWDAY }}</p>
        <p>LOWHOUR: {{ displayCoin.LOWHOUR }}</p>
        <p>MARKET: {{ displayCoin.MARKET }}</p>
        <p>MKTCAP: {{ displayCoin.MKTCAP }}</p>
        <p>OPEN24HOUR: {{ displayCoin.OPEN24HOUR }}</p>
      </div>

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

.coinsBox {
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

</style>
