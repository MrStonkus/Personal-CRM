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
        title: "Vėluojantis",
        activityDate: "2016-03-17T16:00:00.957Z",
        isActivityDateAllDay: false
      },
      {
        id: "siandien",
        status: "Įvesta",
        title: "Vėluojantis2",
        activityDate: "2010-03-17T22:58:09.957Z",
        isActivityDateAllDay: false
      },
      {
        id: "beActivity",
        status: "Įvesta",
        title: "Nenustatytas",
        activityDate: "",
        isActivityDateAllDay: false
      },
      {
        id: "sdgfhshhdhf",
        status: "Įvesta",
        title: "Būsimas2",
        activityDate: "2020-01-20T09:30:51.957Z",
        isActivityDateAllDay: false
      },
      {
        id: "siandien2",
        status: "Įvesta",
        title: "Būsimas",
        activityDate: "2019-08-17T19:30:51.957Z",
        isActivityDateAllDay: false
      },
      {
        id: "siandisdsd",
        status: "Įvesta",
        title: "Būsimas šiandien Visą dieną",
        activityDate: "2019-03-17T21:30:51.957Z",
        isActivityDateAllDay: true
      },
      {
        id: "siandien5",
        status: "Įvesta",
        title: "Vėluojantis šiandien Visą dieną",
        activityDate: "2019-03-17T10:30:51.957Z",
        isActivityDateAllDay: true
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
        title: "Naujas sandoris",
        // @ts-ignore
        activityDate: new Date(),
        isActivityDateAllDay: false
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
