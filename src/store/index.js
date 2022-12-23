import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// import state from "../store";
import * as getters from './getters';
import * as mutations from './mutations';
import * as actions from './actions.js';



export default new Vuex.Store({
  state:{
    detail:[]
  },
  getters,
  mutations,
  actions
})

