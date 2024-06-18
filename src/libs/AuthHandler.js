import { supabase } from './supabase'

const base = {
    isAuth: async () => {
        const {
            data: { session }
        } = await supabase.auth.getSession()
        return session !== null
    },

    getUser: async () => {
        const {
            data: { user }
        } = await supabase.auth.getUser()

        return user
    },

    getSession: async () => {
        const {
            data: { session }
        } = await supabase.auth.getSession()

        return session
    }
}

export const { isAuth, getUser, getSession } = base
