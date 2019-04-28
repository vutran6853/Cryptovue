<template>
  <div>
    <p>Overview</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: "Overview",
  
  computed: {
    // console.log('this', this.$store.state.cryptoData.singleCoinData)
    // coinDATA: this.$store.state.cryptoData.singleCoinData
    ...mapGetters({ coinDATA: 'getCoinInfo' })
  }
}
</script>

<style>

</style>
