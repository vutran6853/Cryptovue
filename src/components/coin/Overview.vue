<template>
  <div>
    <p>Overview</p>
      <!-- <div @click='handleFetchSingleCoininfo(coinDATA.CoinInfo.Internal)' class="coinContainer coinHover" v-for='coinDATA in coins' v-bind:key='coinDATA.CoinInfo.Internal'> -->
      <p>CHANGE24HOUR: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.CHANGE24HOUR }}</p>
      <p>CHANGEDAY: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.CHANGEDAY }}</p>
      <p>CHANGEPCT24HOUR: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.CHANGEPCT24HOUR }}</p>
      <p>FROMSYMBOL: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.FROMSYMBOL }}</p>
      <p>HIGH24HOUR: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.HIGH24HOUR }}</p>
      <!-- <img :src="https://www.cryptocompare.com + this.coinDATA[`${ this.$route.params.coin_id }`].USD.IMAGEURL" alt=""/> -->
      <img v-bind:src="'https://www.cryptocompare.com' + coinDATA[`${ this.$route.params.coin_id }`].USD.IMAGEURL" alt="broke"/>
      <p>HIGHDAY: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.HIGHDAY }}</p>
      <p>HIGHHOUR: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.HIGHHOUR }}</p>
      <p>LASTMARKET: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.LASTMARKET }}</p>
      <p>LASTVOLUME: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.LASTVOLUME }}</p>
      <p>LOW24HOUR: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.LOW24HOUR }}</p>
      <p>LOWDAY: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.LOWDAY }}</p>
      <p>LOWHOUR: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.LOWHOUR }}</p>
      <p>MARKET: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.MARKET }}</p>
      <p>MKTCAP: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.MKTCAP }}</p>
      <p>OPEN24HOUR: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.OPEN24HOUR }}</p>
      <p>CHANGEDAY: {{ coinDATA[`${ this.$route.params.coin_id }`].USD.CHANGEDAY }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: "Overview",
  mounted() {
    // console.log('THIS>', )
    // console.log('coinData=', this.coinDATA[this.$route.params.coin_id]);
    // console.log(coinDATA);
    // console.log('this', this.$store.getters.getCoinInfo)

  },
  computed: {
    // coinDATA: this.$store.state.cryptoData.singleCoinData
    ...mapGetters({ coinDATA: 'getCoinInfo' })
  }
}
</script>

<style>

</style>
