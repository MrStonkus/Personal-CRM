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
        title: "Buy coffee machine"
      },
      {
        id: "sdgdfg",
        status: "Bendraujama",
        title: "Buy coffee machine"
      },

      {
        id: "egrergegr",
        status: "Reikalingas pasiūlymas",
        title: "Find better AirBnB options"
      },
      {
        id: "sdgfdgfdfg",
        status: "Pasiūlymas pateiktas",
        title: "Find"
      },
      {
        id: "dghdgdgdfgdgd",
        status: "Užsakymas vykdomas",
        title: "Find better AirBnB options sdfsdfds sdfsdf"
      }
    ]
  },
  //Mutations updating this state
  mutations: {
    ADD_DEAL(state) {
      state.deals.push({
        //TODO: Implement ID generator
        id: uuid.v1(),
        status: state.stages[0],
        title: "Naujas sandoris"
      });
    }
  },
  actions: {}
});
