import Vue from 'vue';
import Vuex from 'vuex';
// import {getEpisodes} from "@/services/episode.service";
// import {map} from "rxjs";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    characters: [],
    episodes: [],
    locations: [],
    loading: false
  },
  mutations: {
    fetchEpisodes() {
      console.log('episodes');
    },
    toogleLoading() {
      console.log('loading');
    }
  },
  actions: {
    fetchEpisodes({ state, commit }, episodes) {
      state.episodes = episodes
    },
    fetchLocations({ state, commit }, locations) {
      state.locations = locations
    },
    toogleLoading({ state }) {
      state.loading = !state.loading
    }
  },
  modules: {},
});
