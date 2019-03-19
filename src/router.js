// @ts-nocheck
import Vue from "vue";
import Router from "vue-router";
import NotFoundComponent from "./components/NotFoundComponent.vue";
import Home from "./views/Home.vue";
import Settings from "./views/Settings.vue";
import DealShow from "./views/DealShow.vue";

Vue.use(Router);

export default new Router({
  // mode: "history", // Deafaul Hash # in URL is anabled, this change this mode
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
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
