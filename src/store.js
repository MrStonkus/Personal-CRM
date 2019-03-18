//This Vuex store will be used for global access of data to any component
import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "vue-uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Default global data for Kanban
    stages: [
      "Įvesta",
      "Bendraujama",
      "Reikalingas pasiūlymas",
      "Pasiūlymas pateiktas",
      "Užsakymas vykdomas"
    ],
    deals: [
      {
        id: "sdfsfsf",
        status: "Įvesta",
        company: "UAB Kompanija",
        contact: "Tomas Baltušis",
        activityDate: "2016-03-17T16:00:00.957Z",
        isActivityDateAllDay: false,
        product: "Vyniotuvas",
        action: "Laukiu kol griš iš atostogų"
      },
      {
        id: "sdfasdsfgfsfsf",
        status: "Įvesta",
        company: "UAB Flirtas",
        contact: "Rokas",
        activityDate: "2015-03-17T16:00:00.957Z",
        isActivityDateAllDay: false,
        product: "Stelažas",
        action: "Neapsisprendžia"
      },
      {
        id: "kgyjfghrfg",
        status: "Įvesta",
        company: "UAB Softas",
        contact: "Tadas Kernagis",
        activityDate: "2019-03-17T16:00:00.957Z",
        isActivityDateAllDay: false,
        product: "Vyniotuvas",
        action: "Paruošti KP"
      }
    ],
    //Default global settings
    isSortDealsAuto: true,
    counter: 10
  },
  //Mutations for updating this.state
  mutations: {
    ADD_DEAL(state) {
      state.deals.push({
        id: uuid.v4(),
        status: state.stages[0],
        company: "UAB Nauja",
        contact: "vardenis pavardenis",
        // @ts-ignore
        activityDate: new Date(),
        isActivityDateAllDay: true
      });
      state.counter += 1;
    },
    // updateisSortDealsAuto(state, val) {
    //   state.isSortDealsAuto = val;
    // },
    updateDealsList(state, val) {
      state.deals.find(d => d.id === val.id).status = val.status;
    }
  },
  actions: {}
});
