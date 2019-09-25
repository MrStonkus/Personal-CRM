// @ts-nocheck
import Vue from "vue"; // main framework
import App from "./App.vue"; // load main app file
import router from "./router"; // load router component for routing pages
import store from "./store"; // load vuex component for using global variables in all components
import BootstrapVue from "bootstrap-vue"; // load buitifull UI tools
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import UUID from "vue-uuid"; // component for generating unique ID
import VueSplit from "vue-split-panel";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(UUID);
Vue.use(VueSplit);

//Create, render and mount main App.vue file
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
