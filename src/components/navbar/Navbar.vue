<template>
  <div>
    <div v-for='(tabName, index) in navbarTab' v-bind:key='index' class="narbarItem">
      <!-- <transition> -->
        
        <router-link :to='tabName'>{{ tabName }}</router-link>
      <!-- </transition>s -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
      navbarTab: ["Home", "Coin", "exchanges", "mining", "Wallets", "News", "Portfolio"]
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
