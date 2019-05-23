<template>
  <div class="miningGrid">
    <!-- <p>Mining Components</p> -->
    
    <div class="miningGridItem" v-for='(value, name, index) in miningDATA' v-bind:key=index>
      
      <p>Company: {{ value.Company }}</p>
      <p>Name: {{ value.Name }}</p>
      <p>Cost: {{ value.Cost }}</p>
      <p>CurrenciesAvailable: {{ value.CurrenciesAvailable }}</p>
      <p>Recommended: {{ value.Recommended }}</p>
      <p>Sponsored: {{ value.Sponsored }}</p>
      <p>HashesPerSecond: {{ value.HashesPerSecond }}</p>
      <img v-bind:src="'https://www.cryptocompare.com' + value.LogoUrl" alt="LogoUrl"/>
      <StarRating v-bind:rating='value.Rating.Avg' :read-only='true' :increment='0.01'></StarRating>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import StarRating from 'vue-star-rating'

export default {
  name: "Mining",
  data() {
    return {
      top10MiningData: []
    }
  },
  components: {
    StarRating
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

<style lang=scss scoped>
.miningGrid {
  border: 2px solid red;
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 14px;

  .miningGridItem {
    border: 2px solid yellow;

    img {
      height: 5rem;
      width: 5rem;
    }

  }
}
</style>
