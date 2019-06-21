<template>
  <div class="narbar">
    <div class="narbarItem" v-for="(tabName, index) in navbarTab" v-bind:key="index" >
      <router-link v-bind:to="`/${tabName}`">{{ tabName }}</router-link>
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
.narbar {
  /* border: 2px solid red; */
  background-color: lightblue;
  display: grid;
  grid-template-columns: 60px 50px 105px 75px 80px 60px 90px;
  /* text-align: center; */
  justify-content: center;
  font-size: 1.5rem;
  width: 100%; 
}

.narbarItem:hover {
    background-color: red;
}

</style>
