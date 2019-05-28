<template>
  <div>
    <Narvbar/>
    <router-view></router-view>
  </div>
</template>

<script>
// import Dashboard from './components/dashboard/Dashboard.vue';
import Narvbar from './components/navbar/Navbar';

export default {
  name: 'app',
  components: {
    Narvbar
  }
}
</script>

<style>

body {
  margin: 0px;
}

</style>
