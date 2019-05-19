<template>
  <div>
    <div v-for='(tabName, index) in navbarTab' v-bind:key='index' class="narbarItem">
      <router-link :to="`/${tabName}`">{{ tabName }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
      navbarTab: ["home", "coin", "exchanges", "mining", "wallets", "news", "portfolio"]
    }
  }
}
</script>

<style scroped>
.narbarItem {
  display: inline;
  margin-right: 1rem;
  flex-direction: column;
}

</style>
