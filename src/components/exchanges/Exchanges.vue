<template>
  <div>
    <!-- <div v-for='(exchanges, index) in exchangesData' v-bind:key='index'> -->
      <!-- <p>{  }</p> -->
    <!-- </div> -->
    <div class="flex" v-for='(exchanges, index) in exchangesData' v-bind:key='index'>
      <img v-bind:src="'https://www.cryptocompare.com/' + exchanges.LogoUrl" alt="broke">
      <p>{{ exchanges.InternalName }}</p>
      <p>{{ exchanges.Country }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: "Exchanges",

  // mapAction will import from store
  methods: {
    ...mapActions(['handleGetAllExchanges']),
  
  },

  // Invoke methods
  created() {
    this.handleGetAllExchanges()
  },

  // will bind store to this
  // mapGetters in computed will bind || connenct to this components
  computed: {
    ...mapGetters({ exchangesData: 'getAllExchanges' })
  }
}
</script>

<style scroped lang="scss">

.flex {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

img {
  height: 50px;
  width: 50px;
}

</style>
