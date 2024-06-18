import { supabase } from '@/libs/supabase'
import { createStore } from 'vuex'

const state = {
    apiKey: null,
    displayName: null,
    role: null,
    permissions: null
}

const mutations = {
    SET_API_KEY(state, apiKey) {
        state.apiKey = apiKey
    },
    SET_DISPLAY_NAME(state, displayName) {
        state.displayName = displayName
        console.log('displayName >', displayName)
    },
    SET_ROLE(state, role) {
        state.role = role
    },
    SET_PERMISSIONS(state, permissions) {
        state.permissions = permissions
    },
    LOGOUT(state) {
        state.apiKey = null
        state.displayName = null
        state.role = null
        state.permissions = null
    }
}

const actions = {
    logout({ commit }) {
        commit('LOGOUT')
    },
    login({ commit }, sessionInfo) {
        ;(async () => {
            const { data: clientInfo } = await supabase
                .from('profiles')
                .select()
                .eq('id', sessionInfo.user.id)
            console.log('clientInfo[0] >', clientInfo[0])
            commit('SET_PERMISSIONS', clientInfo[0].permissions)
            commit('SET_ROLE', clientInfo[0].role)
            commit('SET_DISPLAY_NAME', clientInfo[0]['display-name'])
            commit('SET_API_KEY', sessionInfo.access_token)
            console.log(sessionInfo)
        })()
    }
}

const getters = {
    apiKey: (state) => state.apiKey,
    displayName: (state) => state.displayName,
    role: (state) => state.role,
    isAuthenticated: (state) => !!state.apiKey
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
