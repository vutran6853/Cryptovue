<template>
  <div>
   <div class="miningContainer" v-if="bool == true">
      <div class="miningGrid">
        <div class="miningGridItem" v-for="(value, name, index) in miningDATA" v-bind:key="index">
          <StarRating class="star-rating" 
                      v-bind:star-size='20' 
                      v-bind:rating="value.Rating.Avg" 
                      v-bind:read-only="true" 
                      v-bind:increment='0.01'>
          </StarRating>
          <a class="" v-bind:href="value.AffiliateURL">
            <p>{{ value.Company }}</p>
          </a>
          <p>Plan: {{ value.Name }}</p>
          <p>Cost: {{ value.Cost }}</p>
          <p>CurrenciesAvailable: {{ value.CurrenciesAvailable }}</p>
          <p>Recommended: {{ value.Recommended ? 'Yes' : 'No' }}</p>
          <p>Sponsored: {{  value.Sponsored ? 'Yes' : 'No' }}</p>
          <a v-bind:href="value.AffiliateURL">
            <img v-bind:src='"https://www.cryptocompare.com" + value.LogoUrl' alt="LogoUrl"/>
          </a>
        </div>
      </div>

      <div class="right-panel">
        <p>right side panel</p>
      </div>
   </div>

   <div v-else=''>
     <p>loading...</p>
   </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import StarRating from 'vue-star-rating'

export default {
  name: "Mining",
  data() {
    return {
      top10MiningData: [],
      bool: false
    }
  },
  components: {
    StarRating
  },
  created() {
    this.$store.dispatch('handleGetAllMining')
    this.bool = true
  },
  beforeMount() {
    this.$store.dispatch('handleGetAllMining')
    this.bool = true
  },
  computed: {
    ...mapGetters({ miningDATA: 'getMiningData' })
  },
  beforeDestroy() {
    this.bool = false
  }

}
</script>

<style lang='scss' scroped>

.miningContainer {
  // border: 1px solid lightcyan;
  display: flex;

  .miningGrid {
    // border: 2px solid red;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    // width: 50rem;
    grid-gap: 2px;
    font-size: 14px;

    .miningGridItem {
      // border: 1px solid ;
      font-size: 12px;
      background-color: lightblue;
      padding-left: 5px;


      img {
        height: 5rem;
        width: 5rem;
      }

      .star-rating {
        // border: 2px solid red;
        // height: 50px;
        // width: 50px;
        float: right;
      }

    }
  }

  .right-panel {
    border: 2px solid red;
    // float: right;
    width: 25%;

  }

  a:link {
    // color: #cc0000;
    // text-decoration: underline;
  }
}



</style>
