import Vue from 'vue';
import Vuex from 'vuex';
// import {getEpisodes} from "@/services/episode.service";
// import {map} from "rxjs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    episodes: [],
    locations: []
  },
  mutations: {
    fetchEpisodes() {
      console.log('here');
    }
  },
  actions: {
    fetchEpisodes({ state, commit }, episodes) {
      state.episodes = episodes
    },
    fetchLocations({ state, commit }, locations) {
      state.locations = locations
    }
  },
  modules: {},
});
