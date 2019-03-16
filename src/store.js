//This Vuex store will be used for global access of data to any component
import Vue from "vue";
import Vuex from "vuex";

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
        id: 0,
        status: "Įvesta",
        title: "Buy coffee machine"
      },
      {
        id: 1,
        status: "Įvesta",
        title: "Buy coffee machine"
      },
      {
        id: 2,
        status: "Įvesta",
        title: "Buy coffee machine"
      },
      {
        id: 3,
        status: "Įvesta",
        title: "Buy coffee machine"
      },
      {
        id: 4,
        status: "Įvesta",
        title: "Find better AirBnB options"
      },
      {
        id: 5,
        status: "Įvesta",
        title: "Find"
      },
      {
        id: 6,
        status: "Įvesta",
        title: "Find better AirBnB options sdfsdfds sdfsdf"
      },
      {
        id: 7,
        status: "Įvesta",
        title: "Buy coffee machine"
      },
      {
        id: 8,
        status: "Įvesta",
        title: "Buy coffee machine"
      },
      {
        id: 9,
        status: "Įvesta",
        title: "Buy coffee machine"
      },
      {
        id: 10,
        status: "Įvesta",
        title: "Buy coffee machine"
      },
      {
        id: 11,
        status: "Įvesta",
        title: "Find better AirBnB options"
      },
      {
        id: 12,
        status: "Įvesta",
        title: "Find"
      },
      {
        id: 13,
        status: "Užsakymas vykdomas",
        title: "Find better AirBnB options sdfsdfds sdfsdf"
      }
    ]
  },
  mutations: {},
  actions: {}
});
