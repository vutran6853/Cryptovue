<template>
  <div>
    <p>News Components</p>
    <div v-for='news in newsData' v-bind:key='news' class="newsBox">
      <p>{{ news }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: "News",

  created: function() {
    this.$store.dispatch('handleGetAllNews')
  },
  computed: mapGetters({ newsData: 'allNews' })

}
</script>

<style lang="scss">
.newsBox {
  border: 2px solid red;
  text-align: center;
  margin: 1rem;

  p {
    border: 2px solid blue;
  }
}
</style>

