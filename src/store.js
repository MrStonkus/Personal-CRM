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
        company: "UAB Praeityje tikslus6",
        contact: "Tomas Baltušis",
        activityDate: "2016-03-17T13:23:00.957Z",
        exactTime: true,
        product: "Vyniotuvas",
        action: "Laukiu kol griš iš atostogų"
      },

      {
        id: "sdfasdesrtetresfgfsfsf",
        status: "Įvesta",
        company: "Aktyvumas nenustatytas",
        contact: "Rokas",
        activityDate: "",
        exactTime: true,
        product: "Stelažas",
        action: "Neapsisprendžia"
      },
      {
        id: "ererouifg",
        status: "Įvesta",
        company: "Šiandien visa diena",
        // contact: "Tadas Kernagis",
        activityDate: "2019-03-21T21:15:00.957Z",
        exactTime: false,
        product: "Vyniotuvas",
        action: "Paruošti KP"
      },

      {
        id: "kgyjfghr8998uifg",
        status: "Įvesta",
        company: "Šiandien tikslus ateityje",
        contact: "Tadas Kernagis",
        activityDate: "2019-03-21T21:10:00.957Z",
        exactTime: true,
        product: "Vyniotuvas",
        action: "Paruošti KP"
      },
      {
        id: "2434hr8998uifg",
        status: "Įvesta",
        company: "Ateityje tikslus",
        contact: "Tadas Kernagis",
        activityDate: "2020-03-19T21:15:00.957Z",
        exactTime: true,
        product: "Vyniotuvas",
        action: "Paruošti KP"
      },
      {
        id: "kgyjf3243sd998uifg",
        status: "Įvesta",
        company: "Ateityje visa diena",
        contact: "Tadas Kernagis",
        activityDate: "2021-03-19T21:15:00.957Z",
        exactTime: false,
        product: "Vyniotuvas",
        action: "Paruošti KP"
      },

      {
        id: "kgyjfghruouiouifg",
        status: "Įvesta",
        company: "Šiandien tikslus pavėluotas",
        contact: "Tadas Kernagis",
        activityDate: "2019-03-21T08:15:00.957Z",
        exactTime: true,
        product: "Vyniotuvas",
        action: "Paruošti KP"
      },

      {
        id: "sdffgf55vbngsfsf",
        status: "Įvesta",
        company: "Praeityje visa diena",
        contact: "Tomas Baltušis",
        activityDate: "2017-03-17T13:23:00.957Z",
        exactTime: false,
        product: "Vyniotuvas",
        action: "Laukiu kol griš iš atostogų"
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
        exactTime: true,
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
