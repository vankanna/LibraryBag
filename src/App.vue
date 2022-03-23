<template>
  <div id="app">
    <nav class="navbar bg-dark text-light">
      <span class="navbar-brand"><i class="fas fa-shopping-bag mx-2"></i> CHECK IT OUT!</span>
    </nav>

    <div class="container-fluid mt-3">
      <!--    <img alt="Vue logo" src="./assets/logo.png">-->
      <!--    <hello-universe msg="Welcome to Your Vue.js App"/>-->
      <library-manager></library-manager>
    </div>
  </div>
</template>

<script>
// import HelloUniverse from './components/HelloWorld.vue'
import LibraryManager from "@/components/LibraryManager";

export default {
  name: 'App',
  components: {
    LibraryManager,
    // HelloUniverse
  }
}
</script>

<style>

</style>
