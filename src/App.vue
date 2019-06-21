<template>
  <div>
    <Narvbar/>
    <router-view></router-view>
  </div>
</template>

<script>
// import Dashboard from './components/dashboard/Dashboard.vue';
import Narvbar from './components/navbar/Navbar'

export default {
  name: 'App',
  components: {
    Narvbar
  }
}
</script>

<style>

* {
  margin: 0px;
  padding: 0px;
}

</style>
