<template>
  <div>
    <p>Exchanges Components</p>
    <div v-for='(exchanges, index) in exchangesData' v-bind:key='index' class="exchangesBox">
      <p>Name: {{ exchanges.InternalName }}</p>
      <p>Country: {{ exchanges.Country }}</p>
      <p>DepositMethods: {{ exchanges.DepositMethods }}</p>
      <p>FullAddress: {{ exchanges.FullAddress }}</p>
      <p>Id: {{ exchanges.Id }}</p>
      <p>Description: {{ exchanges.Description }}</p>
      <p>DepositMethods: {{ exchanges.DepositMethods }}</p>
      <p>AffiliateUrl: {{ exchanges.AffiliateUrl }}</p>
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
    ...mapGetters({ exchangesData: 'allExchanges' })
  },

}
</script>

<style scroped lang="scss">

.exchangesBox > p {
  border: 1px solid lightgray;
  display: inline-block;
  // grid-auto-rows: auto;
  // height: 10rem;
  // width: 5rem;

}
</style>
