import { supabase } from '@/libs/supabase'

const state = {
    user: null,
    displayName: null,
    role: null,
    permissions: null
}

const mutations = {
    SET_USER(state, user) {
        state.user = user || null
    },
    LOGOUT(state) {
        state.user = null
        state.displayName = null
        state.role = null
        state.permissions = null
    },
    SET_PROFILE(state, profile) {
        state.displayName = profile['display-name']
        state.role = profile.role
        state.permissions = profile.permissions
    }
}

const actions = {
    async logout({ commit }) {
        await supabase.auth.signOut()
        commit('LOGOUT')
    },
    async login({ commit, dispatch  }, { email, password }) {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) {
            throw error
        }
        const user = data.user;

        commit('SET_USER', user)
        
        if (user) {
            dispatch('setProfileByUser', user)
        }
    },
    async setProfileByUser({commit}, user) {
        const { data: profile, error: profileError } = await supabase
            .from('profiles')
            .select()
            .eq('id', user.id)
            .single()
        
        if (profileError) {
            throw profileError
        }
        
        commit('SET_PROFILE', profile)
    },
    async fetchUser({commit}) {
        const user = await supabase.auth.getUser()
        commit('SET_USER', user)
    },
    async loginBySession({commit}, session) {
        const {user, data, error} = await supabase.auth.admin.getUserById(session.user_id)
        commit('SET_USER', user)

        if (error) { throw error }
        dispatch('setProfileByUser', user)
    },
    async fetchSession() {
        const {session, error} = await supabase.auth.getSession()
        if (error) {
            throw error
        }
        dispatch('loginBySession', session)
    }
}

const getters = {
    displayName: (state) => state.displayName,
    role: (state) => state.role,
    isAuthenticated: (state) => !!state.user
}
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
