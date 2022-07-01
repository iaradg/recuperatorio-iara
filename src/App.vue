<template>
  <div id="app">
    <div class="jumbotron">
      <h1>Recuperatorio Iara</h1>
      <br>
      <Navbar/>
      <router-view></router-view>

    </div>
  </div>
</template>




<script>
import Navbar from './componentes/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
h1{
  color:bisque; 
}
</style>