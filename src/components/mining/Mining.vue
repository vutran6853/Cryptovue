<template>
  <div class="">
    <p>Mining Components</p>
    
    <div class="miningGrid" v-for='(value, name, index) in miningDATA' v-bind:key=index>
      
      <p>Company: {{ value.Company }}</p>
      <p>Cost: {{ value.Cost }}</p>
      <p>CurrenciesAvailable: {{ value.CurrenciesAvailable }}</p>
      <p>Rating: {{ value.Rating }}</p>
      <p>Recommended: {{ value.Recommended }}</p>
      <p>Sponsored: {{ value.Sponsored }}</p>
      <p>HashesPerSecond: {{ value.HashesPerSecond }}</p>

<!-- {{ name }} -->
<!-- {{ index }} -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "Mining",
  data() {
    return {
      top10MiningData: []
    }
  },
  created() {
    // console.log('hit created')
    this.$store.dispatch('handleGetAllMining')
  },
  beforeMount() {
    console.log('hit mounted');
    console.log('this=', this.miningDATA);

    // this.top10MiningData = 
  },
  computed: {
    ...mapGetters({ miningDATA: 'getMiningData' })
  },

}
</script>

<style lang=scss srcoped>
.miningGrid {
  border: 2px solid red;
  display: inline-flex;
}
</style>
