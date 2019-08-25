import Vue from 'vue';
import Vuex from 'vuex';
import artistVideosService from './services/ArtistVideoService';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    artistInfo: {},
    artistVideos: [],
  },
  mutations: {
    SET_ARTIST_INFO(state, payload) {
      state.artistInfo = payload;
    },
    SET_ARTIST_VIDEOS(state, payload) {
      state.artistVideos = payload;
    },
  },
  getters: {
    getArtistInfo: state => state.artistInfo,
    getArtistVideos: state => state.artistVideos,
  },
  actions: {
    updateArtistInfo({ dispatch, commit }, info) {
      commit('SET_ARTIST_INFO', info);

      if (Object.keys(info).length > 0) {
        dispatch('updateArtistVideos', info.name);
      } else {
        commit('SET_ARTIST_VIDEOS', []);
      }
    },
    updateArtistVideos({ commit }, artistName) {
      artistVideosService.getVideos(artistName).then((resp) => {
        if (resp.items) {
          commit('SET_ARTIST_VIDEOS', resp.items);
        }
      });
    },
  },
});
