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
        id: "sdffgfvbngsfsf",
        status: "Įvesta",
        company: "UAB Kompanija2",
        contact: "Tomas Baltušis",
        activityDate: "2016-03-17T13:23:00.957Z",
        allDayActivity: false,
        product: "Vyniotuvas",
        action: "Laukiu kol griš iš atostogų"
      },
      {
        id: "sdfasdesrtetresfgfsfsf",
        status: "Įvesta",
        company: "UAB Flirtas",
        contact: "Rokas",
        activityDate: "2015-03-17T16:00:00.957Z",
        allDayActivity: true,
        product: "Stelažas",
        action: "Neapsisprendžia"
      },
      {
        id: "kgyjfghruouiouifg",
        status: "Įvesta",
        company: "UAB Softas",
        // contact: "Tadas Kernagis",
        activityDate: "2019-03-17T17:15:00.957Z",
        allDayActivity: false,
        product: "Vyniotuvas",
        action: "Paruošti KP"
      }
    ],
    //Default global settings - not activated, just for future example!
    isSortDealsAuto: true
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
        allDayActivity: true,
        product: "Vyniotuvas",
        action: "Paruošti KP"
      });
    },
    updateDealsList(state, val) {
      state.deals.find(d => d.id === val.id).status = val.status;
    }
  },
  actions: {}
});
