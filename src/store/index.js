import { createStore } from 'vuex';

export default createStore({
    state: {
        pageTitle: 'Default Title'
    },
    mutations: {
        setPageTitle(state, title) {
            state.pageTitle = title;
        }
    },
    actions: {
        updatePageTitle({ commit }, title) {
            commit('setPageTitle', title);
        }
    }
});
