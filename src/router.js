// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";
import NotFoundComponent from "./components/NotFoundComponent.vue";
import Home from "./views/Home.vue";
import Settings from "./views/Settings.vue";
import DealShow from "./views/DealShow.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  // mode: "history", // Default Hash # in URL is anabled, this change this mode
  routes: [
    {
      path: "*",
      component: NotFoundComponent
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/deal/:id",
      name: "deal-show",
      component: DealShow,
      props: true
    },
    {
      path: "/settings",
      name: "settings",
      component: Settings
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
