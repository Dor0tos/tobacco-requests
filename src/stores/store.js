import { createStore } from 'vuex'
import modalState from '@/stores/modalState'
import authStore from '@/stores/authStore'

const store = createStore({
    modules: {
        auth: authStore,
        modal: modalState
    }
})

export default store
