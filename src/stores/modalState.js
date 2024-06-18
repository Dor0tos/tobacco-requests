export default {
    namespaced: true,
    state: {
        isOpen: false,
        data: null
    },
    mutations: {
        OPEN_MODAL(state, payload) {
            state.isOpen = true
            state.data = payload
        },
        CLOSE_MODAL(state) {
            state.isOpen = false
            state.data = null
        }
    },
    actions: {
        openModal({ commit }, payload) {
            commit('OPEN_MODAL', payload)
        },
        closeModal({ commit }) {
            commit('CLOSE_MODAL')
        }
    },
    getters: {
        isModalOpened: (state) => state.isOpen,
        modalContent: (state) => state.data
    }
}
