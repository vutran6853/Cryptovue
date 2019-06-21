<template>
  <div>
    <p>{{ title }}</p>
    <dir>
      <ul>
        <li>EUR: {{ currentBTCPrice.EUR }}</li>
        <li>JPY: {{ currentBTCPrice.JPY }}</li>
        <li>USD: {{ currentBTCPrice.USD }}</li>
      </ul>
    </dir>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "Dashboard",
  methods: {
    ...mapActions(['handleFetchdata'])
  },
  computed: {
    ...mapGetters({ title: 'getTitle', currentBTCPrice: 'getCurrentPrice'})
  },
  created() {
    this.handleFetchdata()
  }
}

</script>

<style>

</style>
