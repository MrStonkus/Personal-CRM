//This Vuex store will be used for global access of data to any component
import Vue from "vue";
import Vuex from "vuex";
import { uuid } from "vue-uuid";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //Set data for Kanban
    stages: [
      "Įvesta",
      "Bendraujama",
      "Reikalingas pasiūlymas",
      "Pasiūlymas pateiktas",
      "Užsakymas vykdomas"
    ],
    deals: [
      {
        id: "fhgfbgf",
        status: "Įvesta",
        title: "Antras",
        activityDate: "2019-03-17T16:00:00.957Z",
        isActivityDateAllDay: false
      },
      {
        id: "fhgfbgf2",
        status: "Įvesta",
        title: "Pirmas",
        activityDate: "2019-03-17T08:58:09.957Z",
        isActivityDateAllDay: false
      },
      {
        id: "sdgdfg",
        status: "Bendraujama",
        title: "Buy coffee machine",
        activityDate: "2016-03-17T09:58:09.957Z",
        isActivityDateAllDay: true
      },

      {
        id: "energizer",
        status: "Reikalingas pasiūlymas",
        title: "Find better AirBnB options",
        activityDate: "2013-01-20T09:30:51.957Z",
        isActivityDateAllDay: true
      },
      {
        id: "sdgfdgfdfg",
        status: "Pasiūlymas pateiktas",
        title: "Find",
        activityDate: "2016-03-17T09:58:09.957Z",
        isActivityDateAllDay: false
      },
      {
        id: "dghdgdgdfgdgd",
        status: "Užsakymas vykdomas",
        title: "Find better AirBnB options sdfsdfds sdfsdf",
        activityDate: "2015-04-20T09:30:51.01Z",
        isActivityDateAllDay: false
      }
    ]
  },
  //Mutations updating this state
  mutations: {
    ADD_DEAL(state) {
      state.deals.push({
        id: uuid.v4(),
        status: state.stages[0],
        title: "Naujas sandoris",
        activityDate: new Date()
      });
    }
  },
  actions: {}
});
