import axios from 'axios';
import * as types from '../types';
import * as apis from '../apis';

const state = {
  taxons: []
};

const getters = {
  [types.GET_TAXONS]: function (state) {
    return state.taxons;
  }
};

const mutations = {
  [types.MUTATE_SET_TAXONS]: function (state, payload) {
    state.taxons = payload;
  }
};

const actions = {
  [types.FETCH_TAXONS]: function (context) {
    axios.get(apis.FETCH_TAXONS).then(function (response) {
      context.commit(types.MUTATE_SET_TAXONS, response.data.taxons);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
