<template>
  <div id="app">
    <!-- Load Top NavBar -->
    <NavBar />
    <div id="mainView">
      <!-- Load pages from NavBar views directory-->
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from "../src/components/NavBar.vue";

export default {
  // set components to use in template
  components: {
    NavBar
  }
};
</script>
<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: auto;
}

#mainView {
  height: auto;
}
</style>
