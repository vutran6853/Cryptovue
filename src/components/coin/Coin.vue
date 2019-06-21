<template>
  <div>
    <div v-if="coins[0]">
      <div class="coinListType">
        <p>Coins List: </p>
        <span @click="handleGetCurrentTypeForAllCoin(value)" 
              v-for="(value, index) in typeCurrent" 
              v-bind:key="index">
              {{ value }}
        </span>
      </div>

      <div class="headerGrid">
        <p>#</p>
        <p>Coin</p>
        <p>Price</p> 
        <p>Total Vol.24</p>
        <p>Chg.24h</p>
      </div>

      <router-link v-bind:to="`overview/${ displayCoin.CoinInfo.Internal }`" v-for='(displayCoin, index) in coins' v-bind:key='displayCoin.CoinInfo.Internal'> 
        <div class="coinGrid coinHover" @click="handleFetchSingleCoininfo(coins[index])">
          <p>{{ index + 1 }}</p>
          <img v-bind:src="'https://www.cryptocompare.com' + displayCoin.DISPLAY.USD.IMAGEURL" alt="broke"/>
          <p>{{ displayCoin.DISPLAY.USD.HIGH24HOUR }}</p>
          <p>{{ displayCoin.DISPLAY.USD.CHANGE24HOUR }}</p>
          <p>{{ displayCoin.DISPLAY.USD.CHANGEPCT24HOUR }}</p>
        </div>
      </router-link>
    </div>

    <div v-else="">
      <p>False</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: "Coin",
  data() {
    return {
      typeCurrent: ["USD", "USDT", "EUR", "JPY", "KRW"]
    }
  },

  // mapAction will import from store
  methods: {
    ...mapActions(['handleGetAllTotalByVol']),

    handleFetchSingleCoininfo: function(coinInfo) {
      this.$store.dispatch('handleGetSingleCoinInfo', coinInfo)
    },

    handleGetCurrentTypeForAllCoin(value) {
      console.log('hit handleGetCurrentTypeForAllCoin', value);

      this.$store.dispatch('handleGetCurrentTypeForAllCoin', value)
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
  }
}
</script>

<style lang="scss">
$color: #333;
$testBox-border: 1px solid blue;
$marin5px: 5px;
$text-align-left: left;
$font-size-16: 16px;

.coinListType {
  // border: $testBox-border;
  display: inline-flex;
  height: 100%;
  font-size: $font-size-16;

  p {
    margin: $marin5px;
  }
  span {
    margin: $marin5px;
  }
}

.coinListType > span:hover {
  background-color: red;
  cursor: pointer;
}

.headerGrid {
  // border: 1px solid blue;
  display: grid;
  grid-template-columns: 50px 1fr 1fr 1fr 1fr;
  
  p {
    border: 1px solid red;
    text-align: $text-align-left;
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
