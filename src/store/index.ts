import { createStore } from 'vuex';

export default createStore({
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
