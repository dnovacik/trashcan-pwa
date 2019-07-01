import * as firebaseService from '@/services/firebaseService';

const state = {
    trashes: [],
    error: null
};

const mutations = {
    addTrash(state, trash) {
        state.trashes.push(trash);
    },
    removeTrash(state, trashKey) {
        state.trashes = state.trashes.filter((val, index) => {
            return val.Key !== trashKey;
        });
    },
    setError(state, err) {
        state.error = err;
    }
};

const actions = {
    addTrash({ commit }, trash) {
        console.log(trash);
        firebaseService.saveTrash(trash)
            .then(snapshot => {
                console.log(snapshot);
                commit('addTrash', snapshot);
            })
            .catch(err => {
                commit('setError', err);
            })
    },
    removeTrash({ commit }, trashKey) {
        commit('removeTrash', trashKey);
    }
}

export default {
    state,
    mutations,
    actions
}
