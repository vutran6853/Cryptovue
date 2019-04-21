<template>
  <div>
    <p>Coin Components</p>
    <p class="testBox">TestBox</p>  
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: "Coin",

  // mapAction will import from store
  methods: {
    ...mapActions(['handleGetAllCoin'])
  },
  
  // Invoke methods
  created() {
    this.handleGetAllCoin()
  },
  
  // will bind store to this
  // mapState in computed will bind || connenct to this components
  computed: {
    ...mapState(['allCoinData'])
  }
}
</script>

<style lang='scss'>
$color: #333;
$testBox-border: 1px solid lightblue;

.testBox {
  border: $testBox-border;
}


</style>
