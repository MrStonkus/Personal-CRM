// @ts-nocheck
import Vue from "vue"; // main framework
import App from "./App.vue"; // load main app file
import router from "./router"; // load router component for routing pages
import store from "./store"; // load vuex component for using global variables in all components
import BootstrapVue from "bootstrap-vue"; // load buitifull UI tools
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

//Create, render and mount main App.vue file
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
