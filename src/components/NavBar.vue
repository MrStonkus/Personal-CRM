<template>
  <div class="navBar">
    <router-link :to="{ name: 'deals' }">Home|</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navBar {
  background-color: #1f1f1f;
  text-align: center;
  vertical-align: middle;
  line-height: 48px;
}

.navBar a {
  font-weight: bold;
  color: #a5a9ad;
}

.navBar a.router-link-exact-active {
  color: #42b983;
}
</style>
