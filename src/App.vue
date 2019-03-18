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
  background-color: #f7f7f7;
  color: #26292c;
  font: 400 14px/20px Open Sans, sans-serif;
  min-width: 1000px;
}

#mainView {
  height: auto;
}
</style>
