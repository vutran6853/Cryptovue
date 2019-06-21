<template>
  <div class="news-container">
    <div v-for="(value, index) in newsData" v-bind:key="index">
      <p>categories: {{ value.categories }}</p>
      <p>source: {{ value.source }}</p>
      <p>body: {{ value.body }}</p>
      <p>tags: {{ value.tags }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "News",
  created() {
    this.$store.dispatch('handleGetAllNews')
  },
  computed: mapGetters({ newsData: 'getAllNews' })
}
</script>

<style lang="scss">
.news-container {
  display: grid;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>

