<template>
  <div id="app">
    <!-- Load Top NavBar, uses heitght 48px -->
    <NavBar />

    <!-- Load pages from NavBar views directory-->
    <div id="viewsOfNavbar">
      <router-view />
    </div>

    <!-- Load footer -->
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Footer from "@/components/Footer.vue";

export default {
  // set components to use in template
  components: { NavBar, Footer }
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
  background-color: #f7f7f7;
  color: #26292c;
  font: 400 14px/20px Open Sans, sans-serif;
  margin: 0px;
  padding: 0px;
  min-height: calc(100vh);
  max-height: calc(100vh);
  /* overflow: hidden; */
}

#viewsOfNavbar {
  /* border: solid 1px red; */
  /* margin: -1px 0px 1px 0px; */
  /* calculation all height - NavBar48px - Footer20px */
  min-height: calc(100vh - 48px - 20px);
  max-height: calc(100vh - 48px - 20px);
  /* overflow: hidden; */
}
</style>
