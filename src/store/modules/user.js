import router from '@/router';
import firebase from 'firebase';

const state = {
    user: null,
    error: null
};

const mutations = {
    setUser(state, user) {
        state.user = user;
    },
    removeUser(state) {
        state.user = null;
    },
    setError(state, err) {
        state.error = err;
    }
};

const actions = {
    setUser({ commit }, user) {
        commit('setUser', user);
    },
    removeUser({ commit }) {
        commit('removeUser');
    }
}

export default {
    state,
    mutations,
    actions
}
